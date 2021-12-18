import React, { useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
 
 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import './Profile.css'
import { Link } from "react-router-dom";
import UserSidebar from "../Sidebar/Sidebar";
 
import { Context } from './../../../context/Context';
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
 
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));
const Profile = () => {
  const classes = useStyles();
  const {user}=React.useContext(Context);
  
  let form = useRef(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form_data = new FormData(form.current);
    let payload = {};
    form_data.forEach(function (value, key) {
      payload[key] = value;
    });
    // console.log("payload", payload);
    // Place your API call here to submit your payload.
  };
  return (
    <>
      <div className={classes.root}>
        <UserSidebar />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <div>  
		  <Link to="/updateProfile"> <h2 className=" p-3 user-profile">EDIT PROFILE      <FontAwesomeIcon icon={faEdit} className="ml-2"/></h2></Link>
            <div class="flex space-x-2 w-full overflow-hidden mt-5">
			
           <div class="card border border-gray-700 bg-gray-700 text-gray-50 mx-auto  transition-shadow shadow-xl hover:shadow-xl w-full">
                <div class="">
                  <img
                    src="https://image.freepik.com/free-vector/abstract-binary-code-techno-background_1048-12836.jpg"
                    class="h-48 w-full"
                  />
                </div>

                <div class="flex items-center p-5">
                  <div class="relative flex flex-col items-center w-full">
                    <div class="h-24 w-24 md rounded-full relative avatar flex items-end justify-end text-purple-400  absolute -top-16 flex bg-purple-200 text-purple-100 row-start-1 row-end-3 text-purple-650 ring-1">
                      <img
                        class="h-24 w-24 md rounded-full relative"
                        src= {user?.photo}
                        alt=""
                      />
                      <div class="absolute"></div>
                    </div>
                    <div class="flex flex-col space-y-1 justify-center items-center -mt-12 w-full">
                       
					   
					  <span class="text-md whitespace-nowrap text-gray-50 font-semibold">
                        {user?.name}
                      </span>
                      
                      <p class="text-sm text-gray-200">
                         {user?.email}
                      </p>
                   
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Profile;