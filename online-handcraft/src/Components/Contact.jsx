import React from 'react';


function Contact() {
  return (
     <>
     <section className="contact-content" id="contact">
    <div className="container">
        <div className="contact-title">
            <h4>Let's Connect</h4>
        </div>
        <div className="contact">
            <form name="submitToGoogleSheet">
                <input type="text" name="NAME" placeholder="Name" required/>
                <input type="email" name="EMAIL" placeholder="Email" required/>
                <input type="text" name="PHONE NUMBER" placeholder="Phone Number"/>
                <input type="text" name="COUNTRY" placeholder="Country"/>
                <textarea name="MESSAGE" placeholder="More about yourself" className="moreabout"></textarea>
                <input type="submit" value="Send Message" className="submit"/>
                
            </form>
            <a href="#info1"><button>Moveup</button></a>
            <span id="msg"></span>
        </div>
    </div>
    
</section>
</>
  );
}

export default Contact;