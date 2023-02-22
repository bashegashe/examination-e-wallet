import './Error.css';

import { MdError } from 'react-icons/md';

import BackButton from '../BackButton/BackButton';

function Error({text}) {
    return (
        <div className="error">
            <MdError className="error__icon" />
            <h1>{text}</h1>
            <BackButton color="primary" to="/" />
        </div>
    );
}

export default Error;