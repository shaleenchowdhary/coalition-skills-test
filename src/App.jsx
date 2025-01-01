import { useEffect, useState } from 'react';
import MainContent from './components/MainContent';
import Navbar from './components/Navbar';

export default function App() {
  const [patients, setPatients] = useState([]);
  // console.log('App.jsx is running');

  useEffect(() => {
    // console.log('useEffect is running');

    const info = async () => {
      const username = 'coalition';
      const password = 'skills-test';
      const credentials = btoa(`${username}:${password}`);
      try {
        const response = await fetch(
          'https://fedskillstest.coalitiontechnologies.workers.dev/patients',
          {
            method: 'GET',
            headers: {
              Authorization: `Basic ${credentials}`,
            },
          }
        );
        if (!response.ok) throw new Error(`Bad Response: ${response.status}`);
        console.log(response);
        const data = await response.json();
        setPatients(data);
        // console.log('Fetched data:', data);
      } catch (error) {
        console.error(`Bad FETCH: ${error.message}`);
      }
    };
    info();
  }, []);

  return (
    <div id="app-container">
      <Navbar />
      {/* <MainContent patients={patients} /> */}
    </div>
  );
}
