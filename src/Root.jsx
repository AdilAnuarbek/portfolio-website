import Header from './Header.jsx';
import Footer from './Footer.jsx';
import { Outlet } from 'react-router-dom';
import './Root.scss';
function Root() { 
    return (
        <>
            <Header />
            <div className='details'>
                <Outlet />
            </div>
            <Footer />
        </>
    );
}

export default Root;