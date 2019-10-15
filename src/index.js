import { devineLog } from './js/utility/helpers.js';

const init = () => {
  document.querySelector(`body`).addEventListener(`click`, handleClickBody);
};

const handleClickBody = event => {
	console.log(event);
  console.log(event.clientX);
  console.log(event.clientX);
};

init();
