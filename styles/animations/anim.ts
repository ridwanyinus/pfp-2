import gsap from 'gsap';

export const runPreloaderAnimation = (preloaderRef: React.RefObject<HTMLDivElement>) => {
  if (preloaderRef.current) {
    const timeline = gsap.timeline();

    timeline.to('.mil-preloader-animation', {
      opacity: 1,
    });

    timeline.fromTo(
      '.mil-animation-1 .mil-h3',
      {
        y: '30px',
        opacity: 0,
      },
      {
        y: '0px',
        opacity: 1,
        stagger: 0.4,
      },
    );

    timeline.to(
      '.mil-animation-1 .mil-h3',
      {
        opacity: 0,
        y: '-30',
      },
      '+=.3',
    );

    timeline.fromTo(
      '.mil-reveal-box',
      0.1,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        x: '-30',
      },
    );

    timeline.to(
      '.mil-reveal-box',
      0.45,
      {
        width: '100%',
        x: 0,
      },
      '+=.1',
    );
    timeline.to('.mil-reveal-box', {
      right: '0',
    });
    timeline.to('.mil-reveal-box', 0.3, {
      width: '0%',
    });
    timeline.fromTo(
      '.mil-animation-2 .mil-h3',
      {
        opacity: 0,
      },
      {
        opacity: 1,
      },
      '-=.5',
    );
    timeline.to(
      '.mil-animation-2 .mil-h3',
      0.6,
      {
        opacity: 0,
        y: '-30',
      },
      '+=.5',
    );
    timeline.to(
      '.mil-preloader',
      0.8,
      {
        opacity: 0,
        ease: 'sine',
      },
      '+=.2',
    );
    timeline.fromTo(
      '.mil-up',
      0.8,
      {
        opacity: 0,
        y: 40,
        scale: 0.98,
        ease: 'sine',
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        onComplete: function () {
          if (preloaderRef.current) {
            preloaderRef.current.classList.add('mil-hidden');
          }
        },
      },
      '-=1',
    );
  }
};

export const aosConfig = {
  'data-aos': 'fade-up',
  'data-aos-delay': '0',
  'data-aos-offset': '150',
  'data-aos-easing': 'ease-in-sine',
  'data-aos-duration': '350',
};

export const aosRight = {
  'data-aos': 'fade-right',
  'data-aos-delay': '0',
  'data-aos-offset': '150',
  'data-aos-easing': 'ease-in-sine',
  'data-aos-duration': '400',
};
