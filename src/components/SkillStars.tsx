import './styles/SkillStars.css'

interface SkillStarsProps {
  stars: number;
}

const SkillStars: React.FC<SkillStarsProps> = ({stars}) => {

  const Stars = [];

  let i: number = 0
  while(i < stars){
    Stars.push(<span key={i} className="star">&#9733;</span>)
    i += 1;
  }

  return (
    <div className={'skillContainer-' + stars}>
      {Stars}
    </div>
)}

export default SkillStars