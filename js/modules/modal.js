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
  
  fotoPerfil.addEventListener('click', ampliarFoto);
  
  function fecharFoto() {
    lightbox.style.display = 'none'
  }
  
  lightboxClose.addEventListener('click', fecharFoto)
}
