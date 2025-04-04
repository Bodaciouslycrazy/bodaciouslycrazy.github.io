import ProjectItem from "./ProjectItem";
import packratImage from "./assets/Packrat.png";
import scrabbleImage from "./assets/ScrabbleVision.jpg";
import highlandiaImage from "./assets/Highlandia.png";
import cosmicCadenceImage from "./assets/CosmicCadence.png";
import wheelCrisisImage from "./assets/WheelCrisis.png"
import hiveBotImage from "./assets/HiveBot.png";
import ActionButton from "./ActionButton";

const workProjects = [
    {
        key: "packrat",
        image: packratImage,
        content: 
        <>
            <h2>Packrat</h2>
            <p>
                The classic card collecting and trading game! Trade cards with friends, steal from enemies and grow your collection!
                <br/>
                <ul>
                    <li>Rebuilt the entire game client from scratch using Unity3D and C#</li>
                    <li>Eliminated 12 years of tech-debt and improved structure for future devs</li>
                    <li>Provided continuous support, bug fixes and new features</li>
                </ul>
                <br/>
                {ActionButton({text:"Play Packrat", link:"https://playpackrat.com"})}
            </p>
        </>
    },
    {
        key: "scrabblevision",
        image: scrabbleImage,
        content:
        <>
            <h2>Scrabble Vision: Scorekeeper+</h2>
            <p>
                A fantastic companion app for your Scrabble board! Scan your board with a phone camera, and your game will automatically be scored.
                <br/>
                <ul>
                    <li>Built the client UI and the game-state logic</li>
                    <li>Includes optional scrabble rules, like challenging plays</li>
                    <li>Connected the front-end to the back-end API for leaderboards and other online functionality</li>
                </ul>
                <br/>
                {ActionButton({text:"Learn More", link:"https://hookbang.com/portfolio/scrabblevision/"})}
            </p>
        </>
    },
    {
        key: "highlandia",
        image: highlandiaImage,
        content:
        <>
            <h2>Highlandia</h2>
            <p>
                An educational app meant to teach English to non-native English speakers using fun games!
                <br/>
                <ul>
                    <li>Envisioned and developed "Tracer" game to teach users how to write engligh letters</li>
                    <li>Programmed game logic for "Speak Up" game which uses the microphone to detect user speech</li>
                    <li>Created data management tools and systems to manage the large number of levels in Highlandia</li>
                </ul>
                <br/>
                {ActionButton({text:"Learn More", link:"https://www.createneptune.com/highlandia"})}
            </p>
        </>
    }
]

const personalProjects = [
    {
        key: "wheelcrisis",
        image: wheelCrisisImage,
        content:
        <>
            <h2>Wheel Crisis</h2>
            <p>
                What happens when you combine Time Crisis and the Elder Scrolls: Oblivion Persuasion Wheel mechanic?
                <br/>
                A game built in one week for the <a href="https://itch.io/jam/wheeljam">Wheel Jam</a>! Currently being improved for a full release.
                Keep an eye out for future updates!
                <br/>
                {ActionButton({text:"Play Now", link:"https://bodaciouslycrazy.itch.io/wheel-crisis"})}
            </p>
        </>
    },
    {
        key: "ludumdare",
        image: cosmicCadenceImage,
        content: 
        <>
            <h2>Game Jam Projects</h2>
            <p>
                All Ludum Dare game jam entries were made in the span of 72 hours!
                <ul>
                    <li>Cosmic Cadence (April 2018 - Theme: Combine two incompatable genres)</li>
                    <li>Top Seed (October 2019 - Theme: Start with Nothing)</li>
                    <li>Arrythmia (April 2020 - Theme: Keep it Alive)</li>
                    <li>Curiosity (April 2021 - Theme: Deeper and Deeper)</li>
                </ul>
                <br/>
                {ActionButton({text:"Play Now", link:"https://bodaciouslycrazy.itch.io"})}
            </p>
        </>
    },
    {
        key: "hivebot",
        image: hiveBotImage,
        content:
        <>
            <h2>Hive Discord Bot</h2>
            <p>
                A discord bot that allows friends to play the board game "Hive" through text chat. Programmed entirely in Python, and built to run on a raspberry pi as a server.
                Currently in use in a private discord server with friends.
            </p>
            <br/>
        </>
    }
]

function Projects(){
    return (
        <div id="projects">
            <h1>Work Projects</h1>
            <div className="projectList">
                {workProjects.map( (el, index) => { return (
                <ProjectItem key={el.key} img={el.image} rightAlign={false}>
                    {el.content}
                </ProjectItem>);
                })}
            </div>
            <h1>Personal Projects</h1>
            <div className="projectList">
                {personalProjects.map((el, index) => { return (
                    <ProjectItem key={el.key} img={el.image} rightAlign={false}>
                        {el.content}
                    </ProjectItem>);
                })}
            </div>
        </div>
    );
}

export default Projects;