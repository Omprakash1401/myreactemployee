import { Link } from "react-router-dom";

function Menu(){
    return(
        <div>
            
           

            <Link to={"/"}> Home </Link>

            <Link to={"/todo"}> ToDo</Link>
            
            <Link to={"/formhandling"}> FormHandling</Link>
        </div>
    );
}

export default Menu;