
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
    return (
        <div className="bg-[red]" >AdminDashboard</div>
    )
}

export default AdminDashboard