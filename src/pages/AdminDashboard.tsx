import Articles from "../components/Articles";
import BorderButton from "../components/Buttons/BorderButton";
import edit from '../assets/edit.svg';
import remove from '../assets/delete.svg';
import { useLocation } from "react-router-dom";
import { ForeignKeyToNameConverter, PermissionChecker } from "../utils/PermissionChecker";
import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useEffect, useRef, useState } from "react";
import HttpBrowsing from "../baseRouting_network_call/HttpBrowsing";

interface userPermission {
    userPermission: string[]
}
interface appModals {
    api_link: string;
    verbose_name_plural: string;
    verbose_name: string;
    model_name: string;
}
interface adminRouteDetails {
    verbose_name: string;
    label: string;
    app_name: string;
    app_models: appModals[]
}
interface adminRouteProps {
    length: adminRouteProps;
    adminComponent: React.ComponentType<any>
    adminRoutes: adminRouteDetails[]
    adminLayout: React.ComponentType<any>

}
interface propsDetails {
    userPermission: userPermission;
    routeDetails: adminRouteProps
}

const AdminDashboard: React.FC<propsDetails> = ({ userPermission, routeDetails }) => {

    const apiListViewCall = useRef(true);
    const apiTableDataCall = useRef(true);

    const [listView, setListView] = useState({});

    const [dynamicFilterList, setDynamicFilterList] = useState([])


    const [tableHeader, setTableHeader] = useState([]);
    const [tableData, setTableData] = useState([]);
    const [queryFormData, setQueryFormData] = useState('')
    const { pathname } = useLocation();

    const [foreignKeyList, setForeignKeyList] = useState([]);


    const { permissionCheckDelete, permissionCheckAdd, permissionCheckChange } = PermissionChecker(pathname, userPermission)

    const splitPath = pathname.split('/');
    const appName = splitPath[2];
    const modalName = splitPath[3];
    const apiLink = routeDetails && routeDetails.length && routeDetails.filter((item: { app_name: string; }) => item.app_name === appName)[0].app_models
        .filter(i => i.model_name === modalName)[0].api_link.split('/v1')[1];


    useEffect(() => {
        if (apiListViewCall.current) {
            apiListViewCall.current = false;
            HttpBrowsing.get(`${apiLink}list-views/`)
                .then((res) => {
                    setListView(res.data)
                    setDynamicFilterList(res.data.filters || [])
                    const fieldWithForeignKey = res.data.list_fields && res.data.list_fields
                        .filter((item: { field_type: string; }) => item.field_type === "foreign key").map((i: { api_link: string; field_type: string; name: string; }) => ({ api_link: i.api_link, field_type: i.field_type, name: i.name }));
                    setForeignKeyList(fieldWithForeignKey)

                })
                .catch((err) => console.log("err", err))
        }
        return () => {
            apiListViewCall.current = true;
        };
    }, [pathname])

    useEffect(() => {
        if (Object.keys(listView).length) {
            const header = listView.list_fields.map((i: { verbose_name: string; }) => i.verbose_name);
            const queryForData = listView.list_fields.map((i: { name: string; }) => i.name).join(',');
            setQueryFormData(queryForData)

            setTableHeader(header)
        }

    }, [listView])

    useEffect(() => {
        if (apiTableDataCall.current) {
            apiTableDataCall.current = false
            if (tableHeader.length) {

                HttpBrowsing.get(`${apiLink}?fields=${queryFormData}`)
                    .then((res) => {
                        // Initialize an empty result object

                        ForeignKeyToNameConverter(res.data.results, foreignKeyList).then((foreignKeyDataList) => {

                            const data = res.data.results.map((item) => {

                                foreignKeyList.map((d) => {
                                    const data = item[d.name] = foreignKeyDataList[d.name]
                                        ? foreignKeyDataList[d.name].filter(rslt => rslt.id === item[d.name])[0].value
                                        : "-"

                                    return data
                                })

                                return (
                                    Object.values(item)
                                )
                            })

                            setTableData(data)


                        });


                    })
                    .catch((err) => console.log("err", err))
            }
        }
        return () => {
            apiTableDataCall.current = true;
        };

    }, [tableHeader])
    console.log("dynamicFilterList", dynamicFilterList)
    return (
        <div className="admin-table px-6 py-6 flex flex-col gap-5">
            <div className="flex justify-end flex-col" >
                {dynamicFilterList.length ? dynamicFilterList.map((item, index) => (<div key={index} >
                    {
                        item.choices && item.choices.length ?
                            <div className="flex flex-col" >
                                <label htmlFor="cars">Choose a car:</label>
                                <select key={item.name} name="cars" id="cars">
                                    <option>Choose a car</option>
                                    {item.choices.map((d, ind) => (
                                        <>
                                            <option value={d[0]}>{d[1]}</option>
                                        </>
                                    ))}
                                </select>
                            </div>
                            :
                            <div className="flex flex-col" >
                                <label htmlFor="cars">{item.name}</label>
                                <input type="text" placeholder={item.name} />
                            </div>
                    }

                </div>

                )) : ''}
                {
                    permissionCheckAdd.length ? <BorderButton title={'CREATE'} /> : ''
                }

            </div>

            <table>
                <tr>
                    {
                        tableHeader.length ?
                            <>
                                {tableHeader.map((item) => (
                                    <>
                                        <th key={item} >{item}</th>

                                    </>

                                ))}
                                <th>Action</th>
                            </>
                            : ''
                    }

                </tr>
                {
                    tableData.length && tableData.map((item) => (
                        <tr key={item[0]} >
                            {item.map((d: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined, index: Key | null | undefined) => <td key={index}>{d}</td>)}
                            <td>
                                <div className="flex gap-3">
                                    {
                                        permissionCheckChange.length ? <img src={edit} alt="edit" height={15} width={15} /> : ''
                                    }

                                    {
                                        permissionCheckDelete.length ? <img src={remove} alt="remove" height={12} width={12} /> : ''
                                    }

                                </div>
                            </td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )
}

export default AdminDashboard