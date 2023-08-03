// Import Assets
import profile from '../assets/profile2.jpg';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Fattiya Hussain" />

            <div className='header__content'>
                <h1>Hi, I'm Fattiya Hussain</h1>
                <p>Solidity Developer</p>
                <p>React enthusiast</p>
                <a href="mailto:fhussainpardesi@gmail.com" className='button'>Get In Touch</a>
            </div>
        </section>
    );
}

export default Header;