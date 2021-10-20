import React from 'react';
import UserDashboard from '../../UserDashboard/UserDashboard/UserDashboard';

const Admin = () => {
    const [info, setInfo] = React.useState({});
    
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }
    console.log(info)
     

    const handleSubmit = () => {
        const formData = new FormData()
       
        formData.append('email', info.email);
     

        fetch('http://localhost:7000/addAdmin', {
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
        <div>
         <UserDashboard/>
        <div className="mt-5 p-5 w-25 mx-auto">
            <h5 className="text-brand writeInput">Make Admin</h5>
            <form onSubmit={handleSubmit}>
            <div className="form-group">
                    <label htmlFor="exampleInputPassword1" className="writeInput mt-3">Email</label>
                    <input onBlur={handleBlur} type="text" className="form-control writeInput mt-3" name="email" placeholder="Enter Admin Email" />
                </div>

                <button type="submit" className="btn btn-primary mt-3">Submit</button>
            </form>
        </div>
    </div>
    );
};

export default Admin;