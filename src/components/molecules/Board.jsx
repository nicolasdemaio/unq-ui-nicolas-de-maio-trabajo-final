import CountryCard from "../atoms/CountryCard";
import './Board.css'

const Board = ({cards, handleChoice, cardsToReset, disable, amountOfUniqueCards}) => {
    return (
        <div className={(amountOfUniqueCards === 8) ? 'cards-container4x4' : 'cards-container6x6'}>
                {cards.map((card, number) => (
                    <CountryCard
                        name={card.name}
                        key={number}
                        number={number}
                        image={card.imageSrc}
                        handleChoice={handleChoice}
                        cardsToReset={cardsToReset}
                        disable={disable}
                    />
                ))}
        </div>
    )
}

export default Board