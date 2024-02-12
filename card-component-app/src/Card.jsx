import profilePic from './assets/1.png'

function Card(){
    // Class is a reserved keyword, so use 'className'
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture" />
            <h2 className="card-title">Ahmed</h2>
            <p className="card-text">I am a Computer Science Student and sometimes play video games</p>
        </div>
    );
}

export default Card