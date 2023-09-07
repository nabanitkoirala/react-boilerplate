import Articles from "../components/Articles";
import BorderButton from "../components/Buttons/BorderButton";
import edit from '../assets/edit.svg';
import remove from '../assets/delete.svg';
import { useLocation } from "react-router-dom";
import { PermissionChecker } from "../utils/PermissionChecker";
import { useEffect, useState } from "react";
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
    adminComponent: React.ComponentType<any>
    adminRoutes: adminRouteDetails[]
    adminLayout: React.ComponentType<any>

}
interface propsDetails {
    userPermission: userPermission;
    routeDetails: adminRouteProps
}

const AdminDashboard: React.FC<propsDetails> = ({ userPermission, routeDetails }) => {

    const [listView, setListView] = useState({});
    const [tableHeader, setTableHeader] = useState([]);
    const [tableData, setTableData] = useState([]);
    const [queryFormData, setQueryFormData] = useState('')
    const { pathname } = useLocation();
    const { permissionCheckDelete, permissionCheckAdd, permissionCheckChange } = PermissionChecker(pathname, userPermission)

    const splitPath = pathname.split('/');
    const appName = splitPath[2];
    const modalName = splitPath[3];
    const apiLink = routeDetails && routeDetails.length && routeDetails.filter((item) => item.app_name === appName)[0].app_models
        .filter(i => i.model_name === modalName)[0].api_link.split('/v1')[1];
    console.log("api link", apiLink)
    useEffect(() => {
        HttpBrowsing.get(`${apiLink}list-views/`)
            .then((res) => {
                setListView(res.data)
            })
            .catch((err) => console.log("err", err))
    }, [pathname])

    useEffect(() => {
        if (Object.keys(listView).length) {
            const header = listView.list_fields.map(i => i.verbose_name);
            const queryForData = listView.list_fields.map(i => i.name).join(',');
            setQueryFormData(queryForData)
            console.log("queryForm", queryForData)
            setTableHeader(header)
        }

    }, [listView])

    useEffect(() => {
        if (tableHeader.length) {

            HttpBrowsing.get(`${apiLink}?fields=${queryFormData}`)
                .then((res) => {
                    console.log("This is list", listView.list_fields)
                    console.log("This is table data", tableData)
                    const data = res.data.results.map((item) => {
                        return (
                            Object.values(item)
                        )
                    })

                    console.log("This is optimal data", data)

                    setTableData(data)
                })
                .catch((err) => console.log("err", err))
        }
    }, [tableHeader])

    console.log("This is header", listView)
    console.log("This are headers", tableHeader)
    console.log("This is data body", tableData)


    return (
        <div className="admin-table px-6 py-6 flex flex-col gap-5">
            <div className="flex justify-end" >
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
                            {item.map((d, index) => <td key={index}>{d}</td>)}
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