var yahooFinance = require('yahoo-finance');
var _ = require('lodash');

function run (data, callback) {
  console.log(data);
  var purchase = data['stock purchase'];

  var symbol = purchase.questions[0].answer;
  var units = parseInt(purchase.questions[3].answer);
  var price = parseFloat(purchase.questions[1].answer);

  console.log(symbol);

  yahooFinance.snapshot({
    symbol: symbol,
    fields: ['s', 'n', 'd1', 'l1', 'y', 'r']
  }, function (err, data) {
    if (err) {
      callback(err);
      return;
    }
    var buyCost = units * price;
    var value = units * data.lastTradePriceOnly;
    var growth = parseFloat(value / buyCost) - 1;
    var pounds = (value / 100).toFixed(2);
    var buyPounds = (buyCost / 100).toFixed(2);
    var profit = value - buyCost;
    var profitPounds = (profit / 100).toFixed(2);
    callback(null, {
        "profit/loss": {
        symbol: symbol,
        type: "buy",
        value: "£" + pounds,
        buyCost: "£" + buyPounds,
        growth: (growth < 0 ? "v" : "+") + (growth.toFixed(2) * 100) + "%",
        profit: "£" + profitPounds,
        updated: new Date()
      }
    });
  });

}

function diff(lastStock, nextStock) {
  console.log("comparing", lastStock.symbol, nextStock.symbol);
  console.log("comparing", lastStock.updated, nextStock.updated);
  if (lastStock.symbol !== nextStock.symbol) {
    return false;
  }
  return nextStock.update > lastStock.update;
}

function view(previous, current) {
  console.log("previous", previous);
  var stocks = ('stocks' in previous ? previous.stocks : []);
  stocks.push(current['profit/loss']);

  return {
    stocks: _.uniqWith(stocks, diff)
  }

}

module.exports = {

  run: run,
  view: view

}
