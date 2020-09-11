import React from 'react'; 
import * as FaIcons from "react-icons/fa";
import * as AiIcons from 'react-icons/ai';
// import * as OiIcons from 'react-icons/oi';

export const SidebarData = [
    {
        path: '/home',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Home',
        path: '/home',
        cName: 'nav-text'
    },
    {
        title: 'Work',
        path: '/work',
        cName: 'nav-text'
    },
    {
        title: 'About Us',
        path: '/about-us',
        cName: 'nav-text'
    },
    {
        title: 'Say Hi',
        path: '/say-hi',
        cName: 'nav-text'
    }

]