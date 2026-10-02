document.getElementById("take").onclick = function () {
  var bill = Number(document.getElementById("bill").value);
  var paidText = document.getElementById("paid").value;
  var paid = paidText.trim() === "" ? null : Number(paidText);   // empty -> null

  var change = getChange(bill, paid);     // the call sits above the function

  var html = "";
  if (bill > paid) {
    html += "<p>Still owed: " + (bill - paid) + "</p>";
  } else {
    html += "<p>Change: " + change + "</p>";
    if (paid > bill) html += "<p>Half of the change: " + (change / 2) + "</p>";
  }
  if (paid === null) html += "<p>Kind of paid: " + typeof paid + "</p>";
  document.getElementById("out").innerHTML = html;
};

function getChange(bill, paid) {
  return paid - bill;
}