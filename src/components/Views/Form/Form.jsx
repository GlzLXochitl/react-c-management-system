import React from 'react';
import { Link } from 'react-router-dom';

function goBack(){ 
    window.location.href = "/adminDashboard";
}

function Form() {
  return (
      <>

<div className="container ">
                <div className="row">
                    <div className="col-md-12">
            <form>
            <h1 className='title-change-password-disposition title-register-style'>Añadir Curso</h1>
                <div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="inputAddress">Coordinador</label>
                            <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                <option selected>Choose...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>                        
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputAddress2">Apellidos</label>
                            <input type="text" className="form-control" id="inputAddress2" placeholder="ej. Corpus Flores"/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-3">
                            <label for="inputAddress2">Matrícula</label>
                            <input type="text" className="form-control" id="inputAddress2" placeholder="ej. utm00030600"/>
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputAddress2">Programa de estudios</label>
                            <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                <option selected>Choose...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="form-group col-md-3">
                            <label for="inputAddress2">Cuatrimestre actual</label>
                            <input type="number" className="form-control" id="inputAddress2" placeholder="ej. 6"/>
                        </div>
                    </div>  
                </div>
                <div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="inputEmail4">Email</label>
                            <input type="email" className="form-control" id="inputEmail4" placeholder="@utma.edu.mx"/>
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputEmail4">Confirma tu email</label>
                            <input type="email" className="form-control" id="inputEmail4" placeholder="@utma.edu.mx"/>
                        </div>
                    </div>
                    <div  className="form-row align-items-center">
                        <div className="col-auto col-md-2">
                            <button type="submit" className="btn btn-primary btn-style-change-password">Enviar código</button>
                        </div>
                        <div className="col-auto">
                            <label className="sr-only" for="inlineFormInputGroup">Username</label>
                            <div className="input-group mb-2">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">Introduce el código</div>
                                </div>
                                <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="ej. 4H6rf7"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="form-group">
                        <label for="inputAddress">Crea una contraseña</label>
                        <input type="password" className="form-control" id="inputAddress" placeholder="Contraseña"/>
                    </div>
                    <div className="form-group">
                        <label for="inputAddress2">Introduce nuevamente la contraseña</label>
                        <input type="password" className="form-control" id="inputAddress2" placeholder="Confirmar la contraseña"/>
                    </div> 
                    <div className="form-group">

                        <label className='password-text-recomendation' for="inputAddress">¡Debe contener más de ocho digitos y es recomendable el uso de caracteres especiales para mejorar la seguridad de tu contraseña!</label>
                    </div>   
                </div>
                <button type="submit" className="btn btn-primary btn-style-change-password"><Link to="/" className='text-btn-style-change-password'>Registrarme</Link></button>
              
            </form>

        </div>
    </div>
</div>




      
      <div id='card-disposition'>
        <div className="card"  style={{ width: '45rem' }} >
                <div className="card-body">
                    <form className='form-container'>
                        <div>
                            <h1 className='title-card'>Añadir Curso</h1>
                        </div>
                        <div className='body-card-design'>
                        <div className="form-group">
                                <label for="quarterSelect">Coordinador</label>
                                <select className="form-control" id="quarterSelect">
                                    <option>Emilio Romo</option>
                                    <option>Carlos Galindo</option>
                                    <option>Xochitl Leos</option>
                                    <option>Erasmo Diaz</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label for="exampleFormControlSelect1">Cuatrimestre</label>
                                <select className="form-control" id="exampleFormControlSelect1">
                                    <option>Enero - Abril</option>
                                    <option>Mayo  - Agosto</option>
                                    <option>Septiembre - Diciembre</option>
                                </select>
                            </div>
                            
                            <div className="form-group">
                                <label for="courseSelect">Actividad</label>
                                <select className="form-control" id="courseSelect">
                                    <option>Futbol</option>
                                    <option>Ajedrez</option>
                                    <option>Literatura</option>
                                    <option>Voley</option>
                                    <option>Baloncesto</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label for="courseSelect">Creditos al cumplir la actividad</label>
                                <select className="form-control" id="courseSelect">
                                    <option>10</option>
                                    <option>20</option>
                                    <option>30</option>
                                    <option>40</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label for="courseSelect">Imagen del curso</label>
                                <label for="imgFile">Selecciona la imagen</label>
                                <input type="file" className="form-control-file" id="exampleFormControlFile1"/>
                            </div>

                            
                            <div className="form-check form-check-inline checkbox-container">
                                <label for="courseSelect">Horarios</label>
                                <div>
                                    <div className='form-check form-check-inline'>
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="Lunes"/>
                                        <label className="form-check-label" for="inlineCheckbox1">Lunes</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="Martes"/>
                                        <label className="form-check-label" for="inlineCheckbox2">Martes</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="Miercoles"/>
                                        <label className="form-check-label" for="inlineCheckbox2">Miercoles</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="Jueves"/>
                                        <label className="form-check-label" for="inlineCheckbox2">Jueves</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="Viernes"/>
                                        <label className="form-check-label" for="inlineCheckbox2">Viernes</label>
                                    </div>
                                </div>
                                
                            </div>
                            
                            <div className="form-check">
                            <input className="form-check-input" type="radio" name="firstRadio" id="exampleRadio" value="16:00 - 17:00" checked/>
                                <label className="form-check-label" for="firstRadio">
                                    16:00 - 17:00
                                </label>
                            </div>
                            <div className="form-check">
                            <input className="form-check-input" type="radio" name="secondRadio" id="secondRadio" value="17:00 - 18:00"/>
                                <label className="form-check-label" for="secondRadio">
                                    17:00 - 18:00
                                </label>
                            </div>
                            <div className="btn-style-submit">
                                <button id="goBack" onClick={goBack} style={{marginTop: '20px'}} className="btn btn-primary btn-disposition">Aceptar</button>
                            </div>
                        </div>
                        
                    </form>
                </div>
            </div>
      </div>
     
      </>
  );
}

export default Form;
