require('dotenv').config();
const axios = require('axios');
const fs = require('fs');

const orders = JSON.parse(fs.readFileSync('orders.json', 'utf-8'));
const API_KEY = process.env.API_KEY;

async function getWeather(city) {
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );
    return res.data.weather[0].main;
  } catch (error) {
    console.error(`Error fetching weather for ${city}`);
    return null; // important for error handling
  }
}

function generateApology(customer, city, weather) {
  return `Hi ${customer}, your order to ${city} is delayed due to ${weather}. We appreciate your patience!`;
}

async function processOrders() {
  const results = await Promise.all(
    orders.map(async (order) => {
      const weather = await getWeather(order.city);

      if (!weather) {
        return order; // skip invalid city
      }

      if (["Rain", "Snow", "Extreme", "Clouds", "Clear"].includes(weather)) {
        order.status = "Delayed";
        order.message = generateApology(order.customer, order.city, weather);
      }

      return order;
    })
  );

  fs.writeFileSync('orders.json', JSON.stringify(results, null, 2));
  console.log("✅ Orders updated!");
}

processOrders();