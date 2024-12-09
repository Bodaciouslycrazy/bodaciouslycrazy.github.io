import bioPic from "./assets/BioPic.jpeg"

function Bio(){
    return(
        <div id="bio" className="biopage">
            <div className="biospacer"/>
            <div className="bioinfo">
                <img className="biopic" src={bioPic}/>
                <h1>Hi, I'm Bodie!</h1>
                <p>A software engineer and game developer with over 5 years of experience!
                    I graduated from UT Dallas with a Bachleor's in Computer Science in 2019, but my learning hasn't stopped. I continuously learn new languages and technologies every day, and I always seek new challenges with every project I work on.
                    Coding is my passion, and my goal is to use code to bring fun and engaging experiences to everyone!
                </p>
            </div>
            <div className="biospacer"/>
        </div>
    );
}

export default Bio;