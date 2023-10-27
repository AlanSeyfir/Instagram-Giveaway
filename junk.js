let i = 0,
  x,
  auto = setInterval(function () {
    x = document.querySelectorAll(
      'article > div > div > div > div > div > div > span > div > div > span > svg'
    );
    x.forEach(function (cadaBoton) {
      let meGusta = cadaBoton.querySelector(
        'span > svg[aria-label="Me gusta"]'
      );
      if (meGusta == undefined) {
        cadaBoton.click();
      }
      window.scrollTo(0, window.innerHeight * i);
      i++;
    });
  }, 1500);

//Auto scroll loading svg
document
  .querySelector('svg[aria-label="Cargando..."]')
  .forEach((loadingSvg, index) => {
    setTimeout(() => {
      btnCorazon.click();
      window.scrollTo(0, window.innerHeight * index);
    }, index * 2000);
  });

//Message btn
document.querySelectorAll(
  'article > div > div > div > div > div > div > button'
);

//Click the ♥ element
document
  .querySelector(
    'article > div > div > div > div > div > div > span > div > div > span'
  )
  .click();

let ARRAY_LENGTH = 10;

setInterval(function checkPosts() {
  for (let i = 0; i < ARRAY_LENGTH; i++) {
    window.scrollTo(0, window.innerHeight * i);
    i++;
  }
}, 1500);

function removeDuplicate(data) {
  let unique = [];
  data.forEach((element) => {
    if (!unique.includes(element)) {
      unique.push(element);
    }
  });
  return unique;
}

// nl is a NodeList
// let myArray = Array.from(nl);

// let data = { html: anchor };
// let json = JSON.stringify(data);

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const random = Math.floor(Math.random() * months.length);
console.log(random, months[random]);

var str = 'word1 word2 word3 word4 word5 word6 word7 word8 word9 word10 word11';
function chunk(ary, len) {
  var i = 0,
    res = [];
  for (var i = 0; i < ary.length; i += len) res.push(ary.slice(i, i + len));
  return res;
}
let answer = chunk(str.match(/\w+/g), 1);
let answer1 = chunk(str.match(/\w+(.*)/g), 1);

str.match(new RegExp('(\\S+\\s+){1,' + (num - 1) + '}\\S+', 'g'));
