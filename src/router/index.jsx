import { Route, Routes } from "react-router-dom";
import { Register } from "../pages/Register";
import { Login } from "../pages/Login";
import { Home } from "../pages/Home";
import { LeadPage } from "../pages/Lead";
import { NotFound } from "../pages/NotFound";
import { AccountsTable } from "../pages/AccountsSection";
import { ContactsTable } from "../pages/ContactsTable";
import { Opportunities } from "../pages/opportunities";
import Dashboard from "../pages/dashboard";
import KanbanBoard from "../components/Kanban/Kanban11";
import Lead from "../pages/Lead/AddLead/Lead";
// import Kanban1 from "../components/Kanban/Kanban1";
import Met from "../pages/Meetings/met";
import CallPage from "../pages/CallPage/callpage";
import Form2 from "../pages/ContactsTable/Form2";
import ContactInfo from "../pages/ContactsTable/ContactInfo";

import MassEmail from "../pages/MassEmail/Email";

import AccountsPage from "../pages/AccountsPage/AccountPage";
import CreateLead from "../pages/Lead/CreateLead";

import AccountForm from "../pages/AccountsSection/AccountForm";
import TaskTable from "../pages/TasksSection/TaskTable";



import ConvertLead from "../pages/Lead/ConvertLead";




import { useAuth } from "../authContext";
import { useState } from "react";
import Form3 from "../pages/opportunities/Form3";
import Form4 from "../pages/TasksSection/Form4";
import AddTask from "../pages/TasksSection/AddTask";


export const RouteWrapper = () => {
  const gettingToken = localStorage.getItem("token");
  const { authenticated } = useAuth();
  console.log(authenticated)
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
       <Route path="/home" element={<Home />} /> 
     
       <Route path="/accounts" element={<AccountsTable/>}/> 
     
       <Route path="/contacts" element={<ContactsTable/>}/> 
     
       <Route path="/lead" element={<LeadPage />} />
       <Route path="/opportunities" element={<Opportunities />} /> 
       
       
       <Route path="/dashboard" element={<Dashboard />} />
       <Route path="/kanban" element={<KanbanBoard />} />
      <Route path="/addlead" element={<Lead/>} />
      {/*<Route path="/addform" element={<Form1/>} />*/}
      
      <Route path="/contactinfo/:id" element={<ContactInfo/>}/>

      <Route path="/createlead/:id" element={<CreateLead/>}/>
      <Route path="/addaccount" element={<AccountForm/>} />
      <Route path="/addcontact" element={<Form2/>}/>

      {authenticated && (
        <>
          <Route path="/home" element={<Home />} /> 
          <Route path="/accounts" element={<AccountsTable/>}/> 
          <Route path="/contacts" element={<ContactsTable/>}/> 
          <Route path="/lead" element={<LeadPage />} />
          <Route path="/opportunities" element={<Opportunities />} /> 
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/kanban" element={<KanbanBoard />} />
          <Route path="/addlead" element={<Lead/>} />
          {/*<Route path="/addform" element={<Form1/>} />*/}
          <Route path="/contactinfo/:id" element={<ContactInfo/>}/>
          <Route path="/createlead/:id" element={<CreateLead/>}/>
          <Route path="/convert/:id" element={<ConvertLead/>}/>
          <Route path="/addaccount" element={<AccountForm/>} />
          <Route path="/addcontact" element={<Form2/>}/>
          <Route path="/meetings" element={<Met/>}  />
          <Route path="/opportunity" element={<Form3/>} />
          <Route path="/callpage" element={<CallPage/>}/>
          <Route path="/accounts/:id" element={<AccountsPage />} />
          <Route path="/email" element={<MassEmail/>} />
        </>
      )}


      <Route path="/meetings" element={<Met/>}  />
      <Route path="/callpage" element={<CallPage/>}/>
      <Route path="*" element={<NotFound />} />
      <Route path="/accounts/:id" element={<AccountsPage />} />
      <Route path="/tasks/:id" element={<AddTask/>}/>
      <Route path="/tasks" element={<TaskTable/>} />
      <Route path="/addtask" element={<Form4/>}/>
      <Route path="/email" element={<MassEmail/>} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};