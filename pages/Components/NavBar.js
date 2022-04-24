import nav from "../../styles/navbar.module.css";

export default function NavBar(){
    return(
        <nav className={nav.nav}>
            <div className={nav.logo}>
                <h1>Skill</h1>
                <h1 className={nav.hed_2}>Adhyan</h1>
            </div>
            <div className={nav.navItems}>
                <a>Home</a>
                <a>Events</a>
                <a>About</a>
                <a>Contact</a>
            </div>
        </nav>
    )
}