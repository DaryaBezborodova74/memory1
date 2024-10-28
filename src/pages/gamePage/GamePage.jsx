import { Header } from "../../components/header/Header";
import { Card } from "../../components/card/Card";
import { Outlet, NavLink } from "react-router-dom";
import "./GamePage.css";

export function GamePage(){
    return (
        <div>
            <Header/>
            <h2>Создание сета карточек</h2>
            <Card/>
            <nav>
                <NavLink to="createset" className={ ({isActive}) => (isActive ? 'link link--active':'link')}>Создать сет</NavLink>
                <NavLink to="createcard" className={ ({isActive}) => (isActive ? 'link link--active':'link')}>Создать карточку</NavLink>
            </nav>

            <Outlet />

        </div>
    )
}