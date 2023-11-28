import { NavLink } from "react-router-dom"

export const Navbar = () => {
    return <>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/about'}>About</NavLink>
        <NavLink to={'/contact'}>Contact</NavLink>
        <NavLink to={'/service'}>Service</NavLink>
        <NavLink to={'/register'}>Register</NavLink>
        <NavLink to={'/login'}>Login</NavLink>
    </>
}