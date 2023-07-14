import React, { useState, useRef } from "react";
import CostBreakdown from "./components/CostBreakdown";
import RoomTypes, { defaultRoom, roomInfo } from "./components/Rooms";
import AmenitiesList, { chosenFeatures } from "./components/Features";

const BookingForm = ({
  initialName = "",
  initialEmail = "",
  initialDays = 3,
  initialRoomType = defaultRoom,
  initialAmenities = []
}) => {
  const [name, setName] = useState(initialName);
  const [email, setEmail] = useState(initialEmail);
  const [days, setDays] = useState(initialDays);
  const [roomType, setRoomType] = useState(initialRoomType);
  const [amenities, setAmenities] = useState(initialAmenities);
  const [calculated, setCalculated] = useState(false);
  const costBreakdown = useRef({});

  const calculatePrice = () => {
    const [roomdesc, roomcost] = roomInfo(roomType);
    const [atotal, achosen] = chosenFeatures(amenities);
    costBreakdown.current = {
      roomtype: roomdesc,
      amenities: achosen,
      totalcost: parseInt(days, 10) * (roomcost + atotal),
      breakdown:
        days +
        " days x ($" +
        roomcost +
        " [of daily room costs] + $" +
        atotal +
        " [of total daily amenities costs])"
    };
    return costBreakdown.current.totalcost;
  };

  let roomprops = { selectedRoom: roomType, setSelectedRoom: setRoomType };
  // let roomprops = { setSelectedRoom: setRoomType };
  // if (roomType) {
  //   roomprops = { selectedRoom: roomType, ...roomprops };
  // }

  const handleAmenitiesChange = (event) => {
    const { checked, value } = event.target;
    if (checked) {
      setAmenities([...amenities, value]);
    } else {
      setAmenities(amenities.filter((amenity) => amenity !== value));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    calculatePrice();
    setCalculated(true);
  };

  return (
    <form method="POST" onSubmit={handleSubmit}>
      <div className="container mt-5">
        <h2 className="mb-4">Booking Form</h2>

        <div className="form-group d-flex justify-content-center align-items-center mb-4">
          <label htmlFor="name" className="col-auto">
            Name: &nbsp;
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Your full name please"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group d-flex justify-content-center align-items-center mb-4">
          <label htmlFor="email" className="col-auto">
            Email: &nbsp;
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Your valid email please"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group d-flex justify-content-center align-items-center mb-4">
          <label htmlFor="days" className="col-auto">
            Number of days (3-5): &nbsp;
          </label>
          <select
            className="form-control mb-1"
            name="days"
            value={days}
            onChange={(e) => setDays(e.target.value)}
          >
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        <RoomTypes {...roomprops} />
        <AmenitiesList
          amenities={amenities}
          handleCheckboxChange={handleAmenitiesChange}
        />

        {calculated ? (
          <div style={{ color: "red", backgroundColor: "yellow" }}>
            Total Price: ${calculatePrice().toFixed(2)}
          </div>
        ) : (
          ""
        )}

        <button className="btn btn-primary" type="submit">
          Calculate Booking Price
        </button>

        {calculated && (
          <CostBreakdown
            name={name}
            email={email}
            days={days}
            {...costBreakdown.current}
          />
        )}
      </div>
    </form>
  );
};

export default BookingForm;
