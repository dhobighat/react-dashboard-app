import React from 'react';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import IconButton from '@material-ui/core/IconButton';
import { useAuth0 } from '@auth0/auth0-react';
import { dashboardApiCall } from '../../../service/DashboardService';
import axios from 'axios';


const UserDashboard = (props) => {
dashboardApiCall();
    return (
        <div>Dashboard</div>
    );
}

export default UserDashboard;