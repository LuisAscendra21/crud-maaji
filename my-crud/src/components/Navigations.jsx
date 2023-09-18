import { Link } from "react-router-dom";

export function Navigations(){
    return (
        <div className="nav_iconos">
            <Link className="link" to="Home">
            <span className="iconoDatos"><ion-icon name="home-outline"></ion-icon></span>
            </Link>
            <Link className="link" to="/tasks-create">
                <span className="iconoDatos"><ion-icon name="clipboard-outline"></ion-icon></span>
            </Link>
            <Link className="link" to="/tasks">
            <span className="iconoDatos"><ion-icon name="archive-outline"></ion-icon></span>
            </Link>
            
        </div>
    )
}