import { useState } from "react";
import Table from "./Table";
import "./form.css"
const Form =() =>{
    const [userList, setUserList] = useState([])
    const [formData, setFormData] = useState({
        fname:"",
        lname:"",
        email:"",
        phone:"",
    })

    const handleInput =(e)=>{
        const value = e.target.value;
        const name = e.target.name;

        setFormData({
            ...formData,[name]:value
        })
    }
    
const handleSubmit = (e) => {
        e.preventDefault();
        setUserList([
        ...userList,
        formData
        ])
        setFormData(
            {
                fname:"",
                lname:"",
                email:"",
                phone:"",
            }
        )
}  
    return(
        <>
        <form className="form" onSubmit={handleSubmit}>
            <div className="form-input">
                <label htmlFor="">First Name</label>
                <input type="text" name="fname" placeholder="Enter Your First Name" value={formData.fname} onChange={handleInput} />
            </div>
            <div className="form-input">
                <label htmlFor="">Last Name</label>
                <input type="text" name="lname" placeholder="Enter Your Last Name" value={formData.lname} onChange={handleInput}/>
            </div>
            <div className="form-input">
                <label htmlFor="">Email</label>
                <input type="text" name="email" placeholder="Enter Your Email" value={formData.email} onChange={handleInput} />
            </div>
            <div className="form-input">
                <label htmlFor="">Phone</label>
                <input type="text" name="phone" placeholder="Enter Your Phone Number" value={formData.phone} onChange={handleInput}/>
            </div>
            <button className="submitbtn" type="submit">Submit</button>
        </form>
        <Table userList={userList}/>
        </>
    );
};
export default Form;