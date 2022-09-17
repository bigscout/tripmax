window.onload = function () {
    gsap.registerPlugin(ScrollTrigger);

    const hero = gsap.timeline({ defaults: { duration: 0.8, opacity: 0 } });
    hero.from('nav > *', { ease: 'bounce', y: '-100%' })
        .from('.hero-left > h1', { ease: 'bounce', y: -50 })
        .from('.hero-left > p', {})
        .from('.hero-buttons', { y: '-100%' })
        .from('.img-person', { scale: 0.5, y: -30 })
        .from('.img-bg', { scale: 0.5, y: 30 });

    const whyCards = document.querySelectorAll('.why-card');
    const whySection = gsap.timeline({
        scrollTrigger: { trigger: '.why', start: 'top center' },
        defaults: { duration: 1, opacity: 0 },
    });
    whySection
        .from('.why .title-wrapper > h2', { y: -30 })
        .from('.why .title-wrapper > p', { y: -30 })
        .fromTo(whyCards, { x: '-100%', opacity: 0 }, { x: 0, opacity: 1, stagger: 0.8 });

    const dealsSection = gsap.timeline({
        scrollTrigger: { trigger: '.deals', start: 'top center' },
        defaults: { duration: 1, opacity: 0 },
    });
    dealsSection.from('.deals .title-wrapper > h2', { y: -30 }).from('.deals .title-wrapper > p', { y: -30 });

    const destinationsSection = gsap.timeline({
        scrollTrigger: { trigger: '.destinations', start: 'top center' },
        defaults: { duration: 1, opacity: 0 },
    });
    destinationsSection
        .from('.destinations .title-wrapper > h2', { y: -30 })
        .from('.destinations .title-wrapper > p', { y: -30 });

    const testimoniesSection = gsap.timeline({
        scrollTrigger: { trigger: '.testimonies', start: 'top center' },
        defaults: { duration: 1, opacity: 0 },
    });
    testimoniesSection
        .from('.testimonies .title-wrapper > h2', { y: -30 })
        .from('.testimonies .title-wrapper > p', { y: -30 });

    gsap.from('.blog .title-wrapper > h2', {
        scrollTrigger: { trigger: '.blog', start: 'top center' },
        duration: 1,
        opacity: 0,
        y: -30,
    });
};

var swiper = new Swiper('.testimonies-swipper', {
    pagination: {
        el: '.testimonies-pagination',
    },
    navigation: {
        nextEl: '.testimonies-next',
        prevEl: '.testimonies-prev',
    },
});

var posts = new Swiper('.blog-posts', {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
    pagination: {
        el: '.blog-pagination',
        clickable: true,
    },
});
