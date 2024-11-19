import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='text-center bg-neutral-600 bg-opacity-35 text-neutral-400 py-2'>
        <div className='flex items-center justify-center gap-4'>
          <Link to="https://github.com/Yuvraj049/Movie-Finder" >About</Link>
          <Link to="mailto:202101482@daiict.ac.in">Contact</Link>
        </div>
        {/* <p className='text-sm'>Created By Dynamic Coding with Amit</p> */}
    </footer>
  )
}

export default Footer
