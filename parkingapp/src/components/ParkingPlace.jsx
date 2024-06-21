import React from 'react';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Dummy data for parking places
const parkingPlaces = [
  { id: 1, booked: true },
  { id: 2, booked: false },
  { id: 3, booked: true },
  { id: 4, booked: false },
  { id: 5, booked: true },
  { id: 6, booked: false },
  { id: 7, booked: true },
  { id: 8, booked: false },
  { id: 9, booked: true },
  { id: 10, booked: false },
];

function ParkingPlace() {
  return (
    <div className="container mt-5">
      <div className="row">
        {parkingPlaces.map(place => (
          <div key={place.id} className="col-6 col-md-4 col-lg-2 mb-3">
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip id={`tooltip-${place.id}`}>
                  {place.booked ? 'Booked' : 'Available'}
                </Tooltip>
              }
            >
              <div
                className="p-3 border"
                style={{
                  backgroundColor: place.booked ? 'gray' : 'green',
                  color: 'white',
                  textAlign: 'center',
                  cursor: 'pointer'
                }}
              >
                Parking {place.id}
              </div>
            </OverlayTrigger>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ParkingPlace;
