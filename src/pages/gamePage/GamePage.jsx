import "./GamePage.css";
import { images } from "../../data";
import useGame from "../../components/useGame";
import { Grid } from "../../components/grid/Grid";
import Modal from "../../components/modalwindow/modalWindow";

export function GamePage() {
    const { finishedItems, handleReset, stepsCount, checkItems, isWin } = useGame(images);
    console.log(1)
    return (
        <section className="game container">
            <div className="click"> {stepsCount} </div>
            <Grid 
                images={images}
                finishedItems={finishedItems}
                checkItems={checkItems}
                />
                {isWin && (
                    <Modal>
                        <h3 className="modal-caption">Победа!</h3>
                        <p className="modal-description">Вы собрали все пары за {stepsCount} шагов</p>
                        <button
                            className="button modal-button"
                            type="button"
                            onClick={handleReset}>
                                Новая игра
                            </button>
                    </Modal>
                )}
        </section>
    );
}