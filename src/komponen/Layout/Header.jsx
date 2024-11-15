import { FaMoon, FaSun, FaUser } from "react-icons/fa";
import { Layout, Button, Typography, Space } from "antd";
import { useLocation } from "react-router-dom";
const { Header: AntHeader } = Layout;
const { Title } = Typography;

const Header = ({ darkMode, toggleDarkMode, isOpen, isLoggedIn }) => {
  const location = useLocation();
  const pageTitle = location.pathname.split('/').pop() || 'Dashboard';

  return (
    <AntHeader className={`flex items-center justify-between px-7 ${darkMode ? 'bg-slate-700' : 'bg-white'} ${isOpen ? "md:ml-44" : "ml-16"} transition-all duration-300`}>
      <Title level={3} className={`m-0 ${darkMode ? 'text-gray-300' : ''}`}>
        {pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1)}
      </Title>
      <Space size="large">
        <div className="flex items-center gap-3">
          <Button
            type="default"
            shape="circle"
            icon={darkMode ? <FaSun className="text-2xl" /> : <FaMoon className="text-2xl" />}
            onClick={toggleDarkMode}
            className={`${darkMode ? 'bg-slate-600 text-slate-300' : 'bg-slate-200'}`}
          />
          <div className="flex items-center gap-3">
            <FaUser className={`rounded-md p-2 text-4xl ${darkMode ? 'bg-slate-600 text-slate-300' : 'bg-slate-200'}`} />
            <Typography.Text className={`font-medium ${darkMode ? 'text-slate-300' : ''}`}>
              {isLoggedIn ? "Satria" : "Guest"}
            </Typography.Text>
          </div>
        </div>
      </Space>
    </AntHeader>
  );
};

export default Header;
