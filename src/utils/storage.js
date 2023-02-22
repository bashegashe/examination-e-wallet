import uuid from "react-uuid";

const CARD_STORAGE = 'SAVED_CARDS';

function getCards() {    
    return JSON.parse(window.localStorage.getItem(CARD_STORAGE)) || [];
}

function saveCards(cards) {
    window.localStorage.setItem(CARD_STORAGE, JSON.stringify(cards));

    return cards;
}

/**
 * Cards state skickas med till funktionerna nedan för att slippa läsa
 * från localStorage för mycket. Cards state är ändå alltid det senaste som finns i localStorage
 * i och med en useEffect som uppdaterar localStorage så fort cards state uppdateras.
 * Globalt state behövs för att slippa skicka runt cards state mellan vyer 
 */
function addCard(card, cards) {
    card.id = uuid();
    card.isActive = cards.length === 0;

    saveCards([...cards, {...card}]);

    return card;
}

// (DEV) addCards
function addCards(cardsToAdd, cards) {
    const newCards = [...cards];
    
    cardsToAdd.map((card) => {
        card.id = uuid();
        card.isActive = newCards.length === 0;

        newCards.push({...card});
    });

    return newCards;
}

function updateCard(card, cards) {
    const newCards = [...cards];

    newCards.map((currentCard, i) => {
        if (currentCard.id === card.id) {
            newCards[i] = card;
        }
    });

    saveCards(newCards);

    return card;
}

function deleteCard(cardId, cards) {    
    let cardWasActive = false;

    const newCards = [...cards].filter((card) => {
        if (card.id === cardId) {
            if (card.isActive) cardWasActive = true;

            return false;
        } else {
            return true;
        }
    });

    if (cardWasActive && newCards.length > 0) {
        newCards[0].isActive = true;
    }

    return newCards;
}

const storage = {
    getCards,
    addCard,
    addCards,
    updateCard,
    saveCards,
    deleteCard
}

export default storage;