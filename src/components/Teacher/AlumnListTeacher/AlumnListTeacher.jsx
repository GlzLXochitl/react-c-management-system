import React, { useEffect, useState } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";

const API_IP_ADDRESS = process.env.REACT_APP_API_IP_ADDRESS;

function AlumnListTeacher() {
  const [users, setUsers] = useState([]);
  const [enrolledStudents, setEnrolledStudents] = useState([]);
  
  useEffect(() => {
    axios
      .get(`${API_IP_ADDRESS}/api/userType/2`)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });

    axios
      .get(`${API_IP_ADDRESS}/api/students_enroled_in_a_course/3`)
      .then((response) => {
        setEnrolledStudents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching enrolled students:", error);
      });
  }, []);


  // PDF generation
  const generatePDF = () => {
    const doc = new jsPDF("landscape");

    doc.setFontSize(16);
    doc.text("Universidad Tecnológica Metropolitana de Aguascalientes", 14, 22);

    doc.setFontSize(12);
    doc.text("Listado de Alumnos", 14, 28);

    const columns = [
      "No.",
      "Nombre",
      "Apellidos",
      "Matrícula",
    ];
    const rows = users.map((user, index) => [
      index + 1,
      user.name,
      user.last_name,
      user.student_id,
    ]);

    doc.autoTable({
      startY: 40,
      head: [columns],
      body: rows,
      styles: {
        lineColor: [215, 222, 228],
        lineWidth: 0.1,
        fontSize: 9,
      },
      headStyles: {
        fontStyle: "bold",
        fontSize: 9,
      },
      tableLineColor: [215, 222, 228],
      tableLineWidth: 0.1,
    });

    doc.save("table.pdf");
  };

  return (
    <>
    <div className="content container-jum-porfile-dispocition">
    <div className="col-md-10 alumn-list-container ">
      <div className="credits-history-table-dispocition">
        
        
        <br />
        <h6 className="porfile-info-style-bold">
          Todos los usuarios y estudiantes inscritos:
          <br /> <br />
        </h6>
        <table className="table table-bordered table-sm" id="allUsers">
          <thead className="thead-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Matrícula</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <th scope="row">{index + 1}</th>
                <td>{user.name}{' '}{user.last_name}</td>
                <td>{user.student_id}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="btn-container">
          <button
            type="button"
            className="btn btn-dark btn-list-disposition btn-teacher-listado-dow"
            onClick={generatePDF}
          >
            Descargar listado físico
          </button>
        </div>

            
        <br />
        <h6 className="porfile-info-style-bold">
          Estudiantes inscritos en el curso con ID 3:
          <br /> <br />
        </h6>
        <table className="table table-bordered table-sm" id="allUsers">
          <thead className="thead-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Matrícula</th>
            </tr>
          </thead>
          <tbody>
          {enrolledStudents.map((student, index) => (
            <tr key={student.student_id}>
              <th scope="row">{index + 1}</th>
              <td>{student.name}{' '}{student.last_name}</td>
              <td>{student.student_id}</td>
            </tr>
          ))}
          </tbody>
        </table>
        


      </div>
      </div>
    </div>
      

      
    </>
  );
}

export default AlumnListTeacher;