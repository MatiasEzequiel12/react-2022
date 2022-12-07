import logo from './logo.svg';
import './App.css';
import Inicio from './pages/inicio'
import Error404 from './components/Errores/404';
import Link from './components/Link';
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio />,
    errorElement: <Error404 />
  },
  {
    path: "/buscador",
    element: <Inicio />,
    errorElement: <Error404 />
  },
]);



function App() {
  return (
    <div className="App">
      {/* INICIO */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
