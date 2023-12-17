import{BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import {Container} from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen';
import Header from "./components/Header";
import './bootstrap.min.css'
import LoginScreen from './screens/LoginScreen';
import EspaceScreen from './screens/EspaceScreen';
import CoursScreen from './screens/CoursScreen';
import EmploieTempsScreen from './screens/EmploieTempsScreen';
import MessageScreen from './screens/MessageScreen';




function App() {
  return (
    <>
    <Router>
    <Header/>
    <main className="py-3"> 
    <Container>
      <Routes>
      <Route path="/" element={<HomeScreen/>}/>
      <Route path="/signIn" element={<LoginScreen/>}/>
      <Route path="/espace" element={<EspaceScreen/>}/>
      <Route path="/cours" element={<CoursScreen/>}/>
      <Route path="/emploiTemps" element={<EmploieTempsScreen/>}/>
      <Route path="/message" element={<MessageScreen/>}/>

      </Routes>
    </Container>
    </main>
    </Router>
    </>
  );
}

export default App;
