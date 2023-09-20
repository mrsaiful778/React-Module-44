import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';


const Navbar = () => {
    const [open, setOpen]=useState(false);
    const routes = [
        { id: 1, path: '/',  name: 'Home' },
        { id: 2, path: '/about',  name: 'About' },
        { id: 3, path: '/services',  name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '*', name: 'Not Found' }
      ];
    return (
        
     <nav className="bg-yellow-200">
            <div className="md:hidden " onClick={()=> setOpen(!open)}>
                {
                    open === true ? 
                    <AiOutlineClose></AiOutlineClose>
                   : <AiOutlineMenu ></AiOutlineMenu> 
                }
            </div>
            <ul className={`md:flex duration-1000 absolute md:static bg-yellow-200 ${open ? 'top-16': '-top-60'}`}>
            {
                routes.map(route =><Link key={route.id} route={route}></Link> )
            }
            </ul>
      
     </nav>
    );
};

export default Navbar;