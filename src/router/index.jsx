import { Route, Routes } from "react-router-dom";
import { Register } from "../pages/Register";
import { Login } from "../pages/Login";
import { Home } from "../pages/Home";
import { Students } from "../pages/Students";
import { Groups } from "../pages/Group";
import { Payment } from "../pages/Payment";
import { Attendance } from "../pages/Attendance";
import { Apeal } from "../pages/Appeal";
import { NotFound } from "../pages/NotFound";
import {GuruhInfo} from "../pages/GuruhInfo"
import { InfoDavomat } from "../pages/InfoDavomat";
import { AllStudentsList } from "../pages/AllStudentsList";
import { AllTeachersList } from "../pages/AllTeachersList";
import { AllDeletedList } from "../pages/DeletedStudentsList";
import Dashboard from "../pages/dashboard";

export const RouteWrapper = () => {

  const gettingToken = localStorage.getItem("token")

  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
       <Route path="/home" element={<Home />} /> 
      <Route path="/students" element={<Students/>}/> 
       <Route path="/all_students" element={<AllStudentsList/>}/> 
       <Route path="/all_deleted_students" element={<AllDeletedList/>}/> 
       <Route path="/all_teachers" element={<AllTeachersList/>}/> 
      <Route path="/group" element={<Groups />} /> 
      <Route path="/group_info/:id" element={<GuruhInfo/>}/> 
       <Route path="/payment" element={<Payment />} />
       <Route path="/davomat" element={<Attendance />} /> 
       <Route path="/davomat_info/:id" element={<InfoDavomat/>}/> 
       <Route path="/apeal" element={<Apeal />} /> 
       <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
