import react from 'react';
import Header from '../Header/header';
import DashboardView from './dashboardView';

function Dashboard() {
    return (
        <div className='bg-gray-200 h-screen'>
            <Header />
            <DashboardView />

        </div>
    );
}

export default Dashboard;
