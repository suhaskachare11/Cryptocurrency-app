import{BrowserRouter,Route, Routes} from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import CoinPage from './Pages/CoinPage';
import Homepage from './Pages/Homepage';
import {makeStyles} from '@material-ui/core'

function App() {

  const useStyles = makeStyles(()=>({
    App: {
      backgroundColor:'#14161a',
      color: 'white',
      minHeight :'100vh'
    }
  }))

  const classes = useStyles()

  return (
   <BrowserRouter>
     <div className={classes.App}>
       <Header/>
       <Routes>
          <Route exact path='/' element={< Homepage />}></Route>
          <Route exact path='/coins/:id' element={< CoinPage />}></Route>
       </Routes>
     </div>
   
   </BrowserRouter>
  );
}

export default App;
