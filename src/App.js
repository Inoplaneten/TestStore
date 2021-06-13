import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import { Body } from './components/Body/Body';
import { Footer } from './components/Footer/Footer';
import { Preloader } from './components/Preloader/Preloader';

const App = props => {
  return (
    <>
      <HeaderContainer/>
      <Body/>
      <Footer/>
      <Preloader 
        initialized={props.initialized}
      />
    </>
  )
}

export default App;
