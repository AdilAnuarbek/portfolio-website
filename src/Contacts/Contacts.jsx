import './Contacts.scss';

const Contacts = () => {
    const contacts = {
        telegram: 'https://t.me/AdilAnuarbek',
        email: 'adil.anuarbek@nu.edu.kz',
        linkedin: 'https://www.linkedin.com/in/adil-anuarbek/',
        github: 'https://github.com/AdilAnuarbek',
    }
    return (
    <div id="contacts">
        <div id='contacts-text'>
            <h1>Contacts</h1>
            <p>Telegram: <a href={contacts.telegram}>{contacts.telegram}</a></p>
            <p>Email: {contacts.email}</p>
            <p>LinkedIn: <a href={contacts.linkedin}>{contacts.linkedin}</a></p>
            <p>GitHub: <a href={contacts.github}>{contacts.github}</a></p>
        </div>
    </div>
    );
};

export default Contacts;