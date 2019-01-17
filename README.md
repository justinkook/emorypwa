# CoinCheck

This project is for learning purposes only.

A Progressive Web App for real-time cryptocurrency prices for BTC, ETH, and LTC with historical prices from the last 5 days.

Built using MongoDB, Express, React, and Node.js with Pusher-channel websockets API for real time feed.

## Getting Started

**1. Checkout the repo**

```
git clone https://github.com/justinkook/CoinCheck.git
git checkout master
yarn install
```

**2. Add pusher credentials to server.js and Today.js**

Inside server.js

```
const pusher = new Pusher({
    appId: 'appId here',
    key: 'yourkey',
    secret: 'secretkey',
    cluster: 'clusterserver',
    encrypted: true
});
```

Inside Today.js

```
this.pusher = new Pusher('appId', {
			cluster: 'clusterserver',
			forceTLS: true
		});
```

**3. Start server and client**

```
yarn start
```

## API Routes

**Get Latest prices of BTC, ETH, and LTC in United States Dollars.**

**GET** ```https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD```

**@Return**

```
{"BTC":{"USD":3548.77},"ETH":{"USD":115.91},"LTC":{"USD":30.1}}
```

**Post coin prices to the Pusher channel to emit to everyone subscribed to the price channel.**

**POST** ```/prices/new```

**@Params**

```
{
  prices: Return Object from GET route
};
```

**@Return**

```Status 200```

## Acknowledgments

Original Repo
 * https://github.com/yomete/pushercoins
 
Tutorial
 * https://pusher.com/tutorials/pwa-react
