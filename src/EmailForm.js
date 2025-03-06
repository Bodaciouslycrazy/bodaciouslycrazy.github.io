function EmailForm(){
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    return (
        <form>
            <label>Name: </label>
            <input type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}/>
            <label>Message: </label>
            <input type="text"
                value={message}
                placeholder="type message here"
                onChange={(e) => setMessage(e.target.value)}/>

        </form>
    )
}

export default EmailForm;