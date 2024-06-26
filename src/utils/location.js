const roundToTwoDecimals = (num) => +`${Math.round(`${num}e+2`)}e-2`;
const deg2rad = (deg) => deg * (Math.PI / 180);

const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
  const R = 6371;
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(deg2rad(lat1))
    * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;

  return roundToTwoDecimals(d);
};

const calculateDistanceBetweenCoords = (coord1, coord2) => getDistanceFromLatLonInKm(
  coord1.lat,
  coord1.lng,
  coord2.lat,
  coord2.lng,
);

export default calculateDistanceBetweenCoords;
