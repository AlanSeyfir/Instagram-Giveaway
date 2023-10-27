import { readFile } from 'fs/promises';
import { JSDOM } from 'jsdom';
import path from 'path';
import { fileURLToPath } from 'url';

const YOU = 'somosdereven';

const filepath = path.join(path.dirname(fileURLToPath(import.meta.url)), 'source.html');
const html = await readFile(filepath);
const { document } = new JSDOM(html).window;

/* This finds a "target" class based on the element holding the original poster's name
(i can't hardcode a class list to target because they're randomly generated and could change in the future,
so this will futureproof it just in case) */
let targetClass;
for (const span of document.querySelectorAll('span')) {
  if (span.textContent === YOU) {
    targetClass = [...span.classList].map((c) => `.${c}`).join('');
    break;
  }
}

if (!targetClass) {
  throw new Error('Couldn\'t find the target class?! That wasn\'t supposed to happen...');
}

// Get all participants and pick a winner!
const users = [...document.querySelectorAll(targetClass)].map((s) => s.textContent);
const uniqueUsers = [...new Set(users)];
const winner = uniqueUsers[Math.floor(Math.random() * uniqueUsers.length)];

console.log(`Your winner is @${winner}!`);
console.log(`(picked randomly from ${uniqueUsers.length} participants!)`);
