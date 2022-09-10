import React from 'react'
import "../Navigation/Navigation.css"
const Navigation = () => {
  return (
    <div>
        <div className="navbar">
          
           
            <div className="navbody">
            <a href="/">OrderBody</a>
                <nav>
                    <ul>
                        <li><a href="#">home</a> </li>
                        <li><a href="#">Orders</a> </li>
                        <li><a href="#">About</a> </li>
                        <li><a href="#">Contact Us</a> </li>
                       
                    </ul>
                </nav>
            </div>

        </div>
    </div>
  )
}

export default Navigation