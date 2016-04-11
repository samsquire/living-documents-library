function run (data, callback) {
  var purchase = data["stock purchase"];
  var units = parseInt(purchase.questions[3].answer);
  var price = parseInt(purchase.questions[1].answer);

  callback({
    "profit/loss": units * price,
  });
}

module.exports = run;
