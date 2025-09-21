import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Landing() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <h1>Welcome to Task2 App</h1>
        <button onClick={() => navigate('/signup')} style={{ marginRight: '10px' }}>Sign Up</button>
        <button onClick={() => navigate('/signin')}>Sign In</button>
      </div>
    </>
  );
}

export default Landing;
