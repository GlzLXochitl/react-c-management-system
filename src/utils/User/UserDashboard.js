import React from 'react';

import '../../components/Common/Header/header.css';
import '../../components/User/UserDashboard/userDashboard.css';   /* Aqui se encuentran los estilos de Jumb.jsx */
import '../../components/Common/CardSport/cardSport.css';
import '../../components/User/BtnApply/btnApply.css';
import '../../components/Common/Footer/footer.css';

import AppHeader from '../../components/Common/Header/Header.jsx';
import AppJumUser from '../../components/User/Jumb/Jumb.jsx';
import AppUserDashboard from '../../components/User/UserDashboard/UserDashboard.jsx';
import AppCardSport from '../../components/Common/CardSport/CardSport.jsx';
import AppBtnApply from '../../components/User/BtnApply/BtnApply.jsx';
import AppFooter from '../../components/Common/Footer/Footer.jsx';

function UserDashboard() {
  return (
      <>
        <AppHeader />
        <AppJumUser />
        <AppUserDashboard />
        <AppCardSport /> 
        <AppBtnApply />
        <AppFooter />
      </>
  );
}

export default UserDashboard;