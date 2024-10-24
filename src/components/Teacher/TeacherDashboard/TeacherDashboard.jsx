import React from 'react';
//import { Link } from 'react-router-dom';

//import '../../styles/views/teacher/teacherDashboard.css';

function TeacherDashboard() {
    return (
        <>
        <div>
            {/*JUMBOTRON PRINCIPAL*/}
            <div className="jumbotron jumbotron-fluid" id="jumbotron">
                <div className="container">

                    {/*success alert for notifications*/}
                    {/*<div className="alert alert-success text-left alert-dismissible fade show alert-click" role="alert">
                        <div className='menssage-notification-alert'>
                            <strong>Hola Emilio!</strong><span className='menssage-alert'>Tienes una notificación.</span> <strong><Link to="/notifications" className="nav-link link-style"> Da click aqui para ver tus notificaciones.</Link></strong> 
                        </div>
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>*/}

                    <div className="row">
                        <div className="col-lg-4">
                            <h1 className="display-4">
                                <span className="text-primary color-welcome"> Un placer trabajar contigo </span> 
                            </h1>
                            <p className="lead">Universidad Tecnológica Metropolitana</p>
                        </div>
                    </div>
                </div>
            </div>

            

       
            






         
        </div>
    </>
    );
}

export default TeacherDashboard;
