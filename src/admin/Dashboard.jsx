import SideBar from '../admin/SideBar/SideBar.jsx'
import DashboardHeader from './DashboardHeader/DashboardHeader.jsx';
import ManageUser from '../admin/ManageUser/ManageUser.jsx'
import { Routes, Route } from 'react-router-dom';
function Dashboard() {
    return (
     
       <div className="flex h-screen overflow-x-hidden">
            <div className="w-64">
                <SideBar />
            </div>
            <div className="flex-1 flex flex-col min-w-0">
                <DashboardHeader />
                <div className="flex-1 p-4">
                    <Routes>
                        <Route path="" element={<div>Trang dashboard chính</div>} />
                        <Route path="manage-user" element={<ManageUser />} />
                    </Routes>
                  
                </div>
            </div>
        </div>
    );

}
export default Dashboard;