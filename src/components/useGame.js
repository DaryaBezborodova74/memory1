import React from "react";
import { images } from "../data";

export default function useGame(images) {
const [finishedItems, setFinishedItems] = React.useState([])
const [stepsCount, setStepCount] = React.useState(0)

const checkItems = (firstItem, secondItem) => {
    const firstImage = images.find(({id}) => id === firstItem);
    const secondImage = images.find(({id}) => id === secondItem);
    if (firstImage.url === secondImage.url) {
        setFinishedItems((items) => [...items, firstItem, secondItem]);
    }
    setStepCount((i) => i + 1);
};

const handleReset = () => {
    setFinishedItems([]);
    setStepCount(0);
};

const isWin = finishedItems.length > 0 && finishedItems.lenght === images.length;

return {
    finishedItems,
    handleReset,
    stepsCount,
    checkItems,
    isWin
};
};

