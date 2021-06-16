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

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import ChatRoundedIcon from '@material-ui/icons/ChatRounded';
import Brightness4RoundedIcon from '@material-ui/icons/Brightness4Rounded';


// const tabs = [{
//   route: "/",
//   icon: FiHome,
//   label: "Home"
// },{
//   route: "/about",
//   icon: CgProfile,
//   label: "About"
// }]

// const buttons = [{
//   label: "Contact-drawer", 
//   action: <BottomDrawer/>,
// },{
//   label: "Theme-changer", 
//   action: <ThemeChanger/>,
// }]

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
  topNav: {
    background: 'var(--translucent)' ,
    color: 'var(--primary-text-color)',
    '@media (max-width:768px)': {
      visibility: 'hidden'
    }
  },

  bottomNav: {
    visibility: 'hidden',
    background: 'var(--bottom-nav-bg)' ,
    '@media (max-width:768px)': {
      visibility: 'visible'
    },
  },
  bottomNavAction: {
    '&.MuiBottomNavigationAction-root': {
      color: 'var(--secondary-color)'
    },
    '&.MuiBottomNavigationAction-root.Mui-selected': {
      color: 'var(--primary-text-color)',
    }
  }
}
));


function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

function HideOnScrollBottom(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });
  return (
    <Slide appear={false} direction="up" in={!trigger}>
      {children}
    </Slide>
  )
}


const Navigation = (props) => {
  const classes = useStyles();
  const open = Boolean(anchorEl);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [value, setValue] = React.useState('recents');

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
    
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
        <AppBar className={classes.topNav}> 
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
      {/* <Navbar className="bottom-nav" fixed="bottom" >
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
      </Navbar> */}
      <HideOnScrollBottom {...props} >
        <AppBar position="fixed" color="primary" style={{top: "auto", bottom: 0}} className={classes.bottomAppBar}>
          <BottomNavigation value={value} onChange={handleChange} className={classes.bottomNav} >
            <BottomNavigationAction label="Home" value="home" icon={<HomeRoundedIcon />}	 className={classes.bottomNavAction}/>
            <BottomNavigationAction label="Profile" value="profile" icon={<AccountCircleRoundedIcon /> } className={classes.bottomNavAction}/>
            <BottomNavigationAction label="Contact" value="contact" icon={<ChatRoundedIcon />} className={classes.bottomNavAction}/>
            <BottomNavigationAction label="Theme" value="theme" icon={<Brightness4RoundedIcon />} className={classes.bottomNavAction}/>
          </BottomNavigation>
        </AppBar>
      </HideOnScrollBottom>
    </div>
  )
};

export default Navigation