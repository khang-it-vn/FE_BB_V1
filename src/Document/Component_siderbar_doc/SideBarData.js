import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";


export const SideBarData = [
    {
        title: "home",
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: "report",
        path: '/report',
        icon: <IoIcons.IoIosPaper/>,
        cName: 'nav-text'
    },
    {
        title: "product",
        path: '/product',
        icon: <FaIcons.FaCartPlus/>,
        cName: 'nav-text'
    },
    {
        title: "team",
        path: '/team',
        icon: <IoIcons.IoMdPeople/>,
        cName: 'nav-text'
    },
    {
        title: "message",
        path: '/message',
        icon: <FaIcons.FaEnvelopeOpenText/>,
        cName: 'nav-text'
    },
    {
        title: "support",
        path: '/support',
        icon: <IoIcons.IoMdHelpCircle/>,
        cName: 'nav-text'
    }
]