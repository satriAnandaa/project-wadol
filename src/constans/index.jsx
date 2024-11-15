import {
    FaHome,
    FaLayerGroup,
    FaUser,
    FaCog,
    FaEnvelope,
    FaChartLine,
    FaSignOutAlt,
    FaHistory,
    FaBook
  } from "react-icons/fa";
  
  import {
    CiMoneyCheck1,
    CiMoneyBill,
    CiUser,
    CiShoppingCart,
  } from "react-icons/ci";
  
  import user01 from "../assets/user01.png";
  import user02 from "../assets/user02.png";
  import user03 from "../assets/user03.png";
  import user04 from "../assets/user04.png";
  
  // Menu Items
  export const menuItems = [
    {
      link: "dashboard",
      icon: FaLayerGroup,
      name: "Dashboard",
    },
    {
      link: "test",
      icon: FaHome,
      name: "Home",
    },
    {
      icon: FaUser,
      name: "Profile",
    },
    {
      icon: FaEnvelope,
      name: "Messages",
    },
    {
      link: "booking",
      icon: FaBook,
      name: "PageUts",
    },
    {
      icon: FaHistory,
      name: "History",
    },
    {
      icon: FaCog,
      name: "Settings",
    },
    {
      icon: FaSignOutAlt,
      name: "Logout",
      isLogout: true,
    },
  ];
  
  // Card Items
  export const cardItems = [
    {
      title: "Total Earning",
      value: "$2200.00",
      icon: (
        <CiMoneyCheck1 className="rounded-full bg-cyan-500 p-2 text-4xl text-white" />
      ),
    },
    {
      title: "Total Expenses",
      value: "$1200.00",
      icon: (
        <CiMoneyBill className="rounded-full bg-cyan-500 p-2 text-4xl text-white" />
      ),
    },
    {
      title: "New Users",
      value: "150",
      icon: (
        <CiUser className="rounded-full bg-cyan-500 p-2 text-4xl text-white" />
      ),
    },
    {
      title: "Total Sales",
      value: "320",
      icon: (
        <CiShoppingCart className="rounded-full bg-cyan-500 p-2 text-4xl text-white" />
      ),
    },
  ];
  
  // Table Data
  export const tableData = [
    {
      id: 1,
      receiptName: "DolphinSunrise",
      Harga: "$500",
      Deskripsi: "Tur mengamati lumba-lumba di pagi hari dengan pemandu berpengalaman.",
    },
    {
      id: 2,
      receiptName: "SeaDolphin",
      Harga: "$200",
      Deskripsi: "Kesempatan berenang bersama lumba-lumba di habitat alami mereka.",
    },
    {
      id: 3,
      receiptName: "WatchingDol",
      Harga: "$150",
      Deskripsi: "Tur lumba-lumba saat matahari terbenam, dilengkapi dengan minuman ringan.",
    },
    {
      id: 4,
      receiptName: "LetsDolphin",
      Harga: "$300",
      Deskripsi: "Snorkeling bersama lumba-lumba dengan perlengkapan yang disediakan.",
    },
  ];
  
  // Recent Activities
  export const recentActivities = [
    {
      id: 1,
      name: "Wipa",
      img: user01,
      activity: "Logged In",
    },
    {
      id: 2,
      name: "Yukpus",
      img: user02,
      activity: "Made a Purchase",
    },
    {
      id: 3,
      name: "Wisda",
      img: user03,
      activity: "Updated Profile",
    },
    {
      id: 4,
      name: "Anggita",
      img: user04,
      activity: "Logged Out",
    },
  ];
  
  // Chart Data
  export const monthData = [
    {
      name: "Jan",
      asing: 4000,
      lokal: 2400,
    },
    {
      name: "Feb",
      asing: 3000,
      lokal: 1398,
    },
    {
      name: "Mar",
      asing: 2000,
      lokal: 9800,
    },
    {
      name: "Apr",
      asing: 2780,
      lokal: 3908,
    },
    {
      name: "May",
      asing: 1890,
      lokal: 4800,
    },
    {
      name: "Jun",
      asing: 2390,
      lokal: 3800,
    },
    {
      name: "Jul",
      asing: 3490,
      lokal: 4300,
    },
  ];
  
  export const chartData01 = [
    {
      name: "Electronics",
      value: 400,
    },
    {
      name: "Clothing",
      value: 300,
    },
    {
      name: "Groceries",
      value: 300,
    },
    {
      name: "Furniture",
      value: 200,
    },
  ];
  
  export const chartData02 = [
    {
      name: "Laptops",
      value: 100,
    },
    {
      name: "Smartphones",
      value: 300,
    },
    {
      name: "Men's Wear",
      value: 100,
    },
    {
      name: "Women's Wear",
      value: 80,
    },
  ];
  