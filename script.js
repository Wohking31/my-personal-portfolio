const n1 = document.querySelector('.n1');
const n2 = document.querySelector('.n2');
const n3 = document.querySelector('.n3');
const n4 = document.querySelector('.n4');
const n5 = document.querySelector('.n5');


n1.addEventListener('click', function(){
  n1.id = ('active');
  n2.id = ('');
  n3.id = ('');
  n4.id = ('');
  n5.id = ('');
});
n2.addEventListener('click', function(){
  n2.id = ('active');
  n1.id = ('');
  n3.id = ('');
  n4.id = ('');
  n5.id = ('');
});
n3.addEventListener('click', function(){
  n3.id = ('active');
  n1.id = ('');
  n2.id = ('');
  n4.id = ('');
  n5.id = ('');
});
n4.addEventListener('click', function(){
  n4.id = ('active');
  n1.id = ('');
  n3.id = ('');
  n2.id = ('');
  n5.id = ('');
});
n5.addEventListener('click', function(){
  n5.id = ('active');
  n1.id = ('');
  n3.id = ('');
  n4.id = ('');
  n2.id = ('');
});
