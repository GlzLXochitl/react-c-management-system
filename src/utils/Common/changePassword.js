import React from 'react';

//import '../../components/Common/Header/header.css';
import '../../components/Views/ChangePassword/changePassword.css';
import '../../components/Common/Footer/footer.css';

//import AppHeader from '../../components/Common/Header/Header.jsx';
import AppChangePassword from '../../components/Views/ChangePassword/ChangePassword.jsx';
import AppFooter from '../../components/Common/Footer/Footer.jsx';

function ChangePassword() {
  return (
    <>
      <AppChangePassword /> 
      <AppFooter />
    </>
  );
}

export default ChangePassword;