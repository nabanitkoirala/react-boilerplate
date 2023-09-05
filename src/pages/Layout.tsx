import { useState } from "react";
import Sidebar from "../components/Sidebar";
import drawerIcon from "../assets/drawer.svg";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface appModals {
    api_link: string;
    verbose_name: string;
    model_name: string;
}
interface adminRouteDetails {
    verbose_name: string;
    app_name: string;
    app_models: appModals[]
}
interface adminRouteProps {
    adminComponent: React.ComponentType<any>
    adminRoutes: adminRouteDetails[]
    adminLayout: React.ComponentType<any>

}
interface LayoutProps {
    children: React.ComponentType<any>;
    routeDetails: adminRouteProps;
}


const Layout: React.FC<LayoutProps> = ({ routeDetails, children }) => {
    const [showSidebar, setShowSidebar] = useState<boolean>(false);
    console.log("routeDetails", routeDetails)
    return (
        <div className="flex">
            {showSidebar ? <Sidebar setShow={setShowSidebar} routeDetails={routeDetails} /> : null}
            <div className=" h-screen overflow-y-hidden no-scrollbar  w-full">
                <div className="flex p-4 md:gap-4 w-full">
                    {showSidebar ? null : (
                        <div className="flex items-center">
                            <button
                                onClick={() => setShowSidebar(!showSidebar)}
                                className=" md:mr-[-12px] p-1 bg-gray-300 bg-opacity-[0.4] rounded-full "
                            >
                                <img
                                    src={drawerIcon}
                                    alt=""
                                    className=" w-5 bg-[#696CFF] rounded-full p-[2px] "
                                />{" "}
                            </button>
                        </div>
                    )}

                    <Header />
                </div>
                <div className="flex flex-col justify-between overflow-y-scroll h-[calc(100vh-90px)]">
                    <div className="">{children}</div>
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default Layout