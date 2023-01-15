import logo from './logo.svg';
import './App.css';
import ProductList from './components/ProductList.component';
import SearchForm from './components/SearchForm.component';
import Modal from './components/Modal.component';
function App() {
  return (
    <div className="App">
      <SearchForm/>
      <ProductList/>
      
    </div>
  );
}

export default App;
