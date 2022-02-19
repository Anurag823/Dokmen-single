import React, { useState } from "react";

const NewsLetter = () => {
  const [email, setEmail] = useState('')
  return (
    <div className="newsletter py-5" style={{ backgroundColor: "#ccc" }}>
      <div className="container">
        <p className="text-center my-3">
          Recieve our insightful weekly NewsLetter and stay ahead of the
          competition <br />
          Just inpur your Email address
        </p>
        <div className="input-div d-flex justify-content-center my-3">
          <form action="POST" onSubmit={(e)=>{e.preventDefault();
          window.location=`mailto:empirefootwear@gmail.com?subject=''&body=${email}`}} className="text-center">
            <input
              type="email"
              required
              placeholder="Your Email"
              style={{ width: "20rem" }}
              className="my-3"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
            <button
            type="submit"
              className="mx-1 my-3 px-4 "
              style={{ border: "none", background: "#032044", color: "white" }}
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
