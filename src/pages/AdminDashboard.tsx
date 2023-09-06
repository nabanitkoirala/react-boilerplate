import Articles from "../components/Articles";
import BorderButton from "../components/Buttons/BorderButton";
import edit from '../assets/edit.svg';
import remove from '../assets/delete.svg';
import { useLocation } from "react-router-dom";
import { PermissionChecker } from "../utils/PermissionChecker";

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
    console.log("This is user permissions", userPermission)
    console.log("This is route details", routeDetails)
    const { pathname } = useLocation();
    const { permissionCheckDelete, permissionCheckAdd, permissionCheckChange } = PermissionChecker(pathname, userPermission)

    return (
        <div className="admin-table px-6 py-6 flex flex-col gap-5">
            <div className="flex justify-end" >
                {
                    permissionCheckAdd.length ? <BorderButton title={'CREATE'} /> : ''
                }

            </div>

            <table>
                <tr>
                    <th>Company</th>
                    <th>Contact</th>
                    <th>Country</th>
                    <th>Action</th>
                </tr>
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
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
                <tr>
                    <td>Centro comercial Moctezuma</td>
                    <td>Francisco Chang</td>
                    <td>Mexico</td>
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
                <tr>
                    <td>Ernst Handel</td>
                    <td>Roland Mendel</td>
                    <td>Austria</td>
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
                <tr>
                    <td>Island Trading</td>
                    <td>Helen Bennett</td>
                    <td>UK</td>
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
                <tr>
                    <td>Laughing Bacchus Winecellars</td>
                    <td>Yoshi Tannamuri</td>
                    <td>Canada</td>
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
                <tr>
                    <td>Magazzini Alimentari Riuniti</td>
                    <td>Giovanni Rovelli</td>
                    <td>Italy</td>
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
            </table>
        </div>
    )
}

export default AdminDashboard