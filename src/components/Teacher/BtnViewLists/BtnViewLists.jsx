import React from 'react';
import { Link } from 'react-router-dom';

function BtnApply() {
  return (
      <>
        <div className='btn-view-teacher-list-dispocition'>
          <Link to="/alumn-list-teacher"><button type="button" className="btn btn-info btn-lg btn-view-teacher-list-style">Ver listas</button></Link>
        </div>
      </>
  );
}

export default BtnApply;
