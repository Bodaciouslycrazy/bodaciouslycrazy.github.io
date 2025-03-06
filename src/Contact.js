import ContactButton from "./ContactButton";
import EmailLogo from "./assets/EmailLogoPixel.png"
import LinkedinLogo from "./assets/LinkedinLogoPixel.png"
import GithubLogo from "./assets/GithubLogoPixel.png"

function Contact(){
    return (
        <div id="contact">
            <h1>Contact</h1>
            <br/>
            <div className="contactList">
                {ContactButton({img: LinkedinLogo, link:"https://www.linkedin.com/in/bodie-malik/"})}
                {ContactButton({img: GithubLogo, link:"https://github.com/Bodaciouslycrazy"})}
                {ContactButton({img: EmailLogo, link:"mailto:bodiemalik@gmail.com?"})}
            </div>
            {/*
            <p>Email: <a href="mailto:bodiemalik@gmail.com?">bodiemalik@gmail.com</a></p>
            <p>Linkedin: <a href="https://www.linkedin.com/in/bodie-malik/">linkedin.com/in/bodie-malik/</a></p>
            <p>Github: <a href="https://github.com/Bodaciouslycrazy">github.com/Bodaciouslycrazy</a></p>
            */}
        </div>
    )
}

export default Contact;