import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Dashboard from 'containers/dashboard'
import Financial from 'containers/financial'
import './App.scss'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Dashboard />}>
            <Route path='start'>
                <Route path='financial' element={<Financial />} />
            </Route>
        </Route>,
    ),
)

function App() {
    return <RouterProvider router={router} />
}

export default App
