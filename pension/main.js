function run (data) {
  var sippCon = parseInt(data["monthly sipp contributions"]);
  var salarySacrificePct = parseInt(data["salary sacrifice %"]);
  var dateOfBirth = data["date of birth"];
  var grossAnnualSalary = data["gross annual salary"];
  return {
    "annual pension contributions": grossAnnualSalary * (salarySacrifice / 100),
    "tax advantage": (grossAnnualSalary * (salarySacrifice / 100)) * 0.8
  }
}

module.exports = run;
