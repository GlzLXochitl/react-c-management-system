import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoute, { NotFoundRoute } from './../src/routes/ProtectedRoute.jsx';
import { AuthProvider } from '../src/context/AuthProvider';

// Importaciones de administrador
import AppAdminDashboard from '../src/utils/Admin/AdminDashboard.js';
import AppAlumnListAdmin from '../src/utils/Admin/AlumnListAdmin.js';
import AppFormRegisterCourse from '../src/utils/Admin/FormRegisterCourse.js';
import AppFormRegisterStudentsBefore from './utils/Admin/FormRegisterStudentsBefore.js';
import AppFormRegisterCoordinator from './utils/Admin/FormRegisterCoordinator.js';
import AppFormCreateCourse from './utils/Admin/FormCreateCourse.js';

// Importaciones de profesor
import AppTeacherDashboard from '../src/utils/Teacher/TeacherDashboard.js';
import AppAlumnListTeacher from '../src/utils/Teacher/AlumnListTeacher.js';

// Importaciones de usuario
import AppUserDashboard from '../src/utils/User/UserDashboard.js';
import AppProfile from '../src/utils/User/Profile.js';
import AppFormApply from '../src/utils/User/FormApply.js';

// Importaciones sin protección
import AppLogin from '../src/utils/Common/Login.js';
import AppUserRegister from '../src/utils/Common/UserRegister.js';
import AppChangePassword from '../src/utils/Common/ChangePassword.js';

// Importaciones comunes
import AppHelp from '../src/utils/Common/Help.js';
import AppPrivacy from '../src/utils/Common/Privacy.js';

import AppForm from './utils/Common/Form.js';

import AppHome from './utils/Common/Home.js';

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<AppLogin />} />

          <Route path="home" element={<AppHome />} />
          
          <Route path="admin/*" element={
            <ProtectedRoute allowedRoles={[1]}>
              <Routes>
                <Route path="dashboard" element={<AppAdminDashboard />} />
                <Route path="alumn-list" element={<AppAlumnListAdmin />} />
                <Route path="form-register-course" element={<AppFormRegisterCourse />} />
                <Route path="form-register-students-before" element={<AppFormRegisterStudentsBefore />} />
                <Route path="form-register-coordinator" element={<AppFormRegisterCoordinator />} />
                <Route path="form-create-course" element={<AppFormCreateCourse />} />
              </Routes>
            </ProtectedRoute>
          } />

          <Route path="teacher/*" element={
            <ProtectedRoute allowedRoles={[3]}>
              <Routes>
                <Route path="dashboard" element={<AppTeacherDashboard />} />
                <Route path="alumn-list" element={<AppAlumnListTeacher />} />
              </Routes>
            </ProtectedRoute>
          } />

          <Route path="user/*" element={
            <ProtectedRoute allowedRoles={[2]}>
              <Routes>
                <Route path="dashboard" element={<AppUserDashboard />} />
                <Route path="profile" element={<AppProfile />} />
                <Route path="form-apply" element={<AppFormApply />} />
              </Routes>
            </ProtectedRoute>
          } />

          <Route path="common/*" element={
            <ProtectedRoute allowedRoles={[1, 2, 3]}>
              <Routes>
                <Route path="help" element={<AppHelp />} />
                <Route path="privacy" element={<AppPrivacy />} />
              </Routes>
            </ProtectedRoute>
          } />

          <Route path="user-register" element={<AppUserRegister />} />
          <Route path="change-password" element={<AppChangePassword />} />
          <Route path="*" element={<NotFoundRoute />} />  {/* Comodin para rutas inexistentes */}

          <Route path="form" element={<AppForm />} />  {/*testing  ??*/}

        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;