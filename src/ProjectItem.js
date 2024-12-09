
// Pass in property rightAlign=true or false
function ProjectItem(props){
    const style = {
        backgroundImage: `url(${props.img})`,
    }

    return (
        <div className="projectContainer">
            {!props.rightAlign && <div className="projectIcon" style={style}/> }
            <div className="projectContent">
                {props.children}
            </div>
            {props.rightAlign && <div className="projectIcon" style={style}/> }
        </div>
    )
}

export default ProjectItem;