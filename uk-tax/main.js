
function run(data) {

  var grossSalary = data["gross salary"];
  var salarySacrificePct = data["salary sacrifice %"];

  return {
    "salary sacrifice amount": grossSalary * (parseInt(salarySacrificePct) / 100)
  }
}


module.exports = run;
