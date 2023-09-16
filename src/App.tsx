import { useSelector } from 'react-redux'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Root from 'containers/root'
import Dashboard from 'containers/dashboard'
import Financial from 'containers/financial'
import Login from 'containers/login'
import { AppState } from 'reducers'
import './App.scss'

const publicRouter = createBrowserRouter(
    createRoutesFromElements([<Route path='/' element={<Root />} />, <Route path='login' element={<Login />} />]),
)

const privateRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Dashboard />}>
            <Route path='start'>
                <Route path='financial' element={<Financial />} />
            </Route>
        </Route>,
    ),
)

function App() {
    const logged = useSelector((state: AppState) => state.app.token)
    return <RouterProvider router={logged ? privateRouter : publicRouter} />
}

export default App
