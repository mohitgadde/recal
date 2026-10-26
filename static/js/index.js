// More Works dropdown
function toggleMoreWorks() {
  document.getElementById('moreWorksDropdown').classList.toggle('show');
  document.querySelector('.more-works-btn').classList.toggle('active');
}

function closeMoreWorks() {
  document.getElementById('moreWorksDropdown').classList.remove('show');
  document.querySelector('.more-works-btn').classList.remove('active');
}

document.addEventListener('click', function (event) {
  const container = document.querySelector('.more-works-container');
  if (container && !container.contains(event.target)) closeMoreWorks();
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') closeMoreWorks();
});

// Copy BibTeX to clipboard
function copyBibTeX() {
  const text = document.getElementById('bibtex-code').textContent;
  const button = document.querySelector('.copy-bibtex-btn');
  const label = button.querySelector('.copy-text');
  navigator.clipboard.writeText(text).then(function () {
    button.classList.add('copied');
    label.textContent = 'Copied';
    setTimeout(function () {
      button.classList.remove('copied');
      label.textContent = 'Copy';
    }, 2000);
  });
}

// Scroll to top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('scroll', function () {
  document.querySelector('.scroll-to-top').classList.toggle('visible', window.pageYOffset > 300);
});

// Play muted demo videos only while they are on screen
document.addEventListener('DOMContentLoaded', function () {
  const videos = document.querySelectorAll('video[data-autoplay]');
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) entry.target.play().catch(function () {});
      else entry.target.pause();
    });
  }, { threshold: 0.4 });
  videos.forEach(function (video) { observer.observe(video); });
});
