import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
  <div className="h-20 navbar flex border-solid">
    <nav className="h-16 text-red-900 bg-[#FFFFFF] flex pt-4 gap-8">
       <a href="https://itda.uk.gov.in/?page_id=243"> <img className="h-14 ml-11" src="darc-logo.svg" alt="darc-logo" /> </a>
       <div className="border-l-2 border-x-slate-900 h-14 -mx-4"></div>
       <a href="https://itda.uk.gov.in/"> <img className="h-18" src="itda-logo.svg" alt="itda-logo" /> </a>
    </nav>

    <nav className="right-navbar mt-7 ml-96 flex gap-7 text-base">
       <Link className="text-[#334155] font-medium" to="/"> HOME </Link>
       <Link className="text-[#334155] font-medium" to="#"> ABOUT US </Link>
       <Link className="text-[#334155] font-medium" to="#"> TRAINING </Link>
       <Link className="text-[#334155] font-medium" to="#"> DOCUMENTS </Link>
       <Link className="text-[#334155] font-medium" to="/faq"> FAQ’s </Link>
       <Link className="text-[#334155] font-medium" to="#"> GALLERY </Link>
    </nav>
  </div>
  )
}

export default Navbar