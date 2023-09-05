import React, { useState } from "react";
import SneatLogo from "../assets/sneat-logo.svg";
import homeIcon from "../assets/bx-home-smile.svg";
import DashboardIcon from "../assets/Vector@2x.png";
import EmailIcon from "../assets/email.svg";
import InvoiceIcon from "../assets/invoice.svg";
import chatIcon from "../assets/chat.svg";
import calendarIcon from "../assets/calendar.svg";
import userIcon from "../assets/user.svg/";
import rolesIcon from "../assets/roles.svg";
import pagesIcon from "../assets/page.svg";
import dialogIcon from "../assets/dialog.svg";
import typoIcon from "../assets/typo.svg";
import iconsIcon from "../assets/icon.svg";
import cardsIcon from "../assets/card.svg";
import componentsIcon from "../assets/component.svg";
import formElemIcon from "../assets/form.svg";
import formLayoutIcon from "../assets/layout.svg";
import formValIcon from "../assets/validation.svg";
import formWizIcon from "../assets/wizard.svg";
import tableIcon from "../assets/table.svg";
import datagridIcon from "../assets/mui.svg";
import chartsIcon from "../assets/chart.svg";
import othersIcon from "../assets/others.svg";
import DropdownSlider from "./DropdownSlider";
import drawerIcon from "../assets/drawer.svg";
import { Link, useLocation } from "react-router-dom";

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
  setShow: () => void;
  routeDetails: adminRouteProps;
}
const Sidebar: React.FC<LayoutProps> = ({ setShow, routeDetails }) => {
  const { pathname } = useLocation();
  const handleSidebar = () => {
    setShow(false);
  };

  console.log("routeDetails", routeDetails)
  const data = routeDetails;
  const mainSidebarDetails = data && data.map((item) => {
    return ({
      title: '',
      contents: [
        {
          icon: homeIcon,
          title: item.verbose_name,
          link: `/admin/${item.app_name}`,
          options: item.app_models.map(d => ({ title: d.verbose_name, link: `/admin/${item.app_name}/${d.model_name}` }))
        },
      ]


    })
  })

  console.log("This is main sidebar details", mainSidebarDetails)

  const SidebarMenus = [
    {
      title: "",
      contents: [
        {
          icon: homeIcon,
          title: "Authentication and Authorization",
          link: "/",
          options: [
            {
              title: "eCommerce",
              link: "/eCommerce/dashboard",
            },
            {
              title: "CRM",
              link: "/CRM/dashboard",
            },
            {
              title: "Analytics",
              link: "/Analytics/dashboard",
            },
          ],
        },
        // {
        //   icon: homeIcon,
        //   title: "Dashboards",
        //   link: "/",
        //   options: [
        //     {
        //       title: "eCommerce",
        //       link: "/eCommerce/dashboard",
        //     },
        //     {
        //       title: "CRM",
        //       link: "/CRM/dashboard",
        //     },
        //     {
        //       title: "Analytics",
        //       link: "/Analytics/dashboard",
        //     },
        //   ],
        // },
      ],
    },
    {
      title: "",
      contents: [
        {
          icon: homeIcon,
          title: "Add Orders",
          link: "/add-order",
          options: [
            {
              title: "eCommerce",
              link: "/eCommerce/dashboard",
            },
            {
              title: "CRM",
              link: "/CRM/dashboard",
            },
            {
              title: "Analytics",
              link: "/Analytics/dashboard",
            },
          ],
        },
      ],
    },
    {
      title: "",
      contents: [
        {
          icon: homeIcon,
          title: "History",
          link: '/history'
          // options: [
          //   {
          //     title: "eCommerce",
          //     link: "/eCommerce/dashboard",
          //   },
          //   {
          //     title: "CRM",
          //     link: "/CRM/dashboard",
          //   },
          //   {
          //     title: "Analytics",
          //     link: "/Analytics/dashboard",
          //   },
          // ],
        },
      ],
    },
    {
      title: "",
      contents: [
        {
          icon: homeIcon,
          title: "Users",
          link: '/users',
          // options: [
          //   {
          //     title: "eCommerce",
          //     link: "/eCommerce/dashboard",
          //   },
          //   {
          //     title: "CRM",
          //     link: "/CRM/dashboard",
          //   },
          //   {
          //     title: "Analytics",
          //     link: "/Analytics/dashboard",
          //   },
          // ],
        },
      ],
    },

    // {
    //   title: "Apps & Pages",
    //   contents: [
    //     {
    //       icon: EmailIcon,
    //       title: "Email",
    //       link: "/email",
    //     },
    //     {
    //       icon: chatIcon,
    //       title: "Chat",
    //       link: "/Chat",
    //     },
    //     {
    //       icon: calendarIcon,
    //       title: "Calendar",
    //       link: "/email",
    //     },

    //     {
    //       icon: InvoiceIcon,
    //       title: "Invoice",
    //       options: [
    //         {
    //           title: "option1",
    //           link: "/invoice/option1",
    //         },
    //         {
    //           title: "option2",
    //           link: "/invoice/option2",
    //         },
    //         {
    //           title: "option3",
    //           link: "/invoice/option3",
    //         },
    //       ],
    //     },

    //     {
    //       icon: userIcon,
    //       title: "User",
    //       options: [
    //         {
    //           title: "option1",
    //           link: "/user/option1",
    //         },
    //         {
    //           title: "option2",
    //           link: "/user/option2",
    //         },
    //         {
    //           title: "option3",
    //           link: "/user/option3",
    //         },
    //       ],
    //     },
    //     {
    //       icon: rolesIcon,
    //       title: "Rules & Permissions",
    //       options: [
    //         {
    //           title: "option1",
    //           link: "/rules/option1",
    //         },
    //         {
    //           title: "option2",
    //           link: "/rules/option2",
    //         },
    //         {
    //           title: "option3",
    //           link: "/rules/option3",
    //         },
    //       ],
    //     },
    //     {
    //       icon: pagesIcon,
    //       title: "Pages",
    //       options: [
    //         {
    //           title: "Help Center",
    //           link: "/help-center",
    //         },
    //         {
    //           title: "option2",
    //           link: "/pages/option2",
    //         },
    //         {
    //           title: "option3",
    //           link: "/pages/option3",
    //         },
    //       ],
    //     },
    //     {
    //       icon: dialogIcon,
    //       title: "Dialog Examples",
    //       link: "/dialog_examples",
    //     },
    //   ],
    // },

    // {
    //   title: "USER INTERFACES",
    //   contents: [
    //     {
    //       icon: typoIcon,
    //       title: "Typography",
    //       link: "/typography",
    //     },
    //     {
    //       icon: iconsIcon,
    //       title: "Icons",
    //       link: "/icons",
    //     },
    //     {
    //       icon: cardsIcon,
    //       title: "Cards",
    //       options: [
    //         {
    //           title: "option1",
    //           link: "icons/option1",
    //         },
    //         {
    //           title: "option2",
    //           link: "icons/option2",
    //         },
    //         {
    //           title: "option3",
    //           link: "icons/option3",
    //         },
    //       ],
    //     },
    //     {
    //       icon: componentsIcon,
    //       title: "Components",
    //       options: [
    //         {
    //           title: "option1",
    //           link: "components/option1",
    //         },
    //         {
    //           title: "option2",
    //           link: "components/option2",
    //         },
    //         {
    //           title: "option3",
    //           link: "components/option3",
    //         },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   title: "FORMS & TABLES",
    //   contents: [
    //     {
    //       icon: formElemIcon,
    //       title: "Forms Elements",
    //       options: [],
    //     },
    //     {
    //       icon: formLayoutIcon,
    //       title: "Form Layout",
    //       link: "/form_layout",
    //     },
    //     {
    //       icon: formValIcon,
    //       title: "Form Validation",
    //       link: "/form_validation",
    //     },
    //     {
    //       icon: formWizIcon,
    //       title: "Form Wizard",
    //       link: "/form_wizard",
    //     },
    //     {
    //       icon: tableIcon,
    //       title: "Table",
    //       link: "/table",
    //     },
    //     {
    //       icon: datagridIcon,
    //       title: "Mui DataGrid",
    //       link: "/mui-datagrid",
    //     },
    //   ],
    // },
    // {
    //   title: "CHARTS & MISC",
    //   contents: [
    //     {
    //       icon: chartsIcon,
    //       title: "charts",
    //       options: [
    //         {
    //           title: "option1",
    //           link: "charts/option1",
    //         },
    //       ],
    //     },
    //     {
    //       icon: othersIcon,
    //       title: "Others",
    //       options: [
    //         {
    //           title: "option1",
    //           link: "others/option1",
    //         },
    //       ],
    //     },
    //   ],
    // },
  ];

  console.log("This is pathname", pathname)
  return (
    <>
      <div className="h-screen absolute inset-0 md:relative ">
        <div className="min-w-[290px] w-full flex flex-col pt-5 bg-[white] ">
          <div className="flex items-center justify-between ">
            <div className="flex py-5 px-8 ">
              <img src={SneatLogo} alt="" />
              <span className="font-[700] text-[25px] ">sneat</span>
            </div>
            <button
              onClick={handleSidebar}
              className="mr-4 md:mr-[-12px] p-1 bg-gray-300 bg-opacity-[0.4] rounded-full "
            >
              <img
                src={drawerIcon}
                alt=""
                className=" w-5 bg-[#696CFF] rounded-full p-[2px] "
              />{" "}
            </button>
          </div>
          <div className="h-[calc(100vh-100px)] overflow-y-scroll no-scrollbar ">
            {mainSidebarDetails.map((menu, id) => (
              <div key={id} className="flex flex-col pb-2 ">
                {menu.title ? (
                  <div className={`flex items-center gap-x-4`}>
                    <div className="w-4 h-[1px] bg-[#32475C] bg-opacity-[0.12] "></div>

                    <h5 className="py-4 font-[400] text-[#32475C] text-opacity-[0.38] text-[12px] uppercase ">
                      {menu.title}
                    </h5>

                  </div>
                ) : null}
                <div className="flex flex-col px-4 ">
                  {menu.contents?.map((content, idc) => (
                    <DropdownSlider
                      key={idc}
                      icon={content.icon}
                      title={content.title}
                      link={content.link}
                      options={content.options}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
