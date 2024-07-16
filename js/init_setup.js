function setup(){
var list = document.getElementsByTagName("input")
var rev = list[0];
console.log(rev)
rev.remove()
};
setTimeout(setup, 700);
