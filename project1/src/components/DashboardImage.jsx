import React from 'react';
import dashboardImage from './dashboardImage.jpg'; // Import your image file

const DashboardImage = () => {
  return (
    <div>
      <img src={dashboardImage} alt="Dashboard" style={{ width: '1295px', height: '750px',marginLeft: '-1.4cqmax',marginTop: '-2cqmax' }} />
    </div>
  );
}

export default DashboardImage;