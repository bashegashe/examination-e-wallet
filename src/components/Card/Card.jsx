import './Card.css';

import { IoIosSettings } from 'react-icons/io';

import { useState } from 'react';

import CardActions from '../CardActions/CardActions';
import IconButton from '../IconButton/IconButton';

import { getVendorStyle } from '../../utils/vendors';

function Card({ card, cards, setCards }) {
    const [showActions, setShowActions] = useState(false);

    const vendorStyle = getVendorStyle(card.vendor);

    let cardRect;

    // Effekt/funktion för att byta mellan kort direkt när man rör sig över korten nedåt.
    function handleMouseMove(event) {
        if (event.currentTarget !== event.target) return;
        if (card.isActive) return;
        if (event.currentTarget === event.currentTarget.parentElement.lastElementChild) return;

        if (!cardRect) {
            cardRect = event.currentTarget.getBoundingClientRect();

            if (window.scrollY > 0) cardRect.y = cardRect.y + window.scrollY;
        }

        if (cardRect && event.clientY + window.scrollY > cardRect.y + 40) {
            event.currentTarget.classList.remove('showCard');
        }
    }

    return (
        <section
            className="card"
            style={{
                background: vendorStyle.background,
                color: vendorStyle.color
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={(event) => event.currentTarget.classList.add('showCard')}
            onMouseLeave={(event) => {
                event.currentTarget.classList.remove('showCard');
                setShowActions(false);
            }}
        >
            <article className="card__settings">
                <IconButton onClick={() => setShowActions((sa) => !sa)} icon={<IoIosSettings />} />
            </article>

            <img src={vendorStyle.chip} alt="Chip" />

            {vendorStyle.logo && <img className="card__logo" src={vendorStyle.logo} alt="Logo" />}

            <p className="card__number">{card.number}</p>

            <p
                className="card__holder__text information"
                style={{ color: vendorStyle.infoColor }}
            >Cardholder name</p>

            <p
                className="card__validity__text information"
                style={{ color: vendorStyle.infoColor }}
            >Valid thru</p>

            <p className="card__holder">{card.holder}</p>
            <p className="card__validity">{card.valid}</p>


            <CardActions
                card={card}
                cards={cards}
                setCards={setCards}
                showActions={showActions}
            />
        </section>
    );
}

export default Card;