import React from 'react';
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { useAuth0 } from '@auth0/auth0-react';


const UserIcon = () => {

    const { isAuthenticated,user, loginWithPopup,logout,} = useAuth0();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const isUserIconClicked = Boolean(anchorEl);
    const menuId = 'primary-search-account-menu';



    const handleUserIconMenuClose = () => {
        setAnchorEl(null);
    };

    const handleUserIconClicked = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isUserIconClicked}
        onClose={handleUserIconMenuClose}
      >
        <MenuItem onClick={handleUserIconMenuClose}>My Account Settings</MenuItem>
        <MenuItem onClick={() => logout({ returnTo: window.location.origin })}>Logout</MenuItem>
      </Menu>
    );

    if(isAuthenticated){
        return (
            <div>
                <IconButton
                    edge="end"
                    aria-label={user.name}
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleUserIconClicked}
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                {renderMenu}
            </div>
        );
    }
    else{
        return <Button color="inherit" onClick={loginWithPopup}>Login</Button>
    }
}

export default UserIcon;