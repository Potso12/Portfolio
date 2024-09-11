import React from 'react';
import './styles/Home.css'

interface HomeProps {
    isMobile: Boolean;
  }

const Home: React.FC<HomeProps> = ({isMobile}) => {
return (
    <div className="Homecontainer"
        style={{backgroundImage: 'url(\'/homePicture/mypic2.jpg\')'}}>
        <div className='welcomeTexts'>
            <h1>Welcome to my portfolio!</h1>
            <p>Get an idea of my software developping skills!</p>
            {!isMobile && <p>You might get to know me as a person too! :)</p>}
        </div>
    </div>
)}

export default Home