import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from '../pages/Home';
import Detail from '../pages/Detail';

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path="/detail/:postID" element={<Detail />} />
      {/* <Route path='publisher/:itemId' element={<Publisher />} /> */}
    </Routes>
  </BrowserRouter>;
}

export default App;
