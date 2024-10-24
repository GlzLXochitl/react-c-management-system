import React from 'react';

//import '../../styles/views/common/notifications.css';

function Notifications() {

    return (
        <>
            <div className="content">
                <div>
                    <div className="row">
                        <div className="container-notis">
                            {/* CONTENEDOR PRINCIPAL */}
                            <div className="jumbotron" id="jumbotron-notifications">
                                {/* ENCABEZADO */}
                                <h1 className="display-4" id="title-style">Notificaciones</h1>
                                <p className="lead">Tienes algunas notificaciones</p>
                            </div>
                            <div className="cards-container">
                                
                                {/* CONTENEDOR DE TARJETAS */}
                                <div className="card" id="primera" style={{ boxShadow: '0 4px 8px 0 #AED6F1 , 0 6px 20px 0 #AED6F1 ' }}>
                                    <div className="card-body">
                                        <div className="data-notification">
                                            <div className="title-notification-alert-style">
                                                ¡Inscripciones abiertas a talleres deportivos y culturales Mayo – Agosto 2024!
                                            </div>
                                            <div className="date-time-notification">
                                                {/* FECHA Y HORA ACTUAL */}
                                                {/*{new Date().toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) + ' ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}*/}
                                                domingo, 24 de junio de 2024 12:02
                                            </div>
                                        </div>
                                        <div className="content-menssage-alert">
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit? <br/> 
                                            Sit aliquam laborum illum sint dolorum ipsum perspiciatis eligendi temporibus molestiae. Distinctio velit eligendi quibusdam voluptatibus eum placeat quaerat voluptatem deserunt nostrum. <br/> 
                                            Nisi laborum voluptates maiores possimus quae provident blanditiis vero ut nemo!
                                        </div>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-body">
                                        <div className="data-notification">
                                            <div className="title-notification-alert-style">
                                                Te invitamos a ser parte del nuevo equipo deportivo de futbol americano  
                                            </div>
                                            <div className="date-time-notification">
                                                {/* FECHA Y HORA ACTUAL */}
                                                {/*{new Date().toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) + ' ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}*/}
                                                domingo, 22 de junio de 2024 10:02
                                            </div>
                                        </div>
                                        <div className="content-menssage-alert">
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit? <br/> 
                                            Sit aliquam laborum illum sint dolorum ipsum perspiciatis eligendi temporibus molestiae. Distinctio velit eligendi quibusdam voluptatibus eum placeat quaerat voluptatem deserunt nostrum. <br/> 
                                            Nisi laborum voluptates maiores possimus quae provident blanditiis vero ut nemo!
                                        </div>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-body">
                                        <div className="data-notification">
                                            <div className="title-notification-alert-style">
                                                ¡No olvides que este 3 de Mayo ya podrás ser parte de un club cultural!
                                            </div>
                                            <div className="date-time-notification">
                                                {/* FECHA Y HORA ACTUAL */}
                                                {/*{new Date().toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) + ' ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}*/}
                                                domingo, 20 de junio de 2024 9:16
                                            </div>
                                        </div>
                                        <div className="content-menssage-alert">
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit? <br/> 
                                            Sit aliquam laborum illum sint dolorum ipsum perspiciatis eligendi temporibus molestiae. Distinctio velit eligendi quibusdam voluptatibus eum placeat quaerat voluptatem deserunt nostrum. <br/> 
                                            Nisi laborum voluptates maiores possimus quae provident blanditiis vero ut nemo!
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
}

export default Notifications;
