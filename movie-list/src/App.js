import './App.css';
import Header from './components/Header/Header';
import Movies from './components/movies/Movies/Movies';

function App() {
  return (
    <div className="App">
      <Header title="React Movie List" />
      <Movies />
    </div>
  );
}

export default App;
