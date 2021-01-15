import React from 'react';
import "./Contact.css";

function Contact() {
    return (
        <div className="contact_wrapper">
            <p className="contact_title">Contact Us</p>
            <input type="email" placeholder="Mail" className="mail_place"/><br/>
            <input type="text" placeholder="Message" className="text_place"/><br/>
            <button className="send_btn">SEND</button>
        </div>
    );
}

export default Contact;
