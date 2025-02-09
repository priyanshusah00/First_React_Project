import React from 'react'
const func = () => {
  alert("no function is added :(")
}
const navbar = () => {
  return (
    <nav className='container'>
      <div className="logo">
        <img src="\images\logo.png" alt="logo" />
       </div>
        <div>
        <ul className='list'>
        <li className='list2'href ="#">Menu</li>
        <li className='list2'href ="#">Location</li>
        <li className='list2'href ="#">About</li>
        <li className='list2'href ="#">Contact</li>  
        </ul>
        </div>
        
        <button className='button' onClick={func}>Login</button>
      
      
    </nav>
  )
}

export default navbar