var listCont = document.getElementById('cont');

var items = listCont.querySelectorAll('li');

for (i=0; i < items.length; i++){
  var currItem = items[i];
  currItem.addEventListener("click", editItem);
  currItem.addEventListener("blur", updateItem);
}
function editItem(){
  currItem = this;
  currItem.className = "edit";
  var thisInput = this.querySelectorAll('input');
  console.log(thisInput);
}
function updateItem(){
  this.previousElementSibling.innerHTML = this.value;
  this.parentNode.classList.remove('edit');
}
