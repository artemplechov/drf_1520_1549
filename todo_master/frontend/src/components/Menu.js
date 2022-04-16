import React from 'react';
import {Router,BrowserRoute,Link,Switch} from "react-router-dom";

const Menu = () => {
    return (
                <ul class="menu-main">
                    <li><Link to="/">Users</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/TODO">TODO</Link></li>
                </ul>
     )
}
export default Menu