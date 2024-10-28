import { Header } from "../../components/header/Header";
import { Outlet, NavLink } from "react-router-dom";
import "./FirstPage.css";

export function FirstPage(){
    return (
        <div>
            <Header/>
            <h2>Игра memory</h2>
            <p>Правила игры</p>
            <nav>
                <NavLink to="createset" className={ ({isActive}) => (isActive ? 'link link--active':'link')}>Создать сет</NavLink>
                <NavLink to="createcard" className={ ({isActive}) => (isActive ? 'link link--active':'link')}>Создать карточку</NavLink>
            </nav>

            <Outlet />

        </div>
    )
}