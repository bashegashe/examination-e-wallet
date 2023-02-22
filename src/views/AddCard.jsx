import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Top from '../components/Top/Top';
import Card from '../components/Card/Card';
import CardForm from '../components/CardForm/CardForm';
import Button from '../components/Button/Button';
import BackButton from '../components/BackButton/BackButton';

import storage from '../utils/storage';

function AddCard(props) {
    const navigate = useNavigate();
    const {state} = useLocation();
    
    const [card, setCard] = useState({
        number: 'XXXX XXXX XXXX XXXX',
        holder: 'FIRSTNAME LASTNAME',
        valid: 'MM/YY',
        vendor: null,
        ccv: ''
    });

    function updateCardState(key, value) {
        setCard((data) => {
            return { ...data, ...{ [key]: value } }
        });
    }

    function handleClick() {
        storage.addCard(card, state.cards);
        navigate('/');
    }

    return (
        <div className="add-card">
            <BackButton color="primary"></BackButton>
            <Top headingText="add a new bank card" subheadingText="new card" />
            <Card card={card} />
            <CardForm card={card} updateCard={updateCardState} />
            <Button color="primary" onClick={handleClick}>Add a new card</Button>
        </div>
    );
}

export default AddCard;