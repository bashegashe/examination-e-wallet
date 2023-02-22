import './CardStack.css';

import Card from '../Card/Card';

function CardStack({ cards, setCards }) {    
    const cardList = cards.filter((card) => !card.isActive).map((card) => {
        return (
            <Card
                card={card}
                cards={cards}
                setCards={setCards}
                key={card.id}
            />
        );
    });

    return (
        <article className="card-stack">
            {cardList}
        </article>
    );
}

export default CardStack;