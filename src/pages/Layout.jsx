// Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import ContactBar from '../components/ContactBar';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Layout() {
  return (
    <div>
      <ContactBar/>
      <Header/>
      <main>
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
}

export default Layout;