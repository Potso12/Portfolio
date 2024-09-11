import './styles/SkillInformation.css'



const SkillInformation = (name: string, starAmount :number, info: string ) => {

  return (
    <div className='skillContainer'>
        <strong>{name}</strong>
        <p>Skill level {starAmount}</p>
        <p>{info}</p>
    </div>
)}

export default SkillInformation