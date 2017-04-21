alert('hi');

var listCont = document.getElementById('cont');

var items = listCont.querySelectorAll('li');

for (i=0; i < items.length; i++){
  var currItem = items[i];
  currItem.addEventListener("click", editItem);
}
function editItem(){
  console.log(this);
  alert('hi');
}
