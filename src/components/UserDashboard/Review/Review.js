import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Footer from "../../Shared/Footer/Footer";
import UserDashboard from "../UserDashboard/UserDashboard";
 import "./Review.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Review = () => {
  const [info, setInfo] = React.useState({});
  const [file, setFile] = React.useState(null);
  const handleBlur = e => {
      const newInfo = { ...info };
      newInfo[e.target.name] = e.target.value;
      setInfo(newInfo);
  }

  const handleFileChange = (e) => {
      const newFile = e.target.files[0];
      setFile(newFile);
  }

  const handleSubmit = () => {
      const formData = new FormData()
      console.log(info);
      formData.append('file', file);
      formData.append('name', info.name);
      formData.append('designation', info.designation);
      formData.append('comment', info.comment);
      
      //Image upload in Backend side system.

      fetch('https://go-green-recycling.herokuapp.com/addReview', {
          method: 'POST',
          body: formData
      })
          .then(response => response.json())
          .then(data => {
              console.log(data)
          })
          .catch(error => {
              console.error(error)
          })
  }

  return (
    <>
      <UserDashboard />
      <div className=" p-4 pr-5 mt-5 mb-5 w-75 mx-auto">
      {file && (
     <img class="mx-auto" style={{width:"20rem"}} src={URL.createObjectURL(file)} alt="" />
   )}
        <h5 className="text-brand mt-4 text-center writeReviewInput">Write your Comment..</h5>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1" className="writeReviewInput">
              Your Name
            </label>
            <input
            onBlur={handleBlur}
              type="text"
              className="form-control writeReviewInput mt-2 mb-3"
              name="name"
              placeholder="Enter your Name"
               
            />
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputPassword1" className="writeReviewInput">
            Designation
            </label>
            <input
            onBlur={handleBlur}
              type="text"
              className="form-control writeReviewInput mt-2 mb-3"
              name="designation"
              placeholder="Enter your designation"
              
            />
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputPassword1" className="writeReviewInput">
              Write your Review
            </label>
            <textarea
           onBlur={handleBlur}
              type="text"
              className="form-control writeReviewInput mt-2 mb-3"
              cols="30"
              rows="5"
              name="comment"
              placeholder="Write your comment..."
              
            />
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputPassword1" className="writeReviewInput">
            <FontAwesomeIcon icon={faPlusCircle} style={{fontSize: "25px", color: "teal", cursor: "pointer"}}/>
            </label>
             
            <input
               onChange={handleFileChange}
              type="file"
              className="form-control mt-2"
              id="exampleInputPassword1"
              placeholder="Picture"
            />
          </div>
          <button type="submit" className="submit mt-3">Submit</button>
           
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Review;
