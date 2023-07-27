import React from "react"
import { Link } from "react-router-dom"
import { useState } from "react"
import "../header/Head.css"

const Head = () => {
  const [MobileMenu, setMobileMenu] = useState(false)
  return (
    <>
      <section className='head'>
        <div className='container d_flex'>
          <div className='left row'>
            <i className='fa fa-phone'></i>
            <label> +2347041542200</label>
            <i className='fa fa-envelope'></i>
            <label>aaronkigun@gmail.com</label>
          </div>
          
          <div className='navlink'>
            <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
              {/*<ul className='link f_flex uppercase {MobileMenu ? "nav-links-MobileMenu" : "nav-links"} onClick={() => setMobileMenu(false)}'>*/}
              <li>
                <Link to='/'className="true">home</Link>
              </li>
              <li>
                <Link to='/pages' className="true">pages</Link>
              </li>
              <li>
                <Link to='/user' className="true">user account</Link>
              </li>
              <li>
                <Link to='/vendor' className="true">vendor account</Link>
              </li>
              <li>
                <Link to='/contact' className="true">contact</Link>
              </li>
            </ul>

            <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
              {MobileMenu ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
