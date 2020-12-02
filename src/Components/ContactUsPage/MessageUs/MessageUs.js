import React from 'react';
import { useForm } from "react-hook-form";


// -------------------------Message us section of CONTACT US page-------------------------


const MessageUs = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div style={{ marginTop: "20px", padding: "50px" }}>
            <h1 style={{ textAlign: "center", marginLeft: "30px", margin: "40px" }}>Send Your Message Us</h1>
            <div class="d-flex justify-content-center" >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input name="name" style={{ height: "40px", width: "350px" }} placeholder="Your Name" ref={register({ required: true })} /> <br />
                    {errors.name && <span style={{ color: "red" }}>Your name is required</span>}  <br />


                    <input name="email" style={{ height: "40px", width: "350px" }} placeholder="Your Mail" ref={register({ required: true })} /> <br />
                    {errors.email && <span style={{ color: "red" }}>Your mail is required</span>} <br />

                    <input name="phone" style={{ height: "40px", width: "350px" }} placeholder="Phone" ref={register({ required: true })} /> <br />
                    {errors.phone && <span style={{ color: "red" }}>Your phone number is required</span>} <br />

                    <input name="subject" style={{ height: "40px", width: "350px" }} placeholder="Subject" ref={register({ required: true })} /> <br />
                    {errors.subject && <span style={{ color: "red" }}>Subject is required</span>} <br />


                    <input name="message" style={{ height: "40px", width: "350px" }} placeholder="Your Message" ref={register({ required: true })} /> <br />
                    {errors.message && <span style={{ color: "red" }}>Your message is required</span>} <br />


                    <input style={{ height: "50px", width: "350px", color: "white", background: "#4ED0F3", fontSize: "20px" }} type="submit" />
                </form>
            </div>
        </div>
    );
};

export default MessageUs;