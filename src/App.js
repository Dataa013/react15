import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
const [loading, setLoading] = useState(true);
const [tours, setTours] = useState([]);

function removeTour(id) {
  const newTours = tours.filter((tour) => tour.id !== id);
  setTours(newTours)
}

  const featchTours = async() => {
    setLoading(true)

    try {
    const response = await fetch(url)
    const tours = await response.json();
    setLoading(false);
    setTours(tours)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }

  }

  useEffect(()=>{
    featchTours()
  },[])

  if(loading) {
    return (
      <main>
          <Loading />
      </main>
    )
  }

  if(tours.length === 0) {
    return <main className='title'>
      <h2>no tours left</h2>
      <button className='btn' onClick={()=> featchTours()}>Refresh</button>
    </main>
  }

  return <main>
    <Tours tours={tours} removeTour={removeTour}/>
  </main>
}

export default App
