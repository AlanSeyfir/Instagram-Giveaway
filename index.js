const previewFile = () => {
  const content = document.querySelector('.content');
  const [file] = document.querySelector('input[type=file]').files;
  const reader = new FileReader();

  reader.addEventListener(
    'load',
    () => {
      text = reader.result;
      let first = text.replaceAll('VM4740:25', '');
      let second = first.replaceAll('VM303:14 Console was cleared', '');
      const regex = second.match(/\w+(.*)/g);

      function chunk(ary, len) {
        let i = 0,
          res = [];
        for (let i = 0; i < ary.length; i += len)
          res.push(ary.slice(i, i + len));
        return res;
      }
      let splitWords = chunk(regex, 1);

      let stringArray = splitWords.map(JSON.stringify);
      let uniqueStringArray = new Set(stringArray);
      let uniqueArray = Array.from(uniqueStringArray, JSON.parse);

      const random = Math.floor(Math.random() * uniqueArray.length);
      console.log('Winner is: ' + uniqueArray[random]);
      console.log(uniqueArray[random]);

      content.innerText = 'Winner is: ' + uniqueArray[random];
      confetti({
        particleCount: 700,
        startVelocity: 250,
        angle: 60,
        origin: {
          x: -0.5,
          y: 1.5,
        },
        ticks: 1000,
      });

      confetti({
        particleCount: 700,
        startVelocity: 250,
        angle: 120,
        origin: {
          x: 1.5,
          y: 1.5,
        },
        ticks: 800,
      });
    },
    false
  );

  if (file) {
    reader.readAsText(file);
  }
};

const dropzone = document.querySelector('.dropzone');
const setActive = (dropzone, active = true) => {
  const hasActiveClass = dropzone.classList.contains('active');

  if (active && !hasActiveClass) {
    return dropzone.classList.add('active');
  }

  if (!active && hasActiveClass) {
    return dropzone.classList.remove('active');
  }
};

dropzone.addEventListener('dragcenter', (e) => {
  e.preventDefault();
  setActive(dropzone);
});

dropzone.addEventListener('dragover', (e) => {
  e.preventDefault();
  setActive(dropzone);
});

dropzone.addEventListener('dragleave', (e) => {
  e.preventDefault();
  setActive(dropzone, false);
});

dropzone.addEventListener('drop', (e) => {
  e.preventDefault();
  setActive(dropzone, false);

  [files] = e.dataTransger;
  handleLogFile(files);
});

const handleLogFile = (files) => {
  let validFiles = [...files].filter((file) => [''].includes(file.type));

  uploadFiles(validFiles);
};

// const uploadFiles = async (files) => {
//   const formatData =
// }

function copyToClipboard() {
  let copyText = document.getElementById('text');
  copyText.select();
  copyText.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(copyText.value);
}

//https://www.kirupa.com/about/whatiskirupa.htm

const handleForm = () => {
  let form = document.getElementById('form');
};

const dropArea = document.querySelector('.drag-area');
let button = dropArea.querySelector('.button');
let input = dropArea.querySelector('input');
button.onclick = () => {
  input.onclick();
};
