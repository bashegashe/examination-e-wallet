import './CardActions.css';

import { AiOutlineEdit } from 'react-icons/ai';
import { AiOutlineDelete } from 'react-icons/ai';
import { BsCreditCard2Back } from 'react-icons/bs';

import { useNavigate } from 'react-router-dom';

import IconButton from '../IconButton/IconButton';
import storage from '../../utils/storage';

function CardActions({ card, cards, setCards, showActions }) {
    const navigate = useNavigate();

    // I och med useEffecten som körs vid förändring av cards kommer alla 'actions' nedan
    // att trigga effekten som sparar senaste state i localStorage 
    function deleteCard() {
        setCards((cards) => {
            return storage.deleteCard(card.id, cards);
        });
    }

    function makeCardActive() {
        setCards((cards) => {
            return cards.map((currentCard) => {
                if (currentCard.id === card.id)
                    currentCard.isActive = true;
                else
                    currentCard.isActive = false;

                return currentCard;
            });
        });
    }

    return (
        <div className="card__actions" style={{ display: showActions ? 'block' : 'none' }}>
            <div className="card__icons">
                <IconButton
                    onClick={() => navigate('/editcard', { state: { card, cards } })}
                    icon={<AiOutlineEdit />}
                    text="Edit"
                />

                {!card.isActive && (
                    <IconButton
                        onClick={makeCardActive}
                        icon={<BsCreditCard2Back />}
                        text="Make Active"
                    />
                )}

                <IconButton
                    onClick={deleteCard}
                    icon={<AiOutlineDelete />}
                    text="Delete"
                />
            </div>
        </div>
    );
}

export default CardActions;