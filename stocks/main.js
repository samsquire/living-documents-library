var yahooFinance = require('yahoo-finance');

function run (data, callback) {
  var purchase = data['stock purchase'];
  console.log(purchase);

  var symbol = purchase.questions[0].answer;
  var units = parseInt(purchase.questions[3].answer);
  var price = parseInt(purchase.questions[1].answer);

  console.log(symbol);

  yahooFinance.snapshot({
    symbol: symbol,
    fields: ['s', 'n', 'd1', 'l1', 'y', 'r']
  }, function (err, data) {
    if (err) {
      callback(err);
      return;
    }
    callback(null, data);
  });

}

module.exports = run;
