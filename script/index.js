let currentSlide = 0;
        const slides = document.querySelectorAll('.slide');

        function nextSlide() {
            // Hide current slide
            slides[currentSlide].classList.remove('active');
            
            // Go to next slide
            currentSlide = (currentSlide + 1) % slides.length;
            
            // Show new slide
            slides[currentSlide].classList.add('active');
        }

        // Auto change every 3 seconds
        setInterval(nextSlide, 3000);