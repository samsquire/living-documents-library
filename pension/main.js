function run (data, callback) {
  var sippCon = parseInt(data["monthly sipp contributions"]);
  var salarySacrificePct = parseInt(data["salary sacrifice %"]);
  var dateOfBirth = data["date of birth"];
  var grossAnnualSalary = data["gross annual salary"];
  var pensionContribution = grossAnnualSalary * (salarySacrificePct / 100);

  callback({
    "annual pension contributions": pensionContribution,
    "tax advantage": pensionContribution * 0.2
  });
}

module.exports = run;
