import React from "react";
import Logo from "../../../images/logo.png";

import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { Context } from "./../../../context/Context";
import "./NavbarComponent.css";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const NavbarComponent = () => {
  const { user, dispatch } = React.useContext(Context);
  const history = useHistory();

  const handleLogout = () => {
    dispatch({ type: "LOGGEDOUT" });
    history.push("/");
  };
  return (
    <>
      <Navbar bg="gray-800" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#home">
            <div className="row">
              <div className="col-md-6">
                <Link to="/home">
                  <img className="w-11" src={Logo} />
                </Link>
              </div>
              <div className="col-md-6">
                <Link to="/home">
                  <h1 className="gogreen-title">𝙂𝙤𝙂𝙧𝙚𝙚𝙣</h1>
                </Link>
                <p className="text-muted recycle-title">RECYCLING</p>
              </div>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link className="nav-size text-uppercase bg-gray-900 m-3 text-white">
                <Link to="/home" className="nav-size">
                  {" "}
                  Home{" "}
                </Link>
              </Nav.Link>
              <Link to="/services">
                <Nav.Link className="nav-size text-uppercase m-3 text-white hover:bg-gray-900">
                  <Link to="/services" className="nav-size">
                    {" "}
                    Services{" "}
                  </Link>
                </Nav.Link>
              </Link>
              <Nav.Link
                href="#home"
                className="nav-size text-uppercase m-3 text-white hover:bg-gray-900"
              >
                <Link to="/blog" className="nav-size">
                  {" "}
                  Blog{" "}
                </Link>
              </Nav.Link>
              <Nav.Link className="nav-size text-uppercase m-3 text-white hover:bg-gray-900">
                <Link to="/shop" className="nav-size">
                  {" "}
                  Shop{" "}
                </Link>
              </Nav.Link>{" "}
              <Nav.Link className=" text-uppercase m-3 text-white hover:bg-gray-900">
                <Link to="/dashboard" className="nav-size">
                  {" "}
                  Dashboard{" "}
                </Link>
              </Nav.Link>{" "}
              <Nav.Link className="nav-size text-uppercase m-3 text-white hover:bg-gray-900">
                <Link to="/contact" className="nav-size">
                  {" "}
                  Contacts{" "}
                </Link>
              </Nav.Link>
              {/* <Nav.Link className="nav-size text-uppercase m-3 text-white hover:bg-gray-900">
                <Link to="/cartPreview" className="nav-size">
                  {" "}
                  <Badge color="primary">
                    <ShoppingCartOutlined/>
                  </Badge>
                </Link>
              </Nav.Link> */}
            </Nav>
            <Menu as="div" className="ml-3 relative m-3 z-10">
              {({ open }) => (
                <>
                  <div>
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src={user?.photo}
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    show={open}
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items
                      static
                      className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    >
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to={user ? "/profile" : "/login"}
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Your Profile
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700 cursor-pointer"
                            )}
                            onClick={handleLogout}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </>
              )}
            </Menu>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
