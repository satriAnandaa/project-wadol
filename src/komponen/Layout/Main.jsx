import React, { useState } from 'react';
import Sidebar from '../../komponen/Layout/Sidebar';
import Header from '../../komponen/Layout/Header';
import { Layout } from 'antd';
import Dashboard from '../../pages/Dashboard';

const { Content } = Layout;

const MainContent = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false); // Atur default ke false untuk sun mode

  const [isOpen, setIsOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`flex font-Montserrat bg-slate-700 ${darkMode ? "dark" : ""} flex`}>
      <Layout>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} isOpen={isOpen} />
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        {React.Children.map(children, (child) =>
          React.cloneElement(child, { isOpen, darkMode, toggleSidebar, toggleDarkMode })
        )}
      </Layout>
    </div>
  );
};

export default MainContent;
