import { RouterProvider } from 'react-router-dom';
import './App.css';
import root from "./router/root";
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle/>
      <RouterProvider router={root}/>
    </>    
  );
}

export default App;
