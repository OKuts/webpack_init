import face from './assets/kuts.svg';
import face1 from './assets/kuts.inline.svg';
import './styles/main.scss';

import b from './add';

const a: string = 'Hello World!';

console.log(b * b, a);

const img = document.createElement('div');
img.innerHTML = face1;
document.body.appendChild(img);

const img1 = document.createElement('img');
img1.src = face;
document.body.appendChild(img1);
