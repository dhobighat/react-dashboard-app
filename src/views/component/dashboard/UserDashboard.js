import { dashboardApiCall } from '../../../service/DashboardService';

const UserDashboard = (props) => {
dashboardApiCall();
    return (
        <div>Dashboard</div>
    );
}

export default UserDashboard;