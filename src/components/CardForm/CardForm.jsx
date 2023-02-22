import './CardForm.css';

import { useState } from 'react';

import { vendorNames } from '../../utils/vendors';
import format from '../../utils/format';

function CardForm({ card, updateCard }) {
    const [form, setForm] = useState({
        number: card.number === 'XXXX XXXX XXXX XXXX' ? '' : card.number,
        holder: card.holder === 'FIRSTNAME LASTNAME' ? '' : card.holder,
        valid: card.valid === 'MM/YY' ? '' : card.valid,
        ccv: card.ccv || '',
        vendor: card.vendor || 'default'
    });

    function updateForm(elementId, value) {
        setForm((form) => {
            return { ...form, ...{ [elementId]: value } }
        });
    }

    function handleInput(event) {
        const element = event.currentTarget;
        const keyPressed = event.nativeEvent.data;

        const value = format(element.id, element.value, keyPressed);

        updateForm(element.id, value);
        updateCard(element.id, value);
    }

    return (
        <section className="card-form">
            <p className="information">Card Number</p>
            <input
                id="number"
                type="text"
                placeholder="XXXX XXXX XXXX XXXX"
                onInput={handleInput}
                maxLength="19"
                value={form.number}
            />

            <p className="information">Cardholder Name</p>
            <input
                id="holder"
                type="text"
                placeholder="FIRSTNAME LASTNAME"
                onInput={handleInput}
                maxLength="40"
                value={form.holder}
            />

            <section className="flex-1">
                <article>
                    <p className="information">Valid Thru</p>
                    <input
                        id="valid"
                        type="text"
                        placeholder="MM/YY"
                        onInput={handleInput}
                        maxLength="5"
                        value={form.valid}
                    />
                </article>

                <article>
                    <p className="information">CCV</p>
                    <input
                        id="ccv"
                        type="text"
                        onInput={handleInput}
                        maxLength="3"
                        value={form.ccv}
                    />
                </article>
            </section>

            <p className="information">Vendor</p>
            <select id="vendor" value={form.vendor} onInput={handleInput}>
                <option hidden disabled value="default"> -- select your vendor -- </option>
                {
                    vendorNames.map((vendorName, i) => {
                        return <option value={vendorName} key={i}>{vendorName}</option>
                    })
                }
            </select>
        </section>
    );
}
export default CardForm;