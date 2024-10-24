import { Link } from 'react-router-dom';

//import '../../styles/views/admin/cardSportAdmin.css';

function CardSportAdmin() {
   
    return (
        <>

            {/*CARD SPORT*/}
            <div className='card-dispositon' id='card-dispositon-container'>
                <div className="card" id='card-sports'>
                    <div className="card-body">
                        {<div className='sport-status-container'>
                            <h5 className="card-title">E-SPORTS</h5>
                            <div className='availability'>
                                <img src="images/botonVerde.png" className="card-img-top" alt="..."/>
                                {/*<p className="card-text"><small className="text-body-secondary" id="inscripcionesAbiertas">INSCRIPCIONES ABIERTAS</small></p>*/}
                            </div>
                        </div>}
                        <div className='description-card-container'>
                            <p className="card-text" id='description-text'>
                                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. <br/><br/>                                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                            </p>   
                            <div className='contact-container'>
                                <p className="card-text"><small className="text-body-secondary"><strong>Duración:</strong> 13 de Agosto - 13 de Octubre</small></p>
                                <p className="card-text"><small className="text-body-secondary"><strong>Horario:</strong> lun, mie, vie de 16:00 - 18:00 hrs</small></p>
                            </div> 
                            <div className='contact-container'>
                                <p className="card-text"><small className="text-body-secondary"><strong>Coordinador del taller:</strong> Alejandro Carmona Filopondio de Flore</small></p>
                                <p className="card-text"><small className="text-body-secondary"><strong>Correo Electronico:</strong> el.filo.flore@utma.edu.mx</small></p>
                                <p className="card-text"><small className="text-body-secondary"><strong>Telefono:</strong>(+49) 30 1234567</small></p>
                            </div> 
                            <div className='btn-disposition'>
                                <Link to="/alumnListAdmin"><div type="button" className="btn btn-primary">Ver listado de alumnos</div></Link>                
                            </div>
                        </div>
                    </div>
                    <img src="images/eSports.png" className="card-img-bottom" id="card-img-bottom" alt="..." style={{height: '350px', objectFit: 'cover', width: '100%'}}/>
                    {/* Paso 2: Modificar el botón para usar el estado */}
                </div>
                  
                <div className="card" id='card-sports'>
                    <div className="card-body">
                        <div className='sport-status-container'>
                            <h5 className="card-title">SOCCER</h5>
                            <div className='availability'>
                                <img src="images/botonVerde.png" className="card-img-top" alt="..."/>
                                {/*<p className="card-text"><small className="text-body-secondary" id="inscripcionesAbiertas">INSCRIPCIONES ABIERTAS</small></p>*/}
                                </div>
                        </div>
                        <div className='description-card-container'>
                            <p className="card-text" id='description-text'>
                                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. <br/><br/>                                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                            </p>   
                            <div className='contact-container'>
                                <p className="card-text"><small className="text-body-secondary"><strong>Duración:</strong> 13 de Agosto - 13 de Octubre</small></p>
                                <p className="card-text"><small className="text-body-secondary"><strong>Horario:</strong> lun, mie, vie de 16:00 - 18:00 hrs</small></p>
                            </div> 
                            <div className='contact-container'>
                                <p className="card-text"><small className="text-body-secondary"><strong>Coordinador del taller:</strong> Juan Perez Cardona</small></p>
                                <p className="card-text"><small className="text-body-secondary"><strong>Correo Electronico:</strong> juan.cardona@utma.edu.mx</small></p>
                                <p className="card-text"><small className="text-body-secondary"><strong>Telefono:</strong>  (+49) 30 1234567</small></p>
                            </div> 
                            <div className='btn-disposition'>
                                <Link to="/alumnListAdmin"><div type="button" className="btn btn-primary">Ver listado de alumnos</div></Link>                
                            </div>

                        </div>
                    </div>
                    <img src="images/eSports.png" className="card-img-bottom" id="card-img-bottom" alt="..." style={{height: '350px', objectFit: 'cover', width: '100%'}}/>
                    
                </div>

                

                
            </div>

            
            
        </>
    );
}

export default CardSportAdmin;