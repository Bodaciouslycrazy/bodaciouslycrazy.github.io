
import { useMediaQuery } from "react-responsive";

// Pass in property rightAlign=true or false
function ProjectItem(props){
    const isMobile = useMediaQuery({
        query: "(max-width: 45em)"
    });

    const style = {
        flexDirection: (isMobile ? "column" : (props.rightAlign ? "row-reverse" : "row")),
        minHeight: isMobile ? "0px" : "400px"
    }

    const imageStyle = {
        backgroundImage: `url(${props.img})`,
        minHeight: isMobile ? "200px" : "0px"
    }



    return (
        <div className="projectContainer" style={style}>
            <div className="projectIcon" style={imageStyle}/>
            <div className="projectContent">
                {props.children}
            </div>
        </div>
    )
}

export default ProjectItem;