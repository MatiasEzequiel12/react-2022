
import './App.css';
import Inicio from './paginas/Inicio'
import Error404 from './components/Errores/404';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio />,
    errorElement: <Error404 />
  },
  {
    path: "/buscar",
    element: <Inicio />,
    errorElement: <Error404 />
  },
]);



function App() {
  return (
      <div className="App">
        <RouterProvider router={router} />
      </div>
  );
}

export default App;
