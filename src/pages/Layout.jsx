// Layout.js
import {useState} from 'react';
import {Outlet} from 'react-router-dom';
import ContactBar from '../components/ContactBar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ChangeThemeButton from '../components/ChangeThemeButton';
import AgreementButton from '../components/AgreementButton';
import Overlay from '../components/Overlay';

const Layout = () => {
    const [isVisibleOverlay, setIsVisibleOverlay] = useState(false);

    return (
        <div>
            <ContactBar />
            <Header />
            <ChangeThemeButton />
            <AgreementButton setIsVisibleOverlay={setIsVisibleOverlay}/>
            {isVisibleOverlay && <Overlay setIsVisibleOverlay={setIsVisibleOverlay} />}
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default Layout;