import _ from 'lodash';
import './style.css';
import Prof from './prof-photo.jpg';
import Data from './data.xml';

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Prof;

  element.appendChild(myIcon);

	console.log(Data)

  return element;
}

document.body.appendChild(component());
