import './styles/Navigationbar.css'


interface WebNavigationbarProps {
    scrollToSection: (sectionName: string) => void
  }

const WebNavigationbar: React.FC<WebNavigationbarProps> = ({scrollToSection}) => {


  return (
    <div className='navBar'>
        <nav className='nav'>
            <ul className='links'>
                <li>
                    <a href="#Home" onClick={() => scrollToSection('Home')}>Start</a>
                </li>
                <li>
                    <a href="#About" onClick={() => scrollToSection('About')}>Who am I</a>
                </li>

                <li>
                    <a href="#Projects" onClick={() => scrollToSection('Projects')}>Projects</a>
                </li>
                <li>
                    <a href="#Skills" onClick={() => scrollToSection('Skills')}>My Skills</a>
                </li>
                <li>
                    <a href="#Summary" onClick={() => scrollToSection('Summary')}>Summary</a>
                </li>
                <li>
                    <a href="#Contact" onClick={() => scrollToSection('Contact')}>Contact me</a>
                </li>
            </ul>
        </nav>
    </div>)}

export default WebNavigationbar