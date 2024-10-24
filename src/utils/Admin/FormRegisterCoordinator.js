import React from 'react';

import '../../components/Common/Header/header.css';
import '../../components/Admin/FormRegisterCoordinator/formRegisterCoordinator.css';
import '../../components/Common/Footer/footer.css';

import AppHeader from '../../components/Common/Header/Header.jsx';
import AppFormRegisterCoordinator from '../../components/Admin/FormRegisterCoordinator/FormRegisterCoordinator.jsx';
import AppFooter from '../../components/Common/Footer/Footer.jsx';

function FormRegisterCoordinator() {
  return (
      <>
        <AppHeader />
        <AppFormRegisterCoordinator/>  
        <AppFooter />
      </>
  );
}

export default FormRegisterCoordinator;