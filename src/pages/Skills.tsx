import { Skill } from "../types/types"
import { Tooltip } from "react-tooltip";
import './styles/Skill.css'
import SkillStars from "../components/SkillStars";

interface SkillsProps {
    skillsData: Skill[]
    isMobile: Boolean
  }

const Skills: React.FC<SkillsProps> = ({skillsData, isMobile}) => {

return (
    <div className="skillPage">
        <h1>How confident would I feel in my abilities with this tool?</h1>
        <h2>{isMobile ? "Click for name and justification" : "Hower for name and justification"}</h2>
        <div className="skillsContainer">
            {skillsData.map((skill, index) => (
            <div 
            className="skillContainer" 
            key={index}>
                {/*eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a data-tooltip-id={"tooltip-" + skill.name}>
                    <img src={skill.logoUrl} alt={skill.name}/>
                    <SkillStars stars={skill.StarAmount}/>
                </a>
                <Tooltip id={"tooltip-" + skill.name} className='skill-info'>
                    <h1>{skill.name}</h1>
                    <p>{skill.info}</p>
                </Tooltip>
            </div>
        ))}
        </div>
    </div>

)}

export default Skills