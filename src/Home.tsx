import logo from '../src/assets/matba5na.jpg'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu';
import { Container } from 'react-bootstrap';

const Home = () => {
  return (
    <>
    <Container>
      <h1 className='page-header'>Matbaخna</h1>
      <img src={logo} className="App-logo" alt="react" />
      <Menu/>
    </Container>
    </>
  );
};

export default Home;