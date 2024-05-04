// JavaScript for testimonial slider navigation
let slideIndex = 0;

function showTestimonials() {
    const testimonials = document.getElementsByClassName("testimonial");
    for (let i = 0; i < testimonials.length; i++) {
        testimonials[i].style.transform = "translateX(" + (slideIndex * -100) + "%)";
    }
}

function prevTestimonial() {
    if (slideIndex > 0) {
        slideIndex--;
        showTestimonials();
    }
}

function nextTestimonial() {
    const testimonials = document.getElementsByClassName("testimonial");
    if (slideIndex < testimonials.length - 1) {
        slideIndex++;
        showTestimonials();
    }
}

// Initially show testimonials
showTestimonials();
