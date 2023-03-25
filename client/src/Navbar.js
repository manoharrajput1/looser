import {React,useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import {context} from './App'

const Navbar = () => {
    const { state } = useContext(context);
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <div className="container-fluid">
                    <span className="navbar-brand text-white">Portfolio</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse me-auto" id="navbarSupportedContent">
                        {state ?
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item ">
                                    <Link className="nav-link text-white active" aria-current="page" to='/home'>Home</Link>
                                </li>
                                <li className="nav-item text-dark">
                                    <Link className="nav-link text-white" to='/about'>About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to='/contact'>Contact</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to='/logout'>Logout</Link>
                                </li>
                            </ul>
                            :
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link text-white" aria-current="page" to='/signup'>Register</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to='/signin'>Login</Link>
                                </li>
                            </ul>}
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default Navbar