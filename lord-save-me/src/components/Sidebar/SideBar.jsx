import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaLock, FaRupeeSign, FaMoneyBill, FaUser } from "react-icons/fa";
import { HiDocumentArrowUp } from "react-icons/hi2";
import { AiOutlineUserAdd } from "react-icons/ai";
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch, BiCog } from "react-icons/bi";
import { IoInformationCircle } from "react-icons/io5";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import './SideBar.css';
// import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
// import NavBar from "../NavBar/NavBar";

const routes = [
  {
    path: "/sidebar/dashboard",
    name: "Dashboard",
    icon: <FaHome />,
  },
  {
    path: "/sidebar/my-info",
    name: "My Information",
    icon: <IoInformationCircle />,
    exact: true,
    subRoutes: [
      {
        path: "/sidebar/my-info/personal-info",
        name: "Personal ",
        icon: <FaUser />,
      },
      {
        path: "/sidebar/my-info/loan-info",
        name: "Loan",
        icon: <FaRupeeSign />,
      },
    ],
  },
  {
    path: "/sidebar/kyc-docs",
    name: "KYC Documents",
    icon: <HiDocumentArrowUp />,
  },
  {
    path: "/sidebar/add-inquiry",
    name: "Add Inquiry",
    icon: <AiOutlineUserAdd />,
  },
  {
    path: "/sidebar/check-status",
    name: "Check Status",
    icon: <MdMessage />,
  },
  {
    path: "/sidebar/analytics",
    name: "Analytics",
    icon: <BiAnalyse />,
  },

  {
    path: "/sidebar/settings",
    name: "Settings",
    icon: <BiCog />,
    exact: true,
    subRoutes: [
      {
        path: "/sidebar/settings/profile",
        name: "Profile ",
        icon: <FaUser />,
      },
      {
        path: "/sidebar/settings/2fa",
        name: "2FA",
        icon: <FaLock />,
      },
      {
        path: "/sidebar/settings/billing",
        name: "Billing",
        icon: <FaMoneyBill />,
      },
    ],
  },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      {/* SIDEBAR */}
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",

            transition: {
              duration: 0.8,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  USER PANEL
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          <div className="search">
            <div className="search_icon">
              <BiSearch />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  type="text"
                  placeholder="Search"
                />
              )}
            </AnimatePresence>
          </div>
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>
        <main>{children}</main>

      </div>
    </>
  );
};

export default SideBar;
