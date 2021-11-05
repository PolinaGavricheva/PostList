import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import MyButton from "../button/MyButton";
import {AuthContext} from "../../../context";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth')
    }

    return (
        <div className="navbar">
            <MyButton onClick={logout}>
                Выйти
            </MyButton>
            <div className="navbar__links">
                <div>
                    <Link style={{textDecoration: 'none'}} to="/about">О сайте</Link>
                </div>
                <div>
                    <Link style={{textDecoration: 'none'}} to="/posts">Посты</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

