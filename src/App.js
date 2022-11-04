import { Route, Routes } from 'react-router-dom';
import AddBook from './components/addbook';
import Categories from './components/categories';
import Navbar from './components/navbar';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<AddBook />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
