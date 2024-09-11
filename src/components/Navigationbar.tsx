import './styles/Navigationbar.css'
import { scroller } from 'react-scroll'; 
import MobileNavigaitonBar from './MobileNavigationbar';
import WebNavigationbar from './WebNavigaitonBar';
import './styles/Navigationbar.css'

interface NavigationbarProps {
    isMobile: Boolean;
  }

const Navigationbar: React.FC<NavigationbarProps> = ({isMobile}) => {


    const scrollToSection = ( sectionName: string) => {
        scroller.scrollTo(sectionName, {
          spy: true, smooth: 'easeInOutQuart', duration: 500, offset: -100, 
        });
    };

  return (
    <div className='navigationBar'>
        {isMobile ? 
        <MobileNavigaitonBar scrollToSection={scrollToSection}/> : 
        <WebNavigationbar scrollToSection={scrollToSection}/>}
    </div>
)}

export default Navigationbar