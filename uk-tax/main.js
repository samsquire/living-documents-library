
function run(data, callback) {

  var grossSalary = parseInt(data["gross annual salary"]);
  var salarySacrificePct = parseInt(data["salary sacrifice %"]);

  callback(null, {
    "salary sacrifice amount": grossSalary * (salarySacrificePct / 100),
    "verdict": "Your tax advantage was " + data["tax advantage"]
  });
}


module.exports = {
  run: run
};
