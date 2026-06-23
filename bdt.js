 const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.12 // Triggers animation when 12% of the component is visible
        };

        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); // Ensures animation only runs once for a clean UX
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-item').forEach(item => {
            revealObserver.observe(item);
        });