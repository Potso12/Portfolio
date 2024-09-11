import './styles/Contact.css'


const Contact = () => {
return (
    <div className="ContactDiv">
        <div>
            <h2>I might be the developer you are looking for!</h2>
        </div>
        <div className='profilesContainer'>
            <div className='PhoneAndEmailContainer'>
                <h4>Otso.tikkanen@hotmail.com</h4>
                <h4>0440909050</h4>
            </div>
            <div className='logoContainer'>
                <a href="https://github.com/Potso12">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" 
                        alt="error"/>
                </a>
                <p>Click me!</p>
            </div>
            <div>
                <a href='https://www.linkedin.com/in/otso-tikkanen-6022872a7'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" 
                    alt="error"/>
                </a>
                <p>Click me!</p>
            </div>
            <div>
                <img src="https://static.vecteezy.com/system/resources/previews/018/930/486/original/telegram-logo-telegram-icon-transparent-free-png.png" 
                    alt="error"/>
                <p>@Potso12</p>
            </div>
        </div>
    </div>
)}

export default Contact