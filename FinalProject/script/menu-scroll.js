function goToScroll(name) {
  const location = document.querySelector("#" + name).offsetTop;
  window.scrollTo({top: location, behavior: 'smooth'});
}