import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

const App = () => {
  return (
  <>
    <Router>
      <Routes>
        <Route
          path='/'
          element={<Home
                    directory='/'
                  />}
        />


      </Routes>
    </Router>
  </>
  )
}

export default App;
