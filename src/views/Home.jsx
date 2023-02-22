// Lägger till två knappar: en för att lägga till 'dummy' kort och en för att ta bort alla kort
const DEBUG = true;

import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import Top from "../components/Top/Top";
import Card from "../components/Card/Card";
import CardStack from "../components/CardStack/CardStack";
import Button from '../components/Button/Button';

import devCards from '../assets/devCards.json';
import storage from '../utils/storage';

function Home(props) {
    // Sätt det initiala statet med kort till det som finns i localStorage
    const [cards, setCards] = useState(storage.getCards);

    // Spara vårt state i localStorage när något kort uppdateras
    useEffect(() => {
        storage.saveCards(cards);
    }, [cards]);

    // Wrapper runt setCards som skickar kopia på state till callbacken för att undvika oavsiktlig mutering av state
    // Är man försiktig och använder map och tänker på att inte mutera cards[] direkt behövs detta egentligen ej
    function setCardsWrapper(fn) {
        setCards((cards) => {
            return fn([...cards]);
        });
    }

    const activeCard = cards.find((card) => card.isActive); // Behöver ej vara eget state

    return (
        <div className="home">
            <Top headingText="E-WALLET" subheadingText="ACTIVE CARD" />

            {cards.length > 0 && <Card card={activeCard} cards={cards} setCards={setCardsWrapper} />}
            {cards.length === 0 && (
                <article className="center-1">
                    <p>You have no cards.</p>
                    <p>Add a new card below to get started.</p>
                </article>
            )}

            <CardStack cards={cards} setCards={setCardsWrapper} />
            <Link to="/addcard" state={{ cards }}>
                <Button color="secondary">Add a new card</Button>
            </Link>

            {DEBUG && (
                <Button
                    color="primary"
                    onClick={() => setCards(() => storage.addCards(devCards, cards))}
                >
                    (DEV) Add dev cards
                </Button>
            )}

            {DEBUG && (
                <Button
                    style={{ marginTop: '-20px' }}
                    color="secondary"
                    onClick={() => setCards([])}
                >
                    (DEV) Remove all cards
                </Button>
            )}
        </div >
    );
}

export default Home;