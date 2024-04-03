export default function initModal() {
  const fotoPerfil = document.querySelector('.foto');
  const lightbox = document.querySelector('.lightbox');
  const lightboxImage = document.querySelector('.lightbox-image');
  const lightboxClose = document.querySelector('.lightbox-close');
  
  function ampliarFoto(event) {
    const imageUrl = document.querySelector('img').getAttribute('data-src')
    
    lightboxImage.setAttribute('src', imageUrl)
    lightbox.style.display = 'flex'
  }
  
  function fecharFoto() {
    lightbox.style.display = 'none'
  }
  
  fotoPerfil.addEventListener('click', ampliarFoto);
  fotoPerfil.addEventListener('touch', ampliarFoto);

  lightboxClose.addEventListener('click', fecharFoto);
  lightboxClose.addEventListener('touch', fecharFoto);
}
