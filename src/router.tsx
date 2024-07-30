import {Route,Routes,BrowserRouter} from 'react-router-dom'
import AppLayout from '@/layouts/AppLayout'
import DashBoardView from '@/views/DashBoardView'
import CreateProjectView from './views/projects/CreateProjectView'
import EditProjectView from './views/projects/EditProjectView'
import ProjectsDetailsViews from './views/projects/ProjectsDetailsViews'
import AuthLayout from './layouts/AuthLayout'
import LoginView from './views/auth/LoginView'
import RegisterView from './views/auth/RegisterView'
import ConfirmAccountView from './views/auth/ConfirmAccountView'
import RequestNewCodeView from './views/auth/RequestNewCodeView'
import ForgotPasswordView from './views/auth/ForgotPasswordView'
import NewPasswordView from './views/auth/NewPasswordView'

export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout/>}>
                    <Route path='/' element={<DashBoardView/>} index/>
                    <Route path='/projects/create' element={<CreateProjectView/>}/>
                    <Route path='/projects/:projectId/edit' element={<EditProjectView/>}/>
                    <Route path='/projects/:projectId' element={<ProjectsDetailsViews/>}/>
                </Route>
                <Route element={<AuthLayout/>}>
                    <Route element={<LoginView/>} path='/auth/login'/>
                    <Route element={<RegisterView/>} path='/auth/register'/>
                    <Route element={<ConfirmAccountView/>} path='/auth/confirm-account'/>
                    <Route element={<RequestNewCodeView/>} path='/auth/request-code'/>
                    <Route element={<ForgotPasswordView/>} path='/auth/forgot-password'/>
                    <Route element={<NewPasswordView/>} path='/auth/new-password'/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}