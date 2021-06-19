import React from "react"
import { useStaticQuery, Link } from "gatsby"
import ThemeChanger from "../components/themeChanger"
import ContactForm from "./contactForm"

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
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import ChatRoundedIcon from '@material-ui/icons/ChatRounded';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';


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
  themeChanger: {
    fontSize: 'initial',
  },
  bottomNav: {
    visibility: 'hidden',
    height: '60px',
    background: 'var(--bottom-nav-bg)' ,
    '@media (max-width:768px)': {
      visibility: 'visible'
    },
  },
  bottomNavAction: {
    '&.MuiBottomNavigationAction-root': {
      color: 'var(--secondary-color)',
      padding: 0
    },
    '&.MuiBottomNavigationAction-root.Mui-selected': {
      color: 'var(--primary-text-color)',
    },
    '& svg.MuiSvgIcon-root': {
      fontSize: '1.75rem'
    }
  }
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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [value, setValue] = React.useState('recents');
  const open = Boolean(anchorEl);


  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const form = () => (
   <ContactForm/>
  );

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
            <Button color="inherit" onClick={toggleDrawer('bottom', true)}>Contact</Button>
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
              <IconButton className={classes.themeChanger}><ThemeChanger/></IconButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      {/* bottom bar */}
      <HideOnScrollBottom {...props} >
        <AppBar position="fixed" color="primary" style={{top: "auto", bottom: 0}} className={classes.bottomNav}>
          <BottomNavigation value={value} onChange={handleChange} className={classes.bottomNav} >
            <BottomNavigationAction icon={<HomeRoundedIcon />} value="home" className={classes.bottomNavAction} component={Link} to='/'/>
            <BottomNavigationAction icon={<AccountCircleRoundedIcon /> }  value="about" className={classes.bottomNavAction} component={Link} to='/about/'/>
            <BottomNavigationAction icon={<ChatRoundedIcon />} className={classes.bottomNavAction} onClick={toggleDrawer('bottom', true)} style={{color: 'var(--secondary-color'}}/>
            <BottomNavigationAction icon={<ThemeChanger/>} className={classes.bottomNavAction}  />
          </BottomNavigation>
        </AppBar>
      </HideOnScrollBottom>

      <SwipeableDrawer
        anchor={'bottom'}
        open={state['bottom']}
        onClose={toggleDrawer('bottom', false)}
        onOpen={toggleDrawer('bottom', true)}
      >
        {form()}
      </SwipeableDrawer>
    </div>
  )
};

export default Navigation