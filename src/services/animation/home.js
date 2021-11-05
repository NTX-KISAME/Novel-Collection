import anime from "animejs";

export default {
    welcomeText: (subtitle, title) => {
      anime({
          targets: subtitle,
          translateY: [{ value: 15.0 + 'rem', duration:0 }, { value: 0 + 'rem', duration:1200 }],
          opacity: [{ value: 0.0, duration:0 }, { value: 1.0, duration:1500 }],
          easing: 'easeOutExpo'
      })
      anime({
            targets: title,
            translateY: [{ value: 15.0 + 'rem', duration:0 }, { value: 0 + 'rem', duration:1200, delay: 120 }],
            opacity: [{ value: 0.0, duration:0 }, { value: 1.0, duration:1500 }],
            easing: 'easeOutExpo'
      })
    },

    buttonAnimation: (element) => {
        anime({
            targets: element,
            translateY: [{ value:-20, duration:0 }, {value: 0, duration: 1200 }, {value: 0, duration: 0 }, {value: -20, duration: 1200 }],
            loop: true,
            easing:'easeInOutExpo'
        })
    },
    gradientAndTextIn:(gradient, title, subtitle) => {
        gradient.hidden = false
        anime({
            targets:gradient,
            opacity: [{ value:0.0, duration:0 }, {value: 1.0, duration: 750}],
            easing: 'easeOutExpo'
        })
        anime({
            targets: title,
            translateX: 9.0 + 'rem',
            easing: 'easeOutExpo'
        })
        anime({
            targets: subtitle,
            translateX: -4.0 + 'rem',
            easing: 'easeOutExpo'
        })
    },
    gradientAndTextOut:(gradient, title, subtitle) => {
        anime({
            targets:gradient,
            opacity: [{ value:1.0, duration:0 }, {value: 0.0, duration: 750}],
            easing: 'easeInExpo',
            complete: () => {
                gradient.hidden = true
            }
        })
        anime({
            targets: title,
            translateX: 0,
            easing: 'easeInExpo'
        })
        anime({
            targets: subtitle,
            translateX: 0,
            easing: 'easeInExpo'
        })
    },
}
