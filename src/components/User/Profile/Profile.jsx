import React, { useState, useEffect } from "react";
import axios from "axios";
import user from "./images/user.png";

const Profile = () => {
  const API_IP_ADDRESS = process.env.REACT_APP_API_IP_ADDRESS;

  const [userID] = useState(() => { //setUserID
    const storedUserID = localStorage.getItem("userID");
    return storedUserID ? storedUserID : 0;
  });

  useEffect(() => {
    localStorage.setItem("userID", userID);
  }, [userID]);

  const [userName, setUserName] = useState("");
  const [lastName, setLastName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [career, setCareer] = useState("");
  const [credits, setCredits] = useState(0); // Default to 0
  const [courses, setCourses] = useState([]); // New state for enrolled courses
  const [enroledStudents, setEnroledStudents] = useState([]); // New state for enrolled courses
  const [users, setUsers] = useState([]); // New state for all users

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Fetch user details
        const userUrl = `${API_IP_ADDRESS}/api/user/${userID}`;
        const userResponse = await axios.get(userUrl);
        const userData = userResponse.data;

        // Fetch career details
        const careerUrl = `${API_IP_ADDRESS}/api/career/${userData.career}`;
        const careerResponse = await axios.get(careerUrl);
        setCareer(careerResponse.data.name);

        // Fetch all courses
        const coursesUrl = `${API_IP_ADDRESS}/api/courses_name`;
        const coursesResponse = await axios.get(coursesUrl);
        setCourses(coursesResponse.data);

        // Fetch enrolled students
        const enroledStudentsUrl = `${API_IP_ADDRESS}/api/students_enroled`;
        const enroledStudentsResponse = await axios.get(enroledStudentsUrl);
        setEnroledStudents(enroledStudentsResponse.data);

        // Fetch all users
        const usersUrl = `${API_IP_ADDRESS}/api/users`;
        const usersResponse = await axios.get(usersUrl);
        setUsers(usersResponse.data);

        setUserName(userData.name);
        setLastName(userData.last_name);
        setStudentId(userData.student_id);
        setCredits(userData.credits || 0); // Default to 0 if no credits

      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [API_IP_ADDRESS, userID]);

  // Combine users and enrolled students
  const combinedData = users.map(user => {
    const enrolledStudent = enroledStudents.find(student => student.student_id === user.student_id);
    return {
      ...user,
      course_id: enrolledStudent ? enrolledStudent.course_id : "N/A",
      course_name: enrolledStudent ? enrolledStudent.course_name : "N/A"
    };
  });

  return (
    <>
      <div>
        <div
          className="jumbotron jumbotron-profile jumbotron-fluid"
          id="jumbotron-profile"
        >
          <div className="container">
            <div className="content-style-jum row">
              <div className="col-lg-3">
                <img
                  src={user}
                  alt="icono"
                  className="img-jum-dispocition rounded-circle img-fluid avatar"
                />
              </div>
              <div className="col-lg-9">
                <div>
                  <h1 className="name-style-jum display-4">
                    {userName} {lastName}
                  </h1>
                  <h5 className="career-style-jum">{career}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BODY: CONTENT */}
        <div className="content container-jum-porfile-dispocition">
          <div className=" porfile-presentation-container-dispocition">
            <h1 className="col-md-7 title-change-password-disposition title-register-style">
              "Si crees en tus sueños y sigues adelante, eventualmente los
              alcanzarás."
            </h1>
            <h4 className="col-md-10 subtitle-register-style">
              Los sueños, por muy lejanos que parezcan, no son imposibles de
              alcanzar. Lo esencial es mantener la fe en uno mismo y no rendirse
              ante los obstáculos que puedan surgir. La constancia, el esfuerzo
              y la perseverancia son los motores que nos impulsan hacia nuestras
              metas. Aunque el camino pueda ser largo o difícil, el compromiso
              con nuestros sueños es lo que finalmente nos llevará a
              alcanzarlos.
            </h4>
          </div>
          <div className="col-md-11">
            <div className="row">
              {/* LEFT COLUMN (PHOTO CONTAINER) */}
              <div className="col-lg-4">
                <div className="card card-porfile-coordinator mb-4">
                  <div className="card-body card-body-porfile-coordinator text-center">
                    <img
                      className="offer-img align-right-img-form"
                      src="/images/utmalogoorientacion.png"
                      alt=""
                    />
                    <h5 className="my-3">
                      Univercidad Tecnológica Metropolitana
                    </h5>
                    <p className="text-muted mb-1 text-slogan">
                      We are the best again!!
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 container-info-disposition">
                <div className="card card-porfile-content mb-4">
                  <div className="card-body card-body-porfile-content">
                    <h5 className="mb-4">Datos personales</h5>
                    <div>
                      <span className="camp-design col-lg-4">Nombres</span>
                      <span className="camp-text col-lg-4">{userName}</span>
                    </div>
                    <div>
                      <span className="camp-design col-lg-4">Apellidos</span>
                      <span className="camp-text col-lg-4">{lastName}</span>
                    </div>
                    <div>
                      <span className="camp-design col-lg-4">Matricula</span>
                      <span className="camp-text col-lg-4">{studentId}</span>
                    </div>
                  </div>
                </div>
                <div></div>
                <div className="info-profile-margin">
                  <div className="credits-history-dispocition">
                    <div>
                      <h5 className="subtitle-register-style">
                        Historial de créditos
                      </h5>
                      <h6 className="porfile-info-style-bold">
                        Consulta tu historial, visualiza los créditos obtenidos
                        por actividades extracurriculares y mantente al tanto de
                        tu estatus.
                        <br /> <br />
                      </h6>
                      <h6 className="porfile-info-style">
                        Recuerda que para obtener tu constancia de créditos
                        extracurriculares, es necesario cumplir con el mínimo
                        requerido de 60 créditos. Este documento es
                        indispensable para poder iniciar tus prácticas
                        profesionales y posteriormente realizar tu trámite de
                        titulación.
                        <br />
                        La constancia de créditos extracurriculares es un
                        documento oficial que avala la participación del
                        estudiante en actividades como cursos, talleres,
                        conferencias, entre otros. Este será generado y expedido
                        por el departamento encargado de las actividades
                        extracurriculares de la universidad, y deberá ir firmado
                        por las autoridades correspondientes para garantizar su
                        validez.
                      </h6>
                    </div>
                    <div className="credits-history-table-dispocition">
                      <table className="table table-bordered">
                        <tbody>
                          <tr>
                            <th scope="row">Créditos actuales</th>
                            <td
                              style={{
                                color: credits >= 60 ? "green" : "black",
                              }}
                            >
                              {credits >= 60 ? 60 : credits}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="credits-history-table-dispocition">
                      <br />
                      <h6 className="porfile-info-style-bold">
                        Cursos:
                        <br /> <br />
                      </h6>
                      <table className="table table-bordered" id="participate">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre de la actividad</th>
                          </tr>
                        </thead>
                        <tbody>
                          {courses.map((course, index) => (
                            <tr key={course.id}>
                              <th scope="row">{index + 1}</th>
                              <td>{course.name}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>



                    <div className="credits-history-table-dispocition">
                      <br />
                      <h6 className="porfile-info-style-bold">
                        Todos los usuarios y estudiantes inscritos:
                        <br /> <br />
                      </h6>
                      <table className="table table-bordered" id="allUsers">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">User ID</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Matricula</th>
                            <th scope="col">Course ID</th>
                            <th scope="col">Course Name</th>
                          </tr>
                        </thead>
                        <tbody>
                          {combinedData.map((user, index) => (
                            <tr key={user.id}>
                              <th scope="row">{index + 1}</th>
                              <td>{user.id}</td>
                              <td>{user.name}</td>
                              <td>{user.email}</td>
                              <td>{user.student_id}</td>
                              <td>{user.course_id}</td>
                              <td>{user.course_name}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="credits-history-table-dispocition">
                      <br />
                      <h6 className="porfile-info-style-bold">
                        Créditos obtenidos por actividades extracurriculares:
                        <br /> <br />
                      </h6>
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Actividad</th>
                            <th scope="col">Periodo</th>
                            <th scope="col">Año</th>
                            <th scope="col">Créditos obtenidos</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Literatura española</td>
                            <td>Enero-Marzo</td>
                            <td>2021</td>
                            <td>20</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Investigación matemática</td>
                            <td>Abril-Junio</td>
                            <td>2021</td>
                            <td>20</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Programación competitiva</td>
                            <td>Julio-Septiembre</td>
                            <td>2021</td>
                            <td>20</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="credits-history-table-dispocition">
                      <h6 className="porfile-info-style-bold">
                        Actividades extracurriculares actuales:
                        <br /> <br />
                      </h6>
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Actividad</th>
                            <th scope="col">Coordinador del taller</th>
                            <th scope="col">Contacto</th>
                            <th scope="col">Créditos a obtener</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Círculo de Estudios Históricos</td>
                            <td>Tomoe Yukishiro</td>
                            <td>yukishirot@utma.edu.mx</td>
                            <td>10</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Debate y oratoria</td>
                            <td>Alejandra Gómez</td>
                            <td>aleg@utma.edu.mx</td>
                            <td>10</td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="contact-dispocition">
                        En caso de situaciones especiales, o errores en tu
                        historial de créditos, contacta a el encargado de los
                        talleres extracurriculares.
                      </div>
                    </div>
                  </div>
                  <div className="credits-history-dispocition">
                    <br />
                    <div>
                      <h5 className="subtitle-register-style">
                        Apoyos por Participación en Actividades
                        Extracurriculares
                      </h5>
                      <br />
                      <h6 className="porfile-info-style">
                        La universidad ofrece emocionantes oportunidades de
                        apoyo para estudiantes que participan en actividades
                        extracurriculares. Estas actividades no solo son una
                        excelente manera de aprender y disfrutar, sino que
                        también te ayudan a desarrollar valiosas habilidades
                        fuera del aula. Al integrarte en ellas, podrías ser
                        considerado para recibir distintos tipos de apoyo.
                        <br />
                        Algunos deportes cuentan con selecciones
                        representativas, y en el ámbito de los e-sports, se
                        organizan torneos interuniversitarios que prometen mucha
                        competencia y camaradería.
                      </h6>
                    </div>
                  </div>
                  <div className="credits-history-dispocition">
                    <br />
                    <div>
                      <h5 className="subtitle-register-style">
                        Liberación de Créditos Extracurriculares para
                        Estudiantes Trabajadores
                      </h5>
                      <br />
                      <h6 className="porfile-info-style">
                        Entendemos que algunos estudiantes compaginan sus
                        estudios con responsabilidades laborales. Si este es tu
                        caso y no puedes asistir a las actividades
                        extracurriculares, tienes la opción de liberar hasta un
                        máximo de 20 créditos por cuatrimestre presentando una
                        carta que certifique tu situación laboral.
                        <br />
                        <br />
                        La carta deberá ser emitida por tu empleador y entregada
                        al departamento de actividades extracurriculares al
                        inicio de cada cuatrimestre. Este documento debe incluir
                        información relevante como el nombre de la empresa, el
                        cargo que ocupas, horario laboral y tiempo de servicio.
                        <br />
                        <br />
                        Recuerda que este procedimiento deberá realizarse por
                        cuatrimestre y está sujeto a la revisión y aprobación
                        por parte de las autoridades correspondientes.
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;