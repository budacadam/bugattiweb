setTimeout(() => {
    const box = document.getElementById('explore');
    box.style.visibility = 'visible';
}, 1000);
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("topBtn").style.display = "block";
  } else {
    document.getElementById("topBtn").style.display = "none";
  }
}

function backtotopFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
}
const scrollText = document.querySelector('.scroll-text');

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function onScroll() {
  if (isElementInViewport(scrollText)) {
    scrollText.classList.add('animate');
    window.removeEventListener('scroll', onScroll);
  }
}

window.addEventListener('scroll', onScroll);