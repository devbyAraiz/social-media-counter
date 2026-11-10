const counters = document.querySelectorAll('.counter');
const containers = document.querySelectorAll('.counter-container');

const speed = 200;

const startCounter = (counter) => {
    const target = +counter.getAttribute('data-target');
    let count = 0;

    const updateCounter = () => {
        const increment = target / speed;

        if (count < target) {
            count += increment;
            counter.innerText = Math.ceil(count).toLocaleString();
            requestAnimationFrame(updateCounter);
        } else {
            counter.innerText = target.toLocaleString();
        }
    };

    updateCounter();
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            const counter = entry.target.querySelector('.counter');
            startCounter(counter);
        }
    });
}, { threshold: 0.5 });

containers.forEach(container => {
    observer.observe(container);
});
