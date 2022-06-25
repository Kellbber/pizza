import Login from 'pages/Login';
import { Routes, Route } from 'react-router-dom';
const Router = () => {
  return (
    <Routes>
      
        <Route path="/" element={<Login/>}/>
        

    </Routes>
  );
}

export default Router;