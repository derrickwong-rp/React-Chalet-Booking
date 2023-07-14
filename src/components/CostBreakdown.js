export default function CostBreakdown({
  name = "",
  email = "",
  days = 0,
  roomtype = "",
  amenities = [],
  totalcost = 0,
  breakdown = ""
}) {
  return (
    <div>
      <hr />
      <h1>Booking Summary</h1>
      Name: {name}
      <br />
      <br />
      Email: {email}
      <br />
      <br />
      Number of days: {days}
      <br />
      <br />
      Room type: {roomtype}
      <br />
      {amenities.length ? (
        <>
          <br />
          Amenities: <br />
        </>
      ) : (
        ""
      )}
      <ul>
        {amenities.map((aaa, i) => (
          <li key={i} className="list-group-item">
            {aaa}
          </li>
        ))}
      </ul>
      <b>Total cost: ${totalcost}</b>
      <br />
      <br />
      Breakdown: {breakdown}
      <hr />
    </div>
  );
}
