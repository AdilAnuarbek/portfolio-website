import './Header.scss';

function Header() {
    return (
        <nav>
            <div className='container-header'>
                <div className='name-header'>
                    <a className='main-link' href="/">ADIL ANUARBEK</a>
                </div>
                <div className='resume'>
                    <a className='resume-link' href="/resume">Resume</a>
                </div>
                <div className='contacts'>
                    <a className='contacts-link' href="/contact">Contacts</a>
                </div>
            </div>
        </nav>
    );
}

export default Header;