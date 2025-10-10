const menuBtn  = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

function setExpanded(isExpanded) {
  menuBtn.setAttribute('aria-expanded', String(isExpanded));
}

function toggleMenu() {
  const willHide = !navLinks.classList.contains('hide');
  navLinks.classList.toggle('hide');
  setExpanded(!willHide);
}

function handleResize() {
  if (window.innerWidth >= 1000) {
    navLinks.classList.remove('hide');
    setExpanded(true);
  } else {
    navLinks.classList.add('hide');
    setExpanded(false);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  menuBtn.addEventListener('click', toggleMenu);
  handleResize();
  window.addEventListener('resize', handleResize);
});


const gallery = document.querySelector('.gallery');
let dialog;

function viewerTemplate(src, alt) {
  return `
    <figure>
      <img src="${src}" alt="${alt}">
      <button type="button" class="close-viewer" aria-label="Close viewer">×</button>
    </figure>
  `;
}

function ensureDialog() {
  if (dialog) return dialog;
  dialog = document.createElement('dialog');
  dialog.id = 'viewer';
  document.body.appendChild(dialog);


  dialog.addEventListener('click', (evt) => {
    if (evt.target === dialog) dialog.close();
  });


  dialog.addEventListener('cancel', (evt) => {
    evt.preventDefault();
    dialog.close();
  });

 
  dialog.addEventListener('close', () => {
    document.body.style.overflow = '';
  });

  return dialog;
}

gallery.addEventListener('click', (e) => {
  const img = e.target.closest('img');
  if (!img) return;

  const src = img.getAttribute('src') || '';
  const fullSrc = src.includes('-sm') ? src.replace('-sm', '-full') : src;
  const altText = img.alt || 'Photo';

  const viewer = ensureDialog();
  viewer.innerHTML = viewerTemplate(fullSrc, altText);


  viewer.querySelector('.close-viewer').addEventListener('click', () => viewer.close());

  
  document.body.style.overflow = 'hidden';
  viewer.showModal();
});
