//import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function BtnSearch() {

  /*
  const [ userType, setUserType ] = useState(() => {
    const storedUserType = localStorage.getItem('userType');
    return storedUserType ? storedUserType : 0;
  });
  */

  return (
      <>
        <div className='btn-view-admin-dispocition'>
          {/*<h1>{ userType }</h1>*/}
          <Link to="/form-register-coordinator"><button type="button" className="btn btn-outline-info  btn-view-admin-style">Añadir un nuevo coordinador</button></Link>
          <Link to="/form-create-course"><button type="button" className="btn btn-outline-info  btn-view-admin-style">Crear un nuevo tipo de curso</button></Link>
          <Link to="/form-register-course"><button type="button" className="btn btn-outline-info  btn-view-admin-style">Abrir un nuevo curso</button></Link>
          <Link to="/alumn-list-admin"><button type="button" className="btn btn-outline-info  btn-view-admin-style">Busqueda</button></Link>
          <Link to="/form-register-students-before"><button type="button" className="btn btn-outline-info  btn-view-admin-style">Añadir anteriores al 2024</button></Link>

          
        </div>
      </>
  );
}

export default BtnSearch;
