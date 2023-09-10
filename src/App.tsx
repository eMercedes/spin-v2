import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Root from 'containers/root'
import Financial from 'containers/financial'
import configureStore from './store'
import './App.scss'

const { store, persistor } = configureStore()

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path='/' element={<Root />} />
            <Route path='/start'>
                <Route path='/start/financial' element={<Financial />} />
            </Route>
        </Route>,
    ),
)

function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <RouterProvider router={router} />
            </PersistGate>
        </Provider>
    )
}

export default App
