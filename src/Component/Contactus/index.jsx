import React, { useEffect, useState } from "react";
import "./style.scss";

function ContactUs() {


  return (
    <section id="contactus">
      <div className="contactus">
        <div className="opening">
          <ul>
            <li>Monday-Friday</li>
            <li>Saturday</li>
            <li>Sunday</li>
          </ul>
        </div>
        <div className="contact">
          <p>
            56/8, los angeles, rochy beach, Santa monica, United stated of
            America
          </p>
          <h2>012-6532-568-9746</h2>
          <h2>012-6532-569-9748</h2>
        </div>
        <div className="newsletter">
          <p>You can trust us. we only send promo offers, not a single spam.</p>
          <input type="text" name="" id="" placeholder="your email adress"/>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
