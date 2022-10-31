import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as MdIcons from 'react-icons/md';
import * as GiIcons from 'react-icons/gi';
import * as Io5Icons from 'react-icons/io5';
import * as CiIcons from 'react-icons/ci';

export const SidebarData = [
  {
    title: 'Xác nhận sức khỏe',
    path: '/doctor/health-confirmation',
    icon: <MdIcons.MdHealthAndSafety />
  },
  {
    title: 'Xác nhận lấy máu',
    path: '/doctor/blood-donation-confirmation',
    icon: <GiIcons.GiHealthPotion />
   
  },
  {
    title: 'Quản lý máu',
    path: '/doctor/view-blood-store',
    icon: <MdIcons.MdInventory />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Thêm máu vào kho',
        path: '/doctor/add-blood',
        icon: <Io5Icons.IoBagAddSharp />,
        cName: 'sub-nav'
      },
      {
        title: 'Xem thông tin kho',
        path: '/doctor/view-blood-store',
        icon: <AiIcons.AiOutlineFundView />,
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: 'Quản lý sự kiện',
    path: '/doctor/view-event',
    icon: <MdIcons.MdFestival />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Tạo sự kiện',
        path: '/doctor/add-event',
        icon: <IoIcons.IoIosCreate />,
        cName: 'sub-nav'
      },
      {
        title: 'Xem sự kiện',
        path: '/doctor/view-event',
        icon: <CiIcons.CiViewList />,
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: 'Quản lý địa điểm',
    path: '/doctor/view-event-default',
    icon: <MdIcons.MdLocationCity />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Tạo điểm hiến máu',
        path: '/doctor/add-event-default',
        icon: <MdIcons.MdAddLocation />
      },
      {
        title: 'Xem điểm hiến máu',
        path: '/doctor/view-event-default',
        icon: <CiIcons.CiViewList />
      }
    ]
  },
  {
    title: 'Yêu cầu nhận máu',
    path: '/doctor/request-blood',
    icon: <IoIcons.IoIosGitPullRequest />
  },
  {
    title: 'Thông báo kết quả',
    path: '/doctor/blood-result',
    icon: <AiIcons.AiOutlineNotification />
  }
];