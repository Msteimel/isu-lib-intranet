import { slideToggle } from './slide.js';

const showItems = document.querySelectorAll('.show--item');

export const accordion = showItems.forEach(item => {
  const button = document.querySelector('.show--title');
  const ariaValue = button.getAttribute('aria-selected');
  const contentEl = item.querySelector('.show--content');
  item.addEventListener('click', () => {
    slideToggle(contentEl, 300);
    if (ariaValue === 'false') {
      button.setAttribute('aria-selected', true);
      contentEl.setAttribute('aria-expanded', true);
    } else {
      button.setAttribute('aria-selected', false);
      contentEl.setAttribute('aria-expanded', false);
    }
  });
});
