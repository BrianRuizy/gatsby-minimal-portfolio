import React from "react"
import { useStaticQuery, Link } from "gatsby"
import ThemeChanger from "../components/themeChanger"
import BottomDrawer from "../components/bottomDrawer"

import Navbar from "react-bootstrap/Navbar"
import NavItem from "react-bootstrap/NavItem"

import { FiHome } from "react-icons/fi"
import { CgProfile } from "react-icons/cg"

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


const tabs = [{
  route: "/",
  icon: FiHome,
  label: "Home"
},{
  route: "/about",
  icon: CgProfile,
  label: "About"
}]

const buttons = [{
  label: "Contact-drawer", 
  action: <BottomDrawer/>,
},{
  label: "Theme-changer", 
  action: <ThemeChanger/>,
}]

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
}));


function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

const Navigation = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          home {
            name
          }
        }
      }
    }
  `)
	return (
    <div>
      {/* top bar */}
      <HideOnScroll {...props}>
        <AppBar className="top-nav" color="transparent"> 
          <Toolbar>
            <IconButton edge="start" component={Link} to="#home" className={classes.menuButton} color="inherit" aria-label="menu">
              <img alt="BR LOGO" src="/favicons/apple-touch-icon.png" width="30" height="30"/>
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.title}>{ data.site.siteMetadata.home.name }</Typography>          
            <Button component={Link} to='/about' color="inherit">About</Button>
            <Button color="inherit">Contact</Button>
            <Button
                aria-label="Social links"
                aria-controls="socials-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                Socials
              </Button>
              <Menu
                id="socials-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>LinkedIn</MenuItem>
                <MenuItem onClick={handleClose}>GitHub</MenuItem>
                <MenuItem onClick={handleClose}>Instagram</MenuItem>
              </Menu>
              <ThemeChanger/>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      {/* bottom bar */}
      <Navbar className="bottom-nav" fixed="bottom" >
        <div className=" d-flex flex-row justify-content-around w-100">
          { tabs.map((tab, index) =>(
            <NavItem key={`tab-${index}`}>
              <Link to={tab.route} className="nav-link" activeClassName="active">
                <div className="row d-flex flex-column justify-content-center align-items-center">
                  {<tab.icon className="icon"/>}
                </div>
              </Link>
            </NavItem>
          ))}
          { buttons.map((tab, index) =>(
            <NavItem key={`tab-${index}`} >
              {tab.action}
            </NavItem>
          ))}
        </div>
      </Navbar>
    </div>
  )
};

export default Navigation