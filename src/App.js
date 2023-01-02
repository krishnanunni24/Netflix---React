import React from 'react'
import NavBar from './Components/NavBar/NavBar';
import './App.css'
import { action,originals,scienceFiction,thriller,comedy} from './urls/urls';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';

function App() {
  return (
    <div className=" App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={action} title='Action' isSmall/>
      <RowPost url={comedy} title='Comedy' isSmall/>
      <RowPost url={thriller} title='Thriller' isSmall/>
      <RowPost url={scienceFiction} title='Science Fiction' isSmall/>




    </div>
  )
}


export default App;

