import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  NotificationOutlined,
  BookOutlined,
  ToolOutlined,
  BookFilled,
  TeamOutlined,
  SmileOutlined,
  InfoCircleFilled,
  SettingOutlined,
  FormOutlined,
  CheckCircleOutlined,
  UserOutlined,


} from '@ant-design/icons';
import { Button, Menu } from 'antd';
import { useState } from 'react';
import logo from '../../assets/sachso_logo.png'
import { Navigate, useNavigate } from 'react-router-dom';

function SideBar() {

  const navigate = useNavigate();
  const handleMenuClick = (e) => {
    navigate(e.key);
  }

  const items = [
    { key: '1', icon: <HomeOutlined />, label: 'Trang chủ' },
    { key: '2', icon: <NotificationOutlined />, label: 'Thông báo' },
    { key: '3', icon: <BookOutlined />, label: 'Sách điện tử (offline)' },
    { key: '4', icon: <ToolOutlined />, label: 'Công cụ' },
    { key: '5', icon: <BookFilled />, label: 'Sách điện tử' },
    { key: '6', icon: <TeamOutlined />, label: 'Lớp học' },
    { key: '7', icon: <SmileOutlined />, label: 'Education Game' },
    { key: '8', icon: <InfoCircleFilled />, label: 'Hướng dẫn sử dụng' },
    {
      key: 'sub1',
      label: 'ADMINISTRATORS',
      children: [
        { key: '9', icon: <BookOutlined />,label: 'Thư Viện' }, 
        { key: '10', icon: <FormOutlined />, label: 'Quản lí câu hỏi' },
        { key: '11',icon: <TeamOutlined />, label: 'Quản lý lớp học' },
        { key: '12', icon: <CheckCircleOutlined />, label: 'Ngân Hàng đã kiểm tra' },
        { key: '/dashboard/manage-user',icon: <UserOutlined />, label: 'Quản lý người dùng' },
        { key: '14',icon: <SettingOutlined />, label: 'Type & Option Type' },

      ],
    },
  ];

  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div style={{ width: 256 }}>
      <div className='flex md:flex-row items-center py-7'>
        <img src={logo} alt='Sách số logo' className='h-8 ml-5' />
        <Button className='ml-auto mt-auto w-5' type="white" onClick={toggleCollapsed} >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
      </div>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="light"
        inlineCollapsed={collapsed}
        items={items}
        onClick={handleMenuClick}
      />
    </div>
  );
};


export default SideBar;
