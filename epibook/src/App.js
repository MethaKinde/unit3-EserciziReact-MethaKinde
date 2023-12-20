import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';
import BookList from './components/BookList';

function App() {
  return (
    <div>
      <MyNav />
      <Welcome />
      <AllTheBooks />
    </div>
  );
}

export default App;
