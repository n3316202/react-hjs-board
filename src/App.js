import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import BoardTablesList from './pages/BoardTablesList';
import BoardPaging from './pages/BoardListWithPaging';
import { Link, Route, Routes } from 'react-router-dom';
import Board from './components/Board';
import BoardWrite from './components/BoardWrite';

function App() {
  return (
    <div>
      <Header></Header>
      {/* <BoardTablesList /> */}
      <Routes>
        <Route path="/" element={<BoardPaging />} />
        <Route path="/board/:bid" element={<Board />} />
        <Route path="/write" element={<BoardWrite />} />
      </Routes>
    </div>
  );
}

export default App;
