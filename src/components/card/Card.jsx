import { useState } from "react";
import './Card.css';

export function Card({path}) {
    const [checkCard, setCheckCard] = useState(false);
    
    const handleClick = () => {
        setCheckCard(!checkCard);
    }
    let className = `card ${checkCard ? 'card-check' : ''}`;
    return(
        <div className="cards"> 
        <img className="card_img" src={path} alt="" />
        </div>
    );
}