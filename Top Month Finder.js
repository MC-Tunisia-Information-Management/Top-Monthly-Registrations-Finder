function findSheetWithMostRegistrations() {
  var sheets = [
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
  ]; // List of sheet names to search
  var maxRegistrations = 0;
  var sheetWithMaxRegistrations = "";

  // Loop through each sheet
  for (var i = 0; i < sheets.length; i++) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheets[i]);
    var lastRow = sheet.getLastRow();
    var registrationRange = sheet.getRange("A2:A" + lastRow);
    var registrationValues = registrationRange.getValues();

    // Count number of registrations in sheet
    var registrationsInSheet = 0;
    for (var j = 0; j < registrationValues.length; j++) {
      if (registrationValues[j][0] !== "") {
        registrationsInSheet++;
      }
    }

    // Check if sheet has the most registrations
    if (registrationsInSheet > maxRegistrations) {
      maxRegistrations = registrationsInSheet;
      sheetWithMaxRegistrations = sheets[i];
    }
  }

  // Write output to cell J6
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Welcome"); // Replace "Sheet1" with the name of your sheet
  sheet.getRange("Q6").setValue(sheetWithMaxRegistrations);
}
