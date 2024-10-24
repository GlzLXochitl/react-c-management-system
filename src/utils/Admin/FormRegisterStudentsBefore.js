import React from 'react';

import '../../components/Common/Header/header.css';
import '../../components/Admin/FormRegisterStudentsBefore/formRegisterStudentsBefore.css';
import '../../components/Common/Footer/footer.css';

import AppHeader from '../../components/Common/Header/Header.jsx';
import AppFormRegisterStudentsBefore from '../../components/Admin/FormRegisterStudentsBefore/FormRegisterStudentsBefore.jsx';
import AppFooter from '../../components/Common/Footer/Footer.jsx';

function FormRegisterStudentsBefore() {
  return (
      <>
        <AppHeader/>
        <AppFormRegisterStudentsBefore /> 
        <AppFooter />
      </>
  );
}

export default FormRegisterStudentsBefore;