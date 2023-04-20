
import './App.css'
import Card from './components/Card'
import Navbar from './components/Nav'
import { useState,useEffect } from 'react'
function App() {
  const [Capitulos, setCapitulos] = useState([])

  useEffect(() => {
    const interval = setInterval(() => {
      fetchData();
    }, 1000); // actualiza cada 1000ms (1 segundo)

    return () => clearInterval(interval);
  }, []);

  async function fetchData() {
    const response = await fetch("http://localhost:3000/capitulos");
    const newData = await response.json();
    setCapitulos(newData);
  }
  return (
    <div className="flex flex-col justify-center items-center w-full">
     <Navbar/>
     <header>
      <h1  
      className="text-5xl font-bold text-cyan-50 font-sans mt-12 mb-5">The mandalorian 
      <span className="text-cyan-400"> Chapters</span>
      </h1>
     </header>
     <div className='w-96 h-0.5 bg-cyan-50 mb-12'>
       {/*LINEA */}
     </div>
     <section className="grid grid-cols-3  gap-16">
      
      {Capitulos && Capitulos.map( cap => <Card data_capitulo={cap} key={cap.capitulo}/>)}
     </section>
    </div>
  )
}

export default App
