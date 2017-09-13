function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const list = document.querySelectorAll('.ranked-list li');
  for (let i = 0; i < list.length; i++) {
    list[i].innerHTML = parseInt(list[i].innerHTML, 10) + n;
  }
}

function deepestChild() {
  let current = document.querySelector("div#grand-node");
  let next = [];
  while (current) {
    if (current.children.length > 0) {
      for (var i = 0; i < current.children.length; i++) {
        next.push(current.children[i]);
      }
      current = next.shift();
    } else {
      return current;
    }
  }
}
