export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  
  menuButton.addEventListener('click', (event) => {
    event.stopPropagation();
    menuList.classList.toggle('active');
    menuButton.classList.toggle('active');
  })

  document.addEventListener('click', () => {
    menuList.classList.remove('active');
    menuButton.classList.remove('active');
  })
}
