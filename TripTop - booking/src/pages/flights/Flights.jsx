import React from 'react'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import { useState } from "react";
import './flights.css';

const Flights = () => {
  const [origin, setOrigin] = useState('Almaty');
  const [destination, setDestination] = useState('Paris');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [passengers, setPassengers] = useState(1);

  const handleSearch = (e) => {
    e.preventDefault();
    // Add your flight search logic here, such as sending a request to a flight API
    console.log('Origin:', origin);
    console.log('Destination:', destination);
    console.log('Departure Date:', departureDate);
    console.log('Return Date:', returnDate);
    console.log('Passengers:', passengers);
  };


  return (
    <div>
      <Navbar />
      <Header type="list"/>
      <div className="flight-search-container">
      <h2>Find Flights</h2>
      <form onSubmit={handleSearch}>
        <label>Origin:</label>
        <input type="text" value={origin} onChange={(e) => setOrigin(e.target.value)} required />
        <label>Destination:</label>
        <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} required />
        <label>Departure Date:</label>
        <input type="date" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} required />
        <label>Return Date:</label>
        <input type="date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} />
        <label>Passengers:</label>
        <input type="number" value={passengers} onChange={(e) => setPassengers(e.target.value)} min="1" required />
        <button type="submit">Search Flights</button>
      </form>
      </div>
    </div>
  )
}

export default Flights;