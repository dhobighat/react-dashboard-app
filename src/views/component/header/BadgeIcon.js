import React from 'react';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import IconButton from '@material-ui/core/IconButton';
import { useAuth0 } from '@auth0/auth0-react';


const BadgeIcon = (props) => {

    const { isAuthenticated } = useAuth0();
    if(isAuthenticated){
        return (
            <div>
                <IconButton aria-label="New Messages" color="inherit">
                    <Badge badgeContent={props.messages} color="secondary">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <IconButton aria-label="New Notifications" color="inherit">
                    <Badge badgeContent={props.notifications} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
            </div>
        );
    }
    else{
        return <div></div>;
    }
}

export default BadgeIcon;