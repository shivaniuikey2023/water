
var weightfemale = $('.input');
var one = $('.one');

one.on("click", doSome);
function doSome() {
console.log()
}

var min = $('.min')
var weight = $('.weight')
var low = $('.low')
var med = $('.med')
var high = $('.high')
var para = $('.para')
low.on("click", doSome);
  function doSome() {
  event.preventDefault();
  var apple = min.val();
  var ex = (apple * 0.0031);
  var pineapple= weight.val();
  var ozz = (pineapple * ex);
  para.append(`${ozz} oz of water`);
  }
var mina = $('.mina')
var weighta = $('.weighta')
var lowa = $('.lowa')
var meda = $('.meda')
var higha = $('.higha')
var paraa = $('.paraa')


var test1 = $('.test1');

var good = $('.good');

good.on("click", goodBtn)

function goodBtn() {
  event.preventDefault();
 test1.text(`thanks for the feedback!`);
 console.log("kisses!")
}

var ok = $('.ok');

ok.on("click", okBtn)

function okBtn() {
  event.preventDefault();
 //svar ok = $('.ok').val("");
 test1.text(`thanks for the feedback!`);
 console.log("kisses!")
}

var bad = $('.bad');

bad.on("click", badBtn)

function badBtn() {
  event.preventDefault();
 test1.text(`thanks for the feedback!`);
 console.log("kisses!")
}
