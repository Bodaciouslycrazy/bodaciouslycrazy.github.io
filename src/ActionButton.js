function ActionButton(props){
    return (
        <a className="actionButton" href={props.link} target="_blank" rel="noopener noreferrer">
            <p>{props.text}</p>
        </a>
    );
}

export default ActionButton;