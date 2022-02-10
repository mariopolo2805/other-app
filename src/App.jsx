import { Route, Routes } from 'react-router-dom';
import './App.scss';

// import Counter from './components/Counter/Counter';
// import CounterRedux from './components/CounterRedux/CounterRedux';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import List from './pages/List/List';

function App() {
  return (
    <div className="app">
      {/* <Counter />
      <CounterRedux /> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </div>
  );
}

export default App;
