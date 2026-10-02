var rows = [];                       // the array starts empty, each row is one object

document.getElementById("add").onclick = function () {
  var itemText  = document.getElementById("item").value;
  var qtyText   = document.getElementById("qty").value;
  var priceText = document.getElementById("price").value;

  var qty   = Number(qtyText);
  var price = priceText.trim() === "" ? NaN : Number(priceText);

  var row = { quantity: qty, price: price };
  if (itemText.trim() !== "") row.item = itemText;   // empty item -> no item property
  row.line = qty * price;                            // NaN when price is bad
  row.note = priceText + qty;                        // text + number = text
  row.priceText = priceText;                         // kept for the kind checks

  rows.push(row);
  draw(row);

  document.getElementById("item").value = "";
  document.getElementById("qty").value = "";
  document.getElementById("price").value = "";
};

function draw(last) {
  var body = document.getElementById("rows");
  body.innerHTML = "";
  var total = 0;

  rows.forEach(function (r) {
    var tr = document.createElement("tr");
    [r.item, r.quantity, r.price, r.line, r.note].forEach(function (v) {
      var td = document.createElement("td");
      td.textContent = String(v);          // undefined and NaN show as text
      tr.appendChild(td);
    });
    body.appendChild(tr);
    if (typeof r.line === "number" && !isNaN(r.line)) total += r.line;  // skip NaN
  });

  document.getElementById("total").textContent = total;

  var html = "";
  html += "<p>Kind of the total: " + typeof total + "</p>";
  html += "<p>Kind of the note: " + typeof last.note + "</p>";
  html += "<p>Price text equals price number (==): " + (last.priceText == last.price) + "</p>";
  html += "<p>Same kind (===): " + (last.priceText === last.price) + "</p>";
  if (isNaN(last.line)) html += "<p>Kind of that Line: " + typeof last.line + "</p>";
  document.getElementById("kinds").innerHTML = html;
}