import Link from "next/link"
import './Navbar.css';
export default function Navbar(){

    return(
        <div className="header">
            <Link  href="/">
                        <div className="logo">Kleidung</div>
            </Link>
            
            <nav> 
                <Link href="/">
                     Home
                </Link>
           
               <Link href="/">
                     About
                </Link>
            </nav>
        </div>
    );
}