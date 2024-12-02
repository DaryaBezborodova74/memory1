import { useState } from "react";
import './Card.css';

export function Card({ item, isVisible, isFinished, onCardClick}) {
    const { id, url } = item;
    const handleClick = () => {
        onCardClick(id)
    };
    const classCard = `card
        ${isVisible ? "card-show" : ""}
        ${isFinished ? "card-finiched" : ""}`;

    return (
        <div className={classCard} onClick={handleClick}>
            <img src={url} width="204" height="144" alt="" />
        </div>
    );
}
    
    
    // const [checkCard, setCheckCard] = useState(false);
    
    // const handleClick = () => {
    //     setCheckCard(!checkCard);
    // }
    // let className = `card ${checkCard ? 'card-check' : ''}`;
    // return(
    //     <div className="cards"> 
    //     <img className="card_img" src={path} alt="" />
    //     </div>
    // );
