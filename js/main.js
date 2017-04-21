var numOne = document.getElementById('num-one');
var numTwo = document.getElementById('num-two');
var res = document.getElementById('result');

numOne.addEventListener("input", add);
numTwo.addEventListener("input", add);

function add(){
  var one = parseFloat(numOne.value)||0;
  var two = parseFloat(numTwo.value)||0;
  var st = one+two;
  res.innerHTML = "The sum is: "+st;

  if (st > 100){
    res.innerHTML = "<strong>Mad</strong>";
  }
}

var picOne = document.getElementById('pic-one');
var picTwo = document.getElementById('pic-two');
var picThree = document.getElementById('pic-three');
var picExit = document.getElementById('pic-exit');
var picCont = document.getElementById('cont');

picOne.addEventListener("click", display);
picTwo.addEventListener("click", display);
picThree.addEventListener("click", display);
picExit.addEventListener("click", hide);

function display(){
  var picId = this.attributes["id"].value;
  /*console.log(picId);*/
  if (picId == "pic-one") {
    picCont.innerHTML = '<img id="pic_one" class="show" src="images/105H.jpg">'
    picCont.className = "";
  } else if (picId == "pic-two") {
    picCont.innerHTML = '<img id="pic_two" class="show" src="images/194H.jpg">'
    picCont.className = "";
  } else if (picId == "pic-three") {
    picCont.innerHTML = '<img id="pic_three" class="show" src="images/243H.jpg">'
    picCont.className = "";
  }
}

function hide(){
  picCont.innerHTML = "";
  picCont.className = picCont.className + "hide";
  /*console.log('Hidden');*/
}
