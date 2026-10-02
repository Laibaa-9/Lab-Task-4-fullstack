var people = [ { name: "Guest" } ];   // no "in" answer -> shows undefined

function add(isIn) {
  var box = document.getElementById("name");
  if (box.value.trim() === "") return;
  people.push({ name: box.value.trim(), in: isIn });
  box.value = "";
  draw();
}
document.getElementById("here").onclick = function () { add(true); };
document.getElementById("out").onclick  = function () { add(false); };

function draw() {
  var body = document.getElementById("list");
  body.innerHTML = "";
  var count = 0;
  people.forEach(function (p) {
    var tr = document.createElement("tr");
    [p.name, p.in].forEach(function (v) {
      var td = document.createElement("td");
      td.textContent = String(v);
      tr.appendChild(td);
    });
    body.appendChild(tr);
    if (p.in === true) count++;       // undefined is not counted
  });
  document.getElementById("count").textContent = count;
}
draw();