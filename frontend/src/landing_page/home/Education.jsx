import React from 'react'
import education from "../images/education.svg";

const Education = () => {
  return (
    <div>
      <div className="container mt-">
      <div className="row">
       <div className='col-6'>


      <img
                  src={education}
                  alt="Education Image"
                  style={{ width: "80%" }}
                ></img>
      


       </div>
       <div className='col-6'>


          <h1 className="mb-3 fs-2">Free and Open market education</h1>
          <p>
            {" "}
            we poineered the the concept of discount broking and price
            transperancy in India. flat fees and no hidden charges
          </p>

          <a
            href="Explore our products "
            className="mx-5"
            style={{ textDecoration: "none" }}
          >
            {" "}
          Versity <i class="fa-solid fa-arrow-right"></i>
          </a>

          <p className='mt-5'>
            {" "}
            we poineered the the concept of discount broking and price
            transperancy in India. flat fees and no hidden charges
          </p>


          <a
            href="Explore our products "
            className="mx-5"
            style={{ textDecoration: "none" }}
          >
            {" "}
          Trading Q & A <i class="fa-solid fa-arrow-right"></i>
          </a>
       </div>
       

      </div>
    </div>
    </div>
  )
}

export default Education
