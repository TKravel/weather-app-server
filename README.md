# Weather app server code

A Express.js server to proxy API calls to weatherAPI for a React weather app

## Client code

Client code can be found at https://github.com/TKravel/weather-app-client

## Requirements

1. Client and server code installed
2. WeatherAPI accout (https://weatherAPI.com)
   ..1. Valid WeatherAPI api key

## Installation

Clone this repository. From the root of the directory run:

```bash
npm install
```

Create a .dotenv file in the root directory and set environment variables:

```javascript
WEATHER_KEY = 'Your API key';
CORS_ORIGIN = 'Client origin';
```

To start the server run:

```bash
node index.js
```

Clone the client repository the from the root of the directory run:

```bash
npm install
npm start
```

Make sure to direct the client codes fetch at the server adress

## Demo

A working demo can be found at https://eloquent-bardeen-6340b4.netlify.app
