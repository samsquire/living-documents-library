function run (data) {
  var purchase = data["stock purchase"];
  var units = parseInt(purchase.questions[3].answer);
  var price = parseInt(purchase.questions[1].answer);

  return {
    "profit/loss": units * price,
  }
}

module.exports = run;
