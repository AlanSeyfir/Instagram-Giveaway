/**
 * INSTRUCCIONES DE USO - FUNCIONA *SOLO* CON LA CUENTA SOMOSDEREVEN -
 * 1a. Entra a la publicación de instagram donde creaste el giveaway
 *
 * 1b. Darle click derecho al mouse
 * 2b. Seleccionar "Inspect" o "Inspeccionar elemento"
 * 3b. Darle click a "console" o "consola"
 * 4b. Copiar TODO el código
 * 5b. Pegar TODO el código
 */
const YOU = 'somosdereven';
// Get the class of the scrollable element I mentioned earlier for it to work
const CONTENT_CLASS = '.x5yr21d.xw2csxc.x1odjw0f.x1n2onr6';

// Search only within the post and comment section
const contentEl = document.querySelector(CONTENT_CLASS);

// Get the target class
let targetClass;
for (const span of contentEl.querySelectorAll('span')) {
  if (span.textContent === YOU) {
    targetClass = [...span.classList].map((c) => `.${c}`).join('');
    break;
  }
}

if (!targetClass) {
  throw new Error(
    "Couldn't find the target class?! That wasn't supposed to happen..."
  );
}

// Get all participants and pick a winner!
const users = [...contentEl.querySelectorAll(targetClass)].map(
  (s) => s.textContent
);
const uniqueUsers = [...new Set(users)];
const winner = uniqueUsers[Math.floor(Math.random() * uniqueUsers.length)];

console.log(`Your winner is @${winner}!`);
console.log(`(picked randomly from ${uniqueUsers.length} participants!)`);

let height = document.body.scrollHeight;
window.scroll(0, height);
