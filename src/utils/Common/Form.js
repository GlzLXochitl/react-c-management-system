import React from 'react';

import '../../components/Common/Header/header.css';
import '../../components/Views/Form/form.css';
import '../../components/Common/Footer/footer.css';

import AppHeader from '../../components/Common/Header/Header.jsx';
import AppForm from '../../components/Views/Form/Form.jsx';
import AppFooter from '../../components/Common/Footer/Footer.jsx';

function Form() {
  return (
      <>
        <AppHeader />
        <AppForm/>  
        <AppFooter />
      </>
  );
}

export default Form;