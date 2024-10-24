import React from 'react';

import '../../components/Common/Header/header.css';
import '../../components/Admin/FormCreateCourse/formCreateCourse.css';
import '../../components/Common/Footer/footer.css';

import AppHeader from '../../components/Common/Header/Header.jsx';
import AppFormCreateCourse from '../../components/Admin/FormCreateCourse/FormCreateCourse.jsx';
import AppFooter from '../../components/Common/Footer/Footer.jsx';

function FormCreateCourse() {
  return (
      <>
        <AppHeader />
        <AppFormCreateCourse/>  
        <AppFooter />
      </>
  );
}

export default FormCreateCourse;