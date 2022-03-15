var el = document.querySelector('#box');


var next = 1;
var loadMore = function() {
  for (var i = 0; i < 30; i++) {
    var item = document.createElement('h1');
    item.innerText = 'Masai School ' + next++;
    el.appendChild(item);
  }
}


el.addEventListener('scroll', function() {
  if (el.scrollTop + el.clientHeight >= el.scrollHeight) {
    loadMore();
  }
});

loadMore();