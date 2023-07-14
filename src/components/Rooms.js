const rooms = {
  standard: {
    description: "Standard ($100/day)",
    dailycost: 100
  },
  deluxe: {
    description: "Deluxe ($150/day)",
    dailycost: 150
  },
  suite: {
    description: "Suite ($200/day)",
    dailycost: 200
  }
};

const defaultRoom = "standard";

// function roomInfo(roomlabel) {
//   Object.keys(rooms).forEach( room => {
//     if (roomlabel.toLowerCase().indexOf(room) !== -1) {
//       return [rooms[room].description, rooms[room].dailycost];
//     }
//   });
//   return ["", 0];
// }

function roomInfo(roomlabel) {
  let rinfo = rooms[roomlabel] ?? null;
  if (rinfo) {
    return [rinfo.description, rinfo.dailycost];
  } else {
    return ["", 0];
  }
}

const RoomTypes = ({ selectedRoom, setSelectedRoom }) => (
  <div className="form-group d-flex justify-content-left align-items-center mb-4">
    <label className="col-auto">Room Type:</label>

    {Object.keys(rooms).map((tag) => (
      <div key={tag} className="form-check">
        <input
          type="radio"
          className="form-check-input"
          style={{ marginLeft: "0", marginRight: "5px" }}
          id={tag}
          name="roomType"
          value={tag}
          checked={selectedRoom === tag}
          onChange={(e) => setSelectedRoom(e.target.value)}
        />
        <label htmlFor={tag} className="form-check-label">
          {rooms[tag].description}
        </label>
      </div>
    ))}
  </div>
);

export default RoomTypes;
export { defaultRoom, roomInfo };
