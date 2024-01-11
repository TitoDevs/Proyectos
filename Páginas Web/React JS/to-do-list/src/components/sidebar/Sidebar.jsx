import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaReact } from "react-icons/fa";
import { DiJava } from "react-icons/di";
import { MdKeyboardArrowDown } from "react-icons/md";
import "./sidebar.scss";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [subMenuOpen, setSubMenuOpen] = useState({});

  const toggle = () => {
    setIsOpen(!isOpen);
    setSubMenuOpen({}); // Cierra todos los submenús al hacer clic en el enlace principal
  };

  const toggleSubMenu = (index) => {
    setSubMenuOpen((prevSubMenuOpen) => ({
      ...prevSubMenuOpen,
      [index]: !prevSubMenuOpen[index],
    }));
  };

  const menuItem = [
    {
      path: "/java",
      name: "Java",
      icon: <DiJava />,
      subMenu: [
        {
          path: "/java/introduccion",
          name: "Introducción",
        },
        {
          path: "/java/configuracion",
          name: "Configuración del entorno",
        },
        {
          path: "/java/fundamentos",
          name: "Fundamentos",
        },
        {
          path: "/java/poo",
          name: "Programación Orientada a Objetos",
        },
        {
          path: "/java/java-avanzado",
          name: "Java Avanzado",
        },
        {
          path: "/java/primer-programa",
          name: "Primer Programa Completo",
        },
      ],
    },
    {
      path: "/web",
      name: "Web",
      icon: <FaReact />,
      subMenu: [
        {
          path: "/web/subitem1",
          name: "Subitem 1",
        },
        {
          path: "/web/subitem2",
          name: "Subitem 2",
        },
      ],
    },
    {
      path: "/android",
      name: "Android",
      icon: <i className="bi bi-android"></i>,
      subMenu: [
        {
          path: "/android/subitem1",
          name: "Subitem 1",
        },
        {
          path: "/android/subitem2",
          name: "Subitem 2",
        },
      ],
    },
  ];

  return (
    <div className="container">
      <div style={{ width: isOpen ? "250px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Menu
          </h1>
          <div
            style={{ marginLeft: isOpen ? "50px" : "0px" }}
            className="bars"
            onClick={toggle}
          >
            <i className="bi bi-list"></i>
          </div>
        </div>
        {menuItem.map((item, index) => (
          <div key={index}>
            <NavLink
              to={item.path}
              className="link"
              activeclassname="active"
              onClick={() => item.subMenu && toggleSubMenu(index, subMenuOpen)}
            >
              <div className="icon" title={!isOpen ? item.name : ""}>
                {item.icon}
              </div>
              <div
                style={{
                  opacity: isOpen ? 1 : 0,
                  visibility: isOpen ? "visible" : "hidden",
                  transition: "opacity 0.3s, visibility 0.3s",
                }}
                className="link_text"
              >
                {item.name}
              </div>
              <div
                style={{
                  display: isOpen ? "flex" : "none",
                  justifyContent: "flex-end",
                  width: "100%",
                }}
              >
                {item.subMenu && (
                  <MdKeyboardArrowDown
                    className={subMenuOpen[index] ? "arrow-open" : "arrow"}
                    onClick={toggleSubMenu}
                  />
                )}
              </div>
            </NavLink>
            {item.subMenu && (
              <div
                style={{
                  display: isOpen && subMenuOpen[index] ? "block" : "none",
                }}
                className="subMenu"
              >
                {item.subMenu.map((subItem, subIndex) => (
                  <NavLink
                    to={subItem.path}
                    key={subIndex}
                    className="link"
                    activeclassname="active"
                  >
                    <div className="link_text">{subItem.name}</div>
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        ))}
        <div className="bottom_section">
          <div className="separator"></div>
          <NavLink to="/profile" className="link" activeclassname="active">
            <div className="icon">
              <i className="bi bi-person-circle"></i>
            </div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              Profile
            </div>
          </NavLink>
          <NavLink to="/settings" className="link" activeclassname="active">
            <div className="icon">
              <i className="bi bi-gear"></i>
            </div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              Settings
            </div>
          </NavLink>
        </div>
      </div>
      <main
        style={{
          width: isOpen ? "calc(100% - 300px)" : "calc(100% - 100px)",
          transition: "all 0.5s",
        }}
      >
        {children}
      </main>
    </div>
  );
};

export default Sidebar;
