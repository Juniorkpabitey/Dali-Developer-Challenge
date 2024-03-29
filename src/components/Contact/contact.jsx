import React from 'react'
import './Contact.css'
const contact = () => {
  return (
    <div className="contact-from">
        <div className="w-left">
            <div className="awesome">
                <span>Get in touch</span>
                <span>Contact me</span>
                <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
            </div>
        </div>

        <div className="c-right">
            <form>
                <input type="text" name="user_name" className="user" placeholder="Name" />
                <input type="email" name="user_email" className="user" placeholder="Email" />
                <textarea name="message" className="user" placeholder="Message"/>
                <input type="submit" value="send" className="button" />
                <div className="blur -c-blur1" style={{background: "var(--purple)"}}></div>

            </form>
        </div>
    </div>
    )
}

export default contact