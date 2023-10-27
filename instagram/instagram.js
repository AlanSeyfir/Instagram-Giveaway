//IMPORTANTE: TIENES QUE INICIAR SESIÓN EN INSTAGRAM
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
    // console.log(
    //   '%c-- Se cargaron todos los comentarios --',
    //   'font-size:20px; color: #171'
    // );
    //Get the anchors
    let anchors = commentsContainer.querySelectorAll('div > a');
    anchors.forEach(function (anchor) {
      // console.log('[' + index + ']' + anchor);
      // console.log('[' + index + ']' + anchor.innerHTML);
      console.log(anchor.textContent);
      return anchor;
      //console.log('[' + index + ']' + anchor.pathname);
    });

    clearInterval(isSvgLoading);
    // console.log(
    //   '%c-- Se cargaron todos los comentarios --',
    //   'font-size:20px; color: #171'
    // );
  }
}, 1000);
