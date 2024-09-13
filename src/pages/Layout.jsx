// Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import ContactBar from '../components/ContactBar';
import Header from '../components/Header';

function Layout() {
  return (
    <div>
      <ContactBar/>
      <Header/>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;