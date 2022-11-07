import { Route, Routes } from 'react-router-dom';
import Book from './components/book';
import Categories from './components/categories';
import Navbar from './components/navbar';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Book />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
