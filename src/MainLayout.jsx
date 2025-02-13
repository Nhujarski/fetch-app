import './MainLayout.css';
import LoginSignin from './components/LoginSignin/LoginSignin';
import SearchLayout from './components/SearchLayout/SearchLayout';
import { BrowserRouter, Routes, Route } from 'react-router';

function MainLayout() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LoginSignin />} />
            <Route path='search' element={<SearchLayout />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default MainLayout;
