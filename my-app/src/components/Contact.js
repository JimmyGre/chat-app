import React from 'react';
import'./Contact.css';
function Contact() {
    const name = "Hazel Owens"
    const avatar = "https://randomuser.me/api/portraits/women/34.jpg"
    const online = true;
  return (
    <div className="Contact">
      <img className="avatar" src={avatar}/>
      <div>
        <h4 className="name">{name}</h4>
        <div className="status">
            <span 
            className="status-online"></span>
           <span 
            className="status-text">{online ? "online" : "offline"}</span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
