import './MainLayout.css';
import LoginSignin from './components/LoginSignin/LoginSignin';
import { BrowserRouter, Routes, Route } from 'react-router';

function MainLayout() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LoginSignin />} />
            <Route path='test' element={<p>The route works!</p>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default MainLayout;
