import {React, Link} from "react";
import { NavLink } from "react-router-dom";

function handleClick(targetId){
    const element = document.getElementById(targetId);
    if(element){
        element.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
};

//Properties:
//path (string): URL path
//text
function NavButton(props){
    return (
        <div className={"navButton" + (props.active ? "Active" : "")} onClick={() => handleClick(props.path)}>
            <p>{props.text}</p>
        </div>
    );
}

export default NavButton;