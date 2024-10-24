import React from 'react';

//import '../../styles/views/admin/alumnListAdmin.css';

function AlumnListAdmin() {
    return (
        <>
            {/* NOTA: LAS CLASES TIENEN LOS MISMOS NOMBRES DE EL COMPONENTE DE CAMBIO DE CONTRASEÑA ESTO SE DEBERA ADAPTAR O ELIMINAR SEGUN LAS NESECIDADES */}

            <div className='container-boddy-alumn-list-teacher'>
        <div className='title-style-alumn-list-teacher'>
                <h1>Busqueda</h1>
            </div>
            <div>
                <label for="inputAddress2">Filtros:</label>
            </div>
        <div>
                <button type="button" className='btn btn-outline-primary btn-disposition-filter-alumn-list-teacher' id='myButton'>Talleres</button>
                <button type="button" className='btn btn-outline-primary btn-disposition-filter-alumn-list-teacher' id='myButton'>Alumnos</button>
                <button type="button" className='btn btn-outline-primary btn-disposition-filter-alumn-list-teacher' id='myButton'>Talleristas</button>
                <button type="button" className='btn btn-outline-primary btn-disposition-filter-alumn-list-teacher' id='myButton'>Nombre y apellido</button>
                <button type="button" className='btn btn-outline-primary btn-disposition-filter-alumn-list-teacher' id='myButton'>Matriculas</button>
                

            
                <table className="table">
                    <thead className="thead thead-table-list-alumns-teacher">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellidos</th>
                            <th scope="col">Matrícula</th>
                            <th scope="col">Carrera</th>
                            <th scope="col">Cuatrimestre</th>
                            
                            <th scope="col">Email</th>
                            <th scope="col">Creditos</th>
                            
                            
                        </tr>
                    </thead>
                    <tbody>
                        
                        <tr>
                            <th scope="row">1</th>
                            <td>Edith Angelica</td>
                            <td>Gonzalez Leos</td>
                            <td>utm22030603</td>
                            <td>Tecnologías de la informacion</td>
                            <td>8</td>
                            
                            <td>edithglz@utma.edu.mx</td>
                            <td><strong>30</strong></td>
                        </tr>

                        <tr>
                            <th scope="row">2</th>
                            <td>Emilio Antonio</td>
                            <td>Cortes</td>
                            <td>utm22030604</td>
                            <td>Nanotecnologia</td>
                            <td>8</td>
                            
                            <td>emiliocortes@utma.edu.mx</td>
                            <td><strong>60</strong></td>
                        </tr>

                        <tr>
                            <th scope="row">3</th>
                            <td>Erasmo Catalino</td>
                            <td>Diaz Ruis</td>
                            <td>utm22030605</td>
                            <td>Tecnologías de la informacion</td>
                            <td>8</td>
                            
                            <td>erasmoruis@utma.edu.mx</td>
                            <td><strong>40</strong></td>
                        </tr>

                    </tbody>
                </table>
                <div className='btn-container'>
                    <button type="button" className="btn btn-dark btn-list-disposition btn-teacher-listado-dow">Descargar</button>
                </div>
            </div>

        </div>
            

        </>
    );
}

export default AlumnListAdmin;
