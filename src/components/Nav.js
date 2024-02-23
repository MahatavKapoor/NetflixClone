import React, { useEffect, useState } from "react";
import "../Nav.css";

function Nav(){

    const [show, handleShow] = useState(false);

    function scroll(){
        if(window.scrollY > 100)
        {
            handleShow(true);
        }
        else{
            handleShow(false);
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll", scroll );/* to display the background color of the nav when we scroll the banner */
        return ()=>{
            window.removeEventListener("scroll", scroll);
        };
    },[])

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img
                className="nav_logo"
                src="https://thereelbits.com/wp-content/uploads/2017/05/Netflix-Logo.jpg"
                alt="netflix logo"
             />

            <img
                className="nav_avatar"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                alt="user logo"
             />

        </div>
    )
}

/*
Netflix logo : https://www.pxpng.com/public/uploads/preview/-11621687998ytrgnduxoh.png
*/ 

export default Nav;

