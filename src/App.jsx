import "./App.scss";
import Header from './components/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router/Approuter';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
