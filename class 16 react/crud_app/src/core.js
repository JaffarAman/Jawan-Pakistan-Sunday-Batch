const dev = "http://localhost:5000/api/";
const prod = "https://vivacious-slug-attire.cyclic.app/api/";

export const BASE_URI = 
  window.location.hostname.split(":")[0] === "localhost" ? dev : prod;
