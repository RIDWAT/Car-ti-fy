
import { useState } from 'react'
import './Nav.css'

function Nav() {
    const [showNav,setshowNav] = useState(false)
    let icon1 = document.getElementById('menu')
    let icon2 = document.getElementById('cancel')
    return(

        <div className="navbar">
            <i onClick={()=>setshowNav(!showNav)} id='menu' class="fa-solid fa-bars" ></i>
            {/* <i  id='cancel' class="fa-solid fa-x"></i> */}
            

            
           {showNav && <div>
           <MobileNav/>
           </div>}
          {/* {!showNav &&<div>
            <MobileNav/>
           </div>} */}
        
           
           <ul className='navitem'>
            <li><a href="">HOME</a></li>
            <li><a href="">BEST SELLER</a></li>
            <li><a href="">CLOTHING<i class="fa-solid fa-angle-down"></i></a></li>
            <li><a href="">ACCESSORIES<i class="fa-solid fa-angle-down"></i></a></li>
            <li><a href="">HOME DECOR<i class="fa-solid fa-angle-down"></i></a></li>
            <li><a href="">COLLECTION<i class="fa-solid fa-angle-down"></i></a></li>
           </ul>
            
            <p className='icons'>
            <i class="fa-solid fa-magnifying-glass"></i>
            <i class="fa-regular fa-user"></i>
            <i class="fa-solid fa-cart-shopping"></i>
            </p>
           
        

            </div>

    )
    
}
export default Nav

function MobileNav() {
    return(
        <ul className='navitemmobile'>
            <li><a href="">HOME</a></li>
            <li><a href="">BEST SELLER</a></li>
            <li><a href="">CLOTHING</a></li>
            <li><a href="">ACCESSORIES</a></li>
            <li><a href="">HOME DECOR</a></li>
            <li><a href="">COLLECTION</a></li>
           </ul>
    )
    
}