
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

var good = $('.good');
var empty = $('.paraa');
var test1 = $('.test1');
good.on("click", goodBtn)

function goodBtn() {
  event.preventDefault();
 //svar good = $('.good').val("");
 test1.append(`<p>thanks for the feedback!</p>`);
 console.log("kisses!")
}
function okBtn() {
  event.preventDefault();
 //svar ok = $('.ok').val("");
 test1.append(`<p>thanks for the feedback!</p>`);
 console.log("kisses!")
}
