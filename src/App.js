import { RouterProvider } from 'react-router-dom';
import './App.css';
import root from "./router/root";
import GlobalStyle from './styles/GlobalStyle';
import { ConfigProvider } from 'antd';

function App() {
  return (
    <>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#DBD2D2',
          defaultActiveBg: '#FFFFFF'
        },
      }}
    >
      <GlobalStyle/>
      <RouterProvider style={{backgroundImage: ''}}router={root}/>
      </ConfigProvider>
    </>    
  );
}

export default App;
