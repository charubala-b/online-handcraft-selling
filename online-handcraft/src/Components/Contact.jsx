import React from 'react';


function Contact() {
  return (
     <>
     <section class="contact-content" id="contact">
    <div class="container">
        <div class="contact-title">
            <h4>Let's Connect</h4>
        </div>
        <div class="contact">
            <form name="submitToGoogleSheet">
                <input type="text" name="NAME" placeholder="Name" required/>
                <input type="email" name="EMAIL" placeholder="Email" required/>
                <input type="text" name="PHONE NUMBER" placeholder="Phone Number"/>
                <input type="text" name="COUNTRY" placeholder="Country"/>
                <textarea name="MESSAGE" placeholder="Tell us more about yourself"></textarea>
                <input type="submit" value="Send Message" class="submit"/>
            </form>
            <span id="msg"></span>
        </div>
    </div>
    
</section>
</>
  );
}

export default Contact;