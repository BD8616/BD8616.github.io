particlesJS("particles-js", {

    particles: {

        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 800
            }
        },

        color: {
            value: "#8A2BE2"
        },

        shape: {
            type: "circle"
        },

        opacity: {
            value: 0.5
        },

        size: {
            value: 3
        },

        line_linked: {
            enable: true,
            distance: 150,
            color: "#8A2BE2",
            opacity: 0.5,
            width: 1
        },

        move: {
            enable: true,
            speed: 2
        }

    },

    interactivity: {

        detect_on: "canvas",

        events: {

            onhover: {
                enable: true,
                mode: "grab"
            },

            onclick: {
                enable: true,
                mode: "push"
            },

            resize: true

        },

        modes: {

            grab: {
                distance: 200,
                line_linked: {
                    opacity: 1
                }
            },

            push: {
                particles_nb: 4
            }

        }

    },

    retina_detect: true

});
