export default function Info({ data }) {
  const listingStyle = { textAlign: "center" };

  // Check if data is loaded successfully
  if (!data) {
    return <p>Loading...</p>; // Placeholder for loading state
  }

  // Check if there's an error
  if (data.error) {
    return <p>Error: {data.error}</p>;
  }

  // Render data if available
  return (
    <div style={listingStyle}>
      <h2>Country Information</h2>
      <p>
        <strong>Name:</strong> {data.name.common}
      </p>
      <p>
        <strong>Flag:</strong> {data.flag}
      </p>
      <p>
        <strong>Independence Status:</strong> {data.independent ? "✅" : "❌"}
      </p>
      <p>
        <strong>Status:</strong> {data.status}
      </p>
      <p>
        <strong>Language:</strong> {Object.values(data.languages).toString()}
      </p>
      <p>
        <strong>Land Area:</strong> {data.area} Sq. Feet
      </p>
      <p>
        <strong>Population:</strong> {data.population} people
      </p>
      <p>
        <strong>UN Member?</strong> {data.unMember ? "🇺🇳" : "❌"}
      </p>
      <p>
        <strong>Capital:</strong> {data.capital}
      </p>
      <p>
        <strong>Region:</strong> {data.region}
      </p>
      <p>
        <strong>Subregion:</strong> {data.subregion}
      </p>
    </div>
  );
}
