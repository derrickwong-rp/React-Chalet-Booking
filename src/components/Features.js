const features = {
  wifi: {
    description: "Wi-Fi ($10/day)",
    dailycost: 10
  },
  breakfast: {
    description: "Breakfast ($20/day)",
    dailycost: 20
  },
  pool: {
    description: "Pool Access ($15/day)",
    dailycost: 15
  }
};

function chosenFeatures(amenities) {
  let total = 0;
  const chosen = [];

  if (amenities) {
    amenities.forEach((choice) => {
      let ainfo = features[choice] ?? null;
      if (ainfo) {
        chosen.push(ainfo.description);
        total += ainfo.dailycost;
      }
    });
  }

  return [total, chosen];
}

const AmenitiesList = ({ amenities = [], handleCheckboxChange }) => (
  <div className="form-group d-flex justify-content-left align-items-center mb-4">
    <label className="col-auto">Amenities:</label>

    {Object.keys(features).map((tag) => (
      <div key={tag} className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          style={{ marginLeft: "0", marginRight: "5px" }}
          id={tag}
          value={tag}
          checked={amenities.includes(tag)}
          onChange={handleCheckboxChange}
        />
        <label htmlFor={tag} className="form-check-label">
          {features[tag].description}
        </label>
      </div>
    ))}
  </div>
);

export default AmenitiesList;
export { chosenFeatures };
