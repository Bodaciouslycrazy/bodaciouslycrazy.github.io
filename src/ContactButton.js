// EXPECTS PROPS:
// img - image used in icon
// link - the link the button should take you to
function ContactButton(props){
    return (
        <a className="contactButton" href={props.link} target="_blank" rel="noopener noreferrer">
            <img src={props.img}/>
        </a>
    );
}

export default ContactButton;