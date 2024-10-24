import React from "react";
import { Link } from "react-router-dom";

function BtnApply() {
  return (
    <>
      <div className="btn-apply-student-course-dispocition">
        <Link to="/form-apply">
          <button
            type="button"
            className="btn btn-outline-info btn-lg btn-apply-student-course-style"
          >
            Aplicar a un curso
          </button>
        </Link>
      </div>
    </>
  );
}

export default BtnApply;
