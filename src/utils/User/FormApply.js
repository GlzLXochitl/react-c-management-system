import React from 'react';

import '../../components/Common/Header/header.css';
import '../../components/User/FormApply/formApply.css';
import '../../components/Common/Footer/footer.css';

import AppHeader from '../../components/Common/Header/Header.jsx';
import AppFormApply from '../../components/User/FormApply/FormApply.jsx';
import AppFooter from '../../components/Common/Footer/Footer.jsx';

function FormApply() {
  return (
      <>
        <AppHeader />
        <AppFormApply/>  
        <AppFooter />
      </>
  );
}

export default FormApply;