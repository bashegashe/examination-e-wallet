import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import Top from "../components/Top/Top";
import Card from "../components/Card/Card";
import CardForm from "../components/CardForm/CardForm";
import Button from "../components/Button/Button";
import BackButton from "../components/BackButton/BackButton";
import Error from "../components/Error/Error";

import storage from "../utils/storage";

function EditCard(props) {
    const navigate = useNavigate();
    const { state } = useLocation(); // Kortet vi klickade på i Home ska visas

    if (!state) return <Error text="You cannot access this page directly." />

    const [card, setCard] = useState(state.card);

    function updateCardState(key, value) {
        setCard((data) => {
            return { ...data, ...{ [key]: value } }
        });
    }

    function updateCard() {
        storage.updateCard(card, state.cards);
        navigate('/');
    }

    return (
        <div className="edit-card">
            <BackButton color="primary"></BackButton>
            <Top headingText="edit a bank card" subheadingText="edited card" />
            <Card card={card} />
            <CardForm card={card} updateCard={updateCardState} />
            <Button color="primary" onClick={updateCard}>Update card</Button>
        </div>
    );
}

export default EditCard;