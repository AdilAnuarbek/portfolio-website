import pfp from '../assets/ava.jpg';
import './Card.scss';

function Card() {
    return (
        <div className="card">
            <img src={pfp} alt="profile picture" className='pfp' />
            <h2 className='card-title'>Hello, I'm  <br />  Adil Anuarbek</h2>
            <p className='card-text'>
                I am a web-developer that studies at Nazarbayev University <br />
                I love learning new things and connecting with people that share my interests. <br />
                I study Japanese, read fiction and self-help books, and do web-dev.
            </p>
        </div>
    );
}

export default Card;