let commentsPanel = document.querySelector('main >div>div>div').children[1];
let commentsContainer = commentsPanel.querySelector('div').children[2];
let loadingSvg = document.querySelector('svg[aria-label="Cargando..."]');
clear();
const isSvgLoading = setInterval(() => {
  let loadingSvgTop = loadingSvg.getBoundingClientRect().top;
  if (loadingSvgTop != 0) {
    commentsContainer.scrollTo({
      top: commentsContainer.scrollHeight,
      behavior: 'smooth',
    });
    console.log('%c⏳Cargando comentarios...⏳', 'color:yellow');
  } else {
    console.clear();
    let anchors = commentsContainer.querySelectorAll('div > a');
    anchors.forEach(function (anchor) {
      console.log(anchor.textContent);
      return anchor;
    });

    clearInterval(isSvgLoading);
  }
}, 1000);
