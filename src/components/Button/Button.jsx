import './Button.css';

import { colors } from '../../utils/vendors';

function Button(props) {
    const invertedColor = props.color === 'primary' ? 'secondary' : 'primary';

    function startHoverEffect(event) {
        event.currentTarget.style.background = colors[invertedColor];
        event.currentTarget.style.color = colors[props.color];
    }

    function endHoverEffect(event) {
        event.currentTarget.style.background = colors[props.color];
        event.currentTarget.style.color = colors[invertedColor];
    }

    return (
        <div className="container">
            <button
                style={props.style}
                className={`button button--${props.color || 'primary'}`}
                onClick={props.onClick}
                onMouseEnter={startHoverEffect}
                onMouseLeave={endHoverEffect}
            >
                {props.children}
            </button>
        </div>
    );
}

export default Button;