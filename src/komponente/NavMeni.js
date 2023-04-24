import { Link } from 'react-router-dom'

function NavMeni() {
    return (
        <div className="nav_meni">
            <Link to={"/"} id="digimoni_nav">Digimoni</Link>
            <Link to={"/pretraga"} id="digimoni_pretraga_nav">Pretraga</Link>
        </div>
    )
}

export default NavMeni;