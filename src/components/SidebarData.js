import React from 'react';
import * as FaIcons from "react-icons/fa";


export const SidebarData = [
    {
        title: "Home",
        path: "/",
        icon: <FaIcons.FaHome />,
        cName: "nav-text"
    },
    {
        title: "Reports",
        path: "/reports",
        icon: <FaIcons.FaChartLine />,
        cName: "nav-text"
    },
    {
        title: "Profile",
        path: "/profile",
        icon: <FaIcons.FaUserAlt />,
        cName: "nav-text"
    }
]
