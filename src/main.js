
import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const form = document.querySelector('.form');
const input = form.elements['search-text'];

form.addEventListener('submit', async event => {
  event.preventDefault();
  const query = input.value.trim();

  if (!query) return;

  clearGallery();     
  showLoader();         

  try {
    const images = await getImagesByQuery(query); 

    if (images.length === 0) {
      iziToast.warning({
        title: 'Oops!',
        message: 'No images found. Try another word!',
        position: 'topRight',
      });
      return;
    }

    createGallery(images); 
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: `Something went wrong: ${error.message}`,
      position: 'topRight',
    });
  } finally {
    hideLoader(); 
  }
});
