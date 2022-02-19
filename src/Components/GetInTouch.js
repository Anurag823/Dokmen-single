import React, { useState } from "react";
import '../Styles/GetInTouch.css'

const GetInTouch = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');



  return (
      <div className="getintouch">

    <div className="container py-4">
      <h3 className="text-center py-4">Get in Touch</h3>
      <p className="text-center py-4">
        Please touch for any enquiries or insights on footwear and foot care
        industry.
        <br />
        Our growing team of industry experts and thought leaders will get back
        to you soon.
      </p>

      <div className="container">
        <form className="px-4" onSubmit={(e)=>{e.preventDefault();
          window.location=`mailto:empirefootwear@gmail.com?subject=${subject}&body=${message}`}}>
          <div className="row g-3">
            <div className="col my-3">
              <input type="text" className="form-control" required placeholder="Name" value={name} onChange={(e)=>setName(e.currentTarget.value)} />
            </div>
            <div className="col my-3">
              <input type="email" className="form-control" required placeholder="Email" value={email} onChange={(e)=>setEmail(e.currentTarget.value)} />
            </div>
          </div>
          <input type="text" className="form-control my-3" required placeholder="Subject" value={subject} onChange={(e)=>setSubject(e.currentTarget.value)} />
          <div className="form-floating py-2">
            <textarea
            required
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style={{ height: "100px", marginTop: "16px" }}
              value={message} onChange={(e)=>setMessage(e.currentTarget.value)}
            ></textarea>
            {/* <label for="floatingTextarea2">Comments</label> */}
          </div>
          <div className="submit-btn text-center py-4">
          <input type="submit" value="SEND"  />
          </div>
        </form>
      </div>
    </div>
    </div>

  );
};

export default GetInTouch;
