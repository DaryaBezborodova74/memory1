import { Header } from "../../components/header/Header";
import { NavLink } from "react-router-dom";
import "./FirstPage.css";

export function FirstPage(){
    return (
        <div>
            <Header/>

        <div className="name">
            <h2>Игра memory</h2>
        </div>
        
        <div className="body">
            <h3>Правила игры</h3>
        </div>

        <div className="p">
        <p>Суть игры очень простая:</p>
            <ol>
                <li>Карточки выкладываются «рубашкой» вверх</li>
                <li>Далее игрок открывает две любые карточки</li>
                <li>Если на них изображены одинаковые рисунки, они отмечаются галочкой</li>
                <li>Игрок вскрывает следующую пару карточек</li>
                <li>Если изображения разные, то карточки обратно закрываются</li>
            </ol>
            <p><strong>Когда все карточки будут раскрыты, игра закончится!</strong></p>
        </div>
            
            <nav className="link">
                <NavLink to="game" className={ ({isActive}) => (isActive ? 'link link--active':'link')}>Начать игру</NavLink>
            </nav>
        </div>
    )
}