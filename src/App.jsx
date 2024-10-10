import "./App.scss";
import Header from './components/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router/Approuter';
import { Payment } from "./components/Payment/Payment";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
      {/* <Payment/> */}
    </BrowserRouter>
  );
}

export default App;
