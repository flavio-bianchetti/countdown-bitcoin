const id = 'bitcoin';
const vs_currencies = 'usd%2Cbrl%2Ceur%2Cgbp%2Ccny%2Caud%2Ccad%2Cchf%2Cjpy%2Cars%2Ctry';
const url = `https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=${vs_currencies}`;
function coinGeckoAPI() {
  return fetch(url)
    .then((response) => response.json()
      .then((crypto) => (response.ok ? Promise.resolve(crypto) : Promise.reject(crypto))));
}

export default coinGeckoAPI
