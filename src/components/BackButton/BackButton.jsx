import { Link } from 'react-router-dom';

import { IoMdReturnLeft } from 'react-icons/io';

import Button from '../Button/Button';

function BackButton({ color, to }) {
    return (
        <Link to={to || '..'} relative="path">
            <Button style={{ fontSize: '3rem' }} color={color} >
                <IoMdReturnLeft />
            </Button>
        </Link>
    );
}

export default BackButton;