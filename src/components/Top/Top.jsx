import './Top.css';

function Top(props) {
    return (
        <header className="top">
            <h1>{props.headingText}</h1>
            <h2>{props.subheadingText}</h2>
        </header>
    );
}

export default Top;