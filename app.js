// Define the API URL and request options
const apiUrl =
  "https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation?ip=&apikey=873dbe322aea47f89dcf729dcc8f60e8";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "5667810f67mshaf9c74a75eddddcp15c257jsn3cd5a0258e22",
    "X-RapidAPI-Host":
      "find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com",
  },
};

// Select elements from the DOM
let ip_type = document.querySelectorAll(".ip-type h2");

// Function to fetch data from the API
async function fetchData(apiUrl) {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    displayData(data); // Call displayData function to show the data
  } catch (error) {
    console.error(error);
  }
}

// Function to display data on the webpage
const displayData = (data) => {
  // Select DOM elements
  let ipInfo = document.querySelectorAll(".ip-detail h2");
  let ip_country_detail = document.querySelectorAll(".ip-country-detail h2");
  let flag = document.querySelector(".flag img");
  let longitude = document.querySelector("#longitude");
  let latitude = document.querySelector("#latitude");

  // Information to display
  let ipDetails = [
    `ISP: ${data.org}`,
    `Continent: ${data.continent}`,
    `Country: ${data.country}`,
    `City: ${data.city}`,
  ];
  let countryDetail = [
    `Currency Code: ${data.currencyCode}`,
    `Currency Name: ${data.currencyName}`,
    `Number of Cities: ${data.numOfCities}`,
    ` Geo Name ID: ${data.countryGeoNameId}`,
  ];

  // Display information on the webpage
  for (let index = 0; index < ipInfo.length; index++) {
    ipInfo[index].innerText = ipDetails[index];
    ip_country_detail[index].innerText = countryDetail[index];
  }
  ip_type[0].innerText = `IPv4: ${data.ip}`;
  latitude.innerText = `Latitude: ${data.latitude}`;
  longitude.innerText = `Longitude: ${data.longitude}`;
  flag.src = data.flag;

  console.log(data); // Log the data to console
};

// Select search button and input field
let searchBtn = document.querySelector("#searchBtn");
let inputField = document.querySelector("input");

// Event listener for search button click
searchBtn.addEventListener("click", () => {
  if (inputField.value != "") {
    // Update IP type display
    ip_type[0].innerText = `IPv4: ${inputField.value}`;
    // Create new URL with user input
    const newURL = `https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation?ip=${inputField.value}&apikey=873dbe322aea47f89dcf729dcc8f60e8`;
    // Call fetchData function with the new URL
    fetchData(newURL);
  }
});

// Initially fetch data when the page loads
fetchData(apiUrl);
