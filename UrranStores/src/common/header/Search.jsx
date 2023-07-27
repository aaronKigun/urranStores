import React from "react"
import man from "../../components/assets/images/man.png"
import urran from "../../components/assets/images/urranStores.png"
import { Link } from "react-router-dom"

const Search = ({ CartItem }) => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })

  return (
    <>
      <section className='search'>
        <div className='container c_flex'>
          <div className='logo width '>
            <img src={urran} alt='' />
          </div>

          <div className='search-box f_flex'>
            <i className='fa fa-search'></i>
            <input type='text' placeholder='Search and hit enter...' />
            <span>All Category</span>
          </div>

          <div className='icon f_flex width'>
            <div className='cart'>
              <Link to='/cart'>
                <img src={man} alt=""/>
              </Link>
              <p>Hello,&nbsp;user</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Search
