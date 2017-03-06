window.onload = showValues;

function showValues()
{
  console.log("Hello World!");
  var veg = document.getElementById("checkVeggies");
  veg.defaultChecked = true;
  var name = document.getElementById("orderName");
  name.value = "Matt";
  console.log("Finished running JavaScript");
}
