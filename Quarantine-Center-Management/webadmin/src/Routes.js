/*
    Created by - Isuru Pathum Herath
    On - 11/10/2021
    Name - Routes
    Last Update - 11/10/2021
    Last Update By - Isuru Pathum Herath
 */

import React from 'react';
import { BrowserRouter, Switch, Route, Router } from 'react-router-dom';
import App from './App';
import { getUser, logout } from './pages/StaffMenagement/staffHelper';
import { getAdminUser } from './adminHelper';

//common navigation components
import Header from './components/Common/Navigation/Header';
import Sidebar from './components/Common/Navigation/Sidebar';

//component
import Login from './components/UserManagement/Login';
import Dashboard from './components/UserManagement/Dashboard';
import ProfileDetails from './components/UserManagement/ProfileDetails';
import EditProfile from './components/UserManagement/EditProfile';
import Register from './components/UserManagement/Register';

//Page Route
import addStaffMember from './pages/StaffMenagement/addStaffMember'                     //--Added by Isuru Pathum Herath--
import allStaffMembers from './pages/StaffMenagement/allStaffMembers'                   //--Added by Isuru Pathum Herath--
import updateStaffMember from './pages/StaffMenagement/updateStaffMember'               //--Added by Isuru Pathum Herath--
import addSalary from './pages/StaffMenagement/addSalaryforStaff'                       //--Added by Isuru Pathum Herath--
import addQuaratineStaff from './pages/StaffMenagement/addQuaratineStaff'               //--Added by Isuru Pathum Herath--
import singleProfile from './pages/StaffMenagement/singleStaffProfile'                  //--Added by Isuru Pathum Herath--
import filterStaffMember from './pages/StaffMenagement/filterStaffMember'               //--Added by Isuru Pathum Herath-- | TEMP
import addTask from './pages/StaffMenagement/addTaskStaffMember'                        //--Added by Isuru Pathum Herath--
import showEmployeeTask from './pages/StaffMenagement/showEmployeeTasks'                //--Added by Isuru Pathum Herath--
import staffAnalytic from './pages/StaffMenagement/StaffAnalytics'                      //--Added by Isuru Pathum Herath--
import staffLogin from './pages/StaffMenagement/staffLogin'                             //--Added by Isuru Pathum Herath--
import staffLandingPage from './pages/StaffMenagement/StaffLandingPage'                 //--Added by Isuru Pathum Herath--
import staffFirstLogin from './pages/StaffMenagement/staffFirstLogin'                   //--Added by Isuru Pathum Herath--
import PrivateRoute from './PrivateRoute';                                              //--Added by Isuru Pathum Herath--
import PrivateRouteAdmin from './PrivateRouteAdmin';                                    //--Added by Isuru Pathum Herath--
import staffMemberProfileEdit from './pages/StaffMenagement/staffMemberProfileEdit';    //--Added by Isuru Pathum Herath--
import qStaff from './pages/StaffMenagement/showQEmployee';                             //--Added by Isuru Pathum Herath--
import calender from './pages/StaffMenagement/Attendance';                              //--Added by Isuru Pathum Herath--
import calenderStaff from './pages/StaffMenagement/AttendanceStaff';                    //--Added by Isuru Pathum Herath--
import imageUpload from './pages/StaffMenagement/imageUpload';


import viewTickets from './components/TicketManagement/adminAllTickets';
import replyTickets from './components/TicketManagement/adminEditTickets';

import PayerDetails from './pages/FinanceManagement/PayerDetails';
import FinanceDashboard from './pages/FinanceManagement/FinanceDashboard';
import Inquary from './pages/FinanceManagement/Inquary';
import Payer from './pages/FinanceManagement/Payer';
import Payment from './pages/FinanceManagement/Payment';


/*--Added by Chamodh Iduranga--*/
import OrderAdmin from "../../webadmin/src/pages/FoodManagement/OrderAdmin";
import FoodAdmin from "../../webadmin/src/pages/FoodManagement/FoodAdmin";
import FoodReport from "../../webadmin/src/pages/FoodManagement/FoodReport";


const Routes = () => {
    return (
        <div class="page-wrapper">
            <div class="content container-fluid">

                <BrowserRouter>
                    <Switch>
                        <Route path="/staffLogin" exact component={staffLogin} />                                   {/*--Added by Isuru Pathum Herath--*/}
                        <PrivateRoute path="/staffLandingPage/:id" exact component={staffLandingPage} />            {/*--Added by Isuru Pathum Herath--*/}
                        <PrivateRoute path="/staffFirstLogin/:id" exact component={staffFirstLogin} />              {/*--Added by Isuru Pathum Herath--*/}
                        <PrivateRoute path="/editStaffProfile/:id" exact component={staffMemberProfileEdit} />      {/*--Added by Isuru Pathum Herath--*/}
                        <PrivateRoute path="/calenderStaff/:id" exact component={calenderStaff} />                  {/*--Added by Isuru Pathum Herath--*/}


                    </Switch>

                    {getAdminUser() && (
                        <Sidebar />
                    )}
                    {getAdminUser() && (
                        <Header />
                    )}

                    <Switch>

                        <Route path="/" exact component={App} />

                        <Route path="/imageUpload" exact component={imageUpload} />
                        <PrivateRouteAdmin path="/addStaffMember" exact component={addStaffMember} />                   {/*--Added by Isuru Pathum Herath--*/}
                        <PrivateRouteAdmin path="/allStaffMembers" exact component={allStaffMembers} />                 {/*--Added by Isuru Pathum Herath--*/}
                        <PrivateRouteAdmin path="/updateStaffMember/:id" exact component={updateStaffMember} />         {/*--Added by Isuru Pathum Herath--*/}
                        <PrivateRouteAdmin path="/singleProfile/:id" exact component={singleProfile} />                 {/*--Added by Isuru Pathum Herath--*/}
                        <PrivateRouteAdmin path="/filterStaffMember" exact component={filterStaffMember} />             {/*--Added by Isuru Pathum Herath--*/}
                        <PrivateRouteAdmin path="/addSalary" exact component={addSalary} />                             {/*--Added by Isuru Pathum Herath--*/}
                        <PrivateRouteAdmin path="/addQuaratineStaff" exact component={addQuaratineStaff} />             {/*--Added by Isuru Pathum Herath--*/}
                        <PrivateRouteAdmin path="/addTask" exact component={addTask} />                                 {/*--Added by Isuru Pathum Herath--*/}
                        <PrivateRouteAdmin path="/showEmployeeTask/:id" exact component={showEmployeeTask} />           {/*--Added by Isuru Pathum Herath--*/}
                        <PrivateRouteAdmin path="/showQStaff" exact component={qStaff} />                               {/*--Added by Isuru Pathum Herath--*/}
                        <PrivateRouteAdmin path="/attendance/:id" exact component={calender} />                           {/*--Added by Isuru Pathum Herath--*/}
                        {/* <PrivateRouteAdmin path="/staffAnalytic" exact component={staffAnalytic} />                           --Added by Isuru Pathum Herath-- */}


                        <PrivateRouteAdmin path="/viewticket" exact component={viewTickets} />
                        <PrivateRouteAdmin path="/edit/:id" component={replyTickets} />

                        <PrivateRouteAdmin path="/dashboard" exact component={Dashboard} />
                        <PrivateRouteAdmin path="/update/:id" component={EditProfile} />
                        <PrivateRouteAdmin path="/profile/:id" component={ProfileDetails} />
                        <PrivateRouteAdmin path="/register" exact component={Register} />

                        {/*--Added by Chamodh Iduranga--*/}
                        {/* <PrivateRouteAdmin path="/finance/payer" exact component={PayerDetails} /> */}
                        <PrivateRouteAdmin path="/finance/fDashboard" exact component={FinanceDashboard} />
                        <PrivateRouteAdmin path="/finance/inquary" exact component={Inquary} />
                        <PrivateRouteAdmin path="/finance/payer" exact component={Payer} />
                        <PrivateRouteAdmin path="/finance/payment" exact component={Payment} /> 

                            {/*--Added by Chamodh Iduranga--*/}
                        <PrivateRouteAdmin path="/orderAdmin" exact component={OrderAdmin} />
                        <PrivateRouteAdmin path="/foodadmin" exact component={FoodAdmin} />
                        <PrivateRouteAdmin path="/foodreports" exact component={FoodReport} />

                    </Switch>
                </BrowserRouter>



            </div>
        </div >


    );
};

export default Routes;