export const options = {
  method: "GET",
  url: "https://flight-radar1.p.rapidapi.com/flights/list-in-boundary",
  params: {
    bl_lat: "34.946204",
    bl_lng: "23.867213",
    tr_lat: "42.833202",
    tr_lng: "44.653345",
    limit: "300",
  },
  headers: {
    "X-RapidAPI-Key": "08e43dce96msheeeda330a374c55p16fab4jsn908e17c568f7",
    "X-RapidAPI-Host": "flight-radar1.p.rapidapi.com",
  },
};

export const options2 = {
  headers: {
    "X-RapidAPI-Key": "08e43dce96msheeeda330a374c55p16fab4jsn908e17c568f7",
    "X-RapidAPI-Host": "flight-radar1.p.rapidapi.com",
  },
};
