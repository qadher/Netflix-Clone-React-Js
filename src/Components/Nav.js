import React, { useEffect, useState } from 'react'
import '../Components/Nav.css'

function Nav() {

const [show, handleshow] = useState(false);

const transitionNavBar = () => {
    if (window.scrollY > 100) {
        handleshow(true)
    } else{
        handleshow(false)
    }
}

useEffect(() => {

    window.addEventListener("scroll", transitionNavBar)
    return () => window.removeEventListener('scroll', transitionNavBar)
}, [])



    return (
        <div className={`nav ${show && 'nav_black'}
        `}>

           <div className="nav_contents">

           <img 
            className="nav_logo"
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="Netflix-logo"/>
            
            <img 
            className="nav_avatar"
            src="https://1.bp.blogspot.com/-4vqOLs-4Wbc/YLuaMiX2jsI/AAAAAAAAAAM/kDLfziwTx7QSofPb4VjiQR8-zspDQDiuwCNcBGAsYHQ/s320/profile_avatar.png" alt="Netflix-logo"/>

            

           </div>

        </div>
    )
}

export default Nav

