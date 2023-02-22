import './IconButton.css';

function IconButton(props) {
    return (
        <article className="iconButton">
            {props.text && <p className="iconButton__text">{props.text}</p>}

            <button className="iconButton__button" onClick={props.onClick}>
                {props.icon}
            </button>
        </article>
    );
}

export default IconButton;