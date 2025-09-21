// frontend/src/pages/Home.js
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import API from '../api';

function Home() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return navigate('/signin');

    API.get('/users/me', { headers: { Authorization: `Bearer ${token}` } })
      .then(res => setUser(res.data))
      .catch(() => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/signin');
      });
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/signin');
  };

  if (!user) return <p>Loading...</p>;

  return (
    <>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <h2>Welcome {user.name}</h2>
        <p>Phone: {user.phone}</p>
        <button onClick={handleLogout}>Sign Out</button>
      </div>
    </>
  );
}

export default Home;
