const fadeInElems = document.querySelectorAll(".fadein");

function handleIntersection(entries) {
    entries.map((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      });
}

const observer = new IntersectionObserver(handleIntersection);
fadeInElems.forEach(elem => observer.observe(elem));