import axios from "axios";
import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "@mui/material/Modal";
import { Header } from "../../components/Header";
import   CreateNewAccountForm from "../ContactsTable/CreateNewAccountForm.jsx";
import "./task.css";
import "./TaskTable.jsx";


const Form4=()=>{
    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
      };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const[taskdata,setTaskData]=useState({


        subject:"",
        due_date:"",
        status: "",
        priority: "", 
        description: "",
        contact: null,
        account: "",
        createdBy: "",

  })
  const [accountOptions, setAccountOptions] = useState([]);
  const [filteredOptions, setFilteredOptions] = useState(accountOptions);

  const [showCreateNewAccountForm, setShowCreateNewAccountForm] =
    useState(false);
    useEffect(() => {
        fetchAccountOptions();
      }, []);

    const fetchAccountOptions = async () => {
        try {
          const response = await axios.get(
            "https://backendcrmnurenai.azurewebsites.net/accounts/"
          );
          console.log("Account options response:", response.data);
    
          setAccountOptions(response.data);
          setFilteredOptions(response.data);
        } catch (error) {
          console.error("Error fetching account options:", error);
        }
      };
      const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'contacts') {
          const contactsArray = value.split(',').map((item) => item.trim());
          setTaskData({
            ...taskdata,
            [name]: contactsArray,
          });
        } else {
          setTaskData({
            ...taskdata,
            [name]: value,
          });
        }
      };
      const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const response = await axios.post(
            "https://backendcrmnurenai.azurewebsites.net/tasks/",
            taskdata
          );
          console.log("Form submitted successfully:", response.data);
          setTaskData({
            subject:"",
        due_date:"",
        status: "",
        priority: "", 
        description: "",
        contact: null,
        account: "",
        createdBy: "",
          });
        } catch (error) {
          console.error("Error submitting form:", error);
        }
      };
      return(
        <div>
             {showCreateNewAccountForm && <CreateNewAccountForm />}
             <Header name="Task Information" />
             <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="subject">subject</label>
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  name="subject"
                  value={taskdata.subject}
                  onChange={handleChange}
                  placeholder="Enter subject"
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="due_date">Due Date</label>
                <input
                  type="date"
                  className="form-control"
                  id="due_date"
                  name="due_date"
                  value={taskdata.due_date}
                  onChange={handleChange}
                  placeholder="Enter due date"
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="status">Status</label>
                <input
                  type="text"
                  className="form-control"
                  id="status"
                  name="status"
                  value={taskdata.status}
                  onChange={handleChange}
                  placeholder="Enter status"
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="priority">Priority</label>
                <input
                  type="text"
                  className="form-control"
                  id="priority"
                  name="priority"
                  value={taskdata.priority}
                  onChange={handleChange}
                  placeholder="Enter priority"
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  name="description"
                  value={taskdata.description}
                  onChange={handleChange}
                  placeholder="Enter description"
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="contact">Contact</label>
                <input
                  type="text"
                  className="form-control"
                  id="contact"
                  name="contact"
                  value={taskdata.contact}
                  onChange={handleChange}
                  placeholder="Enter contact"
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="createdBy">Created BY</label>
                <input
                  type="text"
                  className="form-control"
                  id="createdBy"
                  name="createdBy"
                  value={taskdata.createdBy}
                  onChange={handleChange}
                  placeholder="Enter created By"
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="name">Account</label>
                <select
                  id="name"
                  name="name"
                  value={taskdata.name}
                  onChange={(event) => {
                    setTaskData({ ...oppourtunityData, name: event.target.value });
                    if (event.target.value === "create-new-account") {
                      handleOpen(); 
                    }
                  }}
                
                  className="form-control"
                >
                  <option value="">Select Account</option>
                  {filteredOptions.map((option) => (
                    <option key={option.id} value={option.Name}>
                      {option.Name}
                    </option>
                  ))}
                   <option value="create-new-account">Create New Account</option>
    
                </select>
    
    
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <CreateNewAccountForm />
                  </Box>
                </Modal>
              </div>


              </div>
              <div className="submit">
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </div>
            </form>



        </div>


      )


}

export default Form4;