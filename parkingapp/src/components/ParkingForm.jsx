import React, { useState } from 'react';

function ParkingForm() {
  const [carNumber, setCarNumber] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [totalPrice, setTotalPrice] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const start = new Date(startTime);
    const end = new Date(endTime);

    if (start >= end) {
      alert('End time must be after start time');
      return;
    }

    let total = calculateTotalPrice(start, end);
    setTotalPrice(total);
  };

  const calculateTotalPrice = (start, end) => {
    let total = 0;
    const dayRate = 30;
    const nightRate = 50;
    const startHour = start.getHours();
    const endHour = end.getHours();

    while (start < end) {
      let hour = start.getHours();
      if (hour >= 6 && hour < 22) {
        total += dayRate;
      } else {
        total += nightRate;
      }
      start.setHours(start.getHours() + 1);
    }

    return total;
  };

  return (
    <div className="container mt-5">
      <h2>Parking Booking</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="carNumber" className="form-label">Car Number Plate</label>
          <input
            type="text"
            className="form-control"
            id="carNumber"
            value={carNumber}
            onChange={(e) => setCarNumber(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="startTime" className="form-label">Start Time</label>
          <input
            type="datetime-local"
            className="form-control"
            id="startTime"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="endTime" className="form-label">End Time</label>
          <input
            type="datetime-local"
            className="form-control"
            id="endTime"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      {totalPrice !== null && (
        <div className="mt-3">
          <h4>Total Price: Rs {totalPrice}</h4>
        </div>
      )}
    </div>
  );
}

export default ParkingForm;
