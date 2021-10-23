import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Menu, Transition } from "@headlessui/react";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faHome,
  faList,
  faPlusCircle,
  faThLarge,
  faTrashAlt,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
 import "./UserSidebar.css";
import { faCommentDots } from "@fortawesome/free-regular-svg-icons";
 
import { Context } from './../../../context/Context';
import { useHistory } from 'react-router';

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));
const UserSidebar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const  {user,dispatch} = React.useContext(Context);
  const [isAdmin, setIsAdmin] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const history = useHistory();
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    fetch('https://go-green-recycling.herokuapp.com/isAdmin', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email: user.email })
    })
        .then(res => res.json())
        .then(data => setIsAdmin(data));
}, [user.email])

const handleLogout = () => {
  dispatch({ type: "LOGGEDOUT" });
  history.push("/");
};
 
  //make sidebar list by array....
  // const menuItems = [
  //   {
  //     name: "Home",
  //     exact: true,
  //     to: "/home",
  //     icons: faHome,
  //   },
  //   { name: "Add New", to: `/addProduct`, icons: faPlusCircle },
  //   {
  //     name: "Trash",
  //     exact: true,
  //     to: `/trash`,
  //     icons: faTrashAlt,
  //   },
  // ];
  return (
    <>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>

          <div className="d-flex justify-content-center ml-auto">
            <Menu as="div" className="relative  mr-5">
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
                            to="/profile"
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
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
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
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <hr className="bg-gray-400" />
        <List>
          <ListItem button>
            <ListItemIcon>
              <Link to="/home">
                <FontAwesomeIcon
                  icon={faHome}
                  style={{ fontSize: "20px", color: "teal" }}
                />
              </Link>
            </ListItemIcon>
            <Link to="/home">
              <ListItemText primary="Home" />
            </Link>
          </ListItem>
{
  isAdmin ? <>
  <ListItem button>
            <ListItemIcon>
              <Link to="/addNew">
                <FontAwesomeIcon
                  icon={faPlusCircle}
                  style={{ fontSize: "20px", color: "teal" }}
                  className="sidebarDesign"
                />
              </Link>
            </ListItemIcon>
            <Link to="/addNew">
              <ListItemText primary="Add New" className="sidebarDesign"/>{" "}
            </Link>
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <Link to="/all-products">
                <FontAwesomeIcon
                  icon={faThLarge}
                  style={{ fontSize: "20px", color: "teal" }}
                  className="sidebarDesign"
                />
              </Link>
            </ListItemIcon>
            <Link to="/all-products">
              <ListItemText primary="Products" className="sidebarDesign"/>{" "}
            </Link>
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <Link to="/orders">
                <FontAwesomeIcon
                  icon={faList}
                  style={{ fontSize: "20px", color: "teal" }}
                  className="sidebarDesign"
                />
              </Link>
            </ListItemIcon>
            <Link to="/orders">
              <ListItemText primary="Orders" className="sidebarDesign"/>{" "}
            </Link>
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <Link to="/admin">
                <FontAwesomeIcon
                  icon={faUserPlus}
                  style={{ fontSize: "20px", color: "teal" }}
                  className="sidebarDesign"
                />
              </Link>
            </ListItemIcon>
            <Link to="/admin">
              <ListItemText primary="Make Admin" className="sidebarDesign"/>{" "}
            </Link>
          </ListItem>

  </>:

  <>
  <ListItem button>
            <ListItemIcon>
              <Link to="/orderList">
                <FontAwesomeIcon
                  icon={faCartPlus}
                  style={{ fontSize: "20px", color: "teal" }}
                  className="sidebarDesign"
                />
              </Link>
            </ListItemIcon>
            <Link to="/orderList">
              <ListItemText primary="Order List" className="sidebarDesign"/>{" "}
            </Link>
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <Link to="/comments">
                <FontAwesomeIcon
                  icon={faCommentDots}
                  style={{ fontSize: "20px", color: "teal" }}
                  className="sidebarDesign"
                />
              </Link>
            </ListItemIcon>
            <Link to="/comments">
              <ListItemText primary="Review" className="sidebarDesign"/>{" "}
            </Link>
          </ListItem>
  
  </>
}
        </List>

        {/* Extra part when i use this menu item by map
        <hr className="bg-gray-400"/>
        <List>
          {menuItems.map((item, index) => (
            <ListItem button key={item.name}>
              <ListItemIcon>
                <Link to={item.to}>
                  <FontAwesomeIcon
                    icon={item.icons}
                    style={{ fontSize: "20px" }}
                    
                  />
                </Link>
              </ListItemIcon>
              <ListItemText primary={item.name}  />
            </ListItem>
          ))}
        </List> */}
      </Drawer>
    </>
  );
};

export default UserSidebar;
