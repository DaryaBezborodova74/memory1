import {Card} from "../card/Card";
import "./grid.css";
import {images} from "../../data"

export function Grid(){
    return (
        <div>
    {
        images.map((item)=>(
            <Card
            key={item.id}
            path={item.url}
            />
        ))
    }
        </div>
    )
}