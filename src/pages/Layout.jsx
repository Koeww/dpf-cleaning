// Layout.js
import React from 'react';
import {Outlet} from 'react-router-dom';
import ContactBar from '../components/ContactBar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ChangeThemeButton from '../components/ChangeThemeButton';

function Layout() {
  return (
    <div>
      <ContactBar />
      <Header />
      <ChangeThemeButton />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;