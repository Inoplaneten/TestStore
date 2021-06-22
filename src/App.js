import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import { Body } from './components/Body/Body';
import { Footer } from './components/Footer/Footer';
import { Preloader } from './components/Preloader/Preloader';

const App = ({initialized}) => {
  return (
    <>
      <HeaderContainer/>
      <Body/>
      <Footer/>
      <Preloader 
        initialized={initialized}
      />
    </>
  )
}

export default App;
