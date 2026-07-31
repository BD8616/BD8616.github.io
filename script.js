javascript id="olqvtq"
tsParticles.load("tsparticles", {

    background: {
        color: {
            value: "#000000"
        }
    },

    fpsLimit: 120,

    particles: {

        number: {
            value: 120,
            density: {
                enable: true,
                area: 800
            }
        },

        color: {
            value: "#8A2BE2"
        },

        shape: {
            type: "circle"
        },

        opacity: {
            value: 0.6
        },

        size: {
            value: {
                min: 2,
                max: 4
            }
        },

        links: {
            enable: true,
            distance: 150,
            color: "#8A2BE2",
            opacity: 0.45,
            width: 1
        },

        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            outModes: {
                default: "bounce"
            }
        }

    },

    interactivity: {

        events: {

            onHover: {
                enable: true,
                mode: "grab"
            },

            onClick: {
                enable: true,
                mode: "push"
            },

            resize: true

        },

        modes: {

            grab: {
                distance: 220,
                links: {
                    opacity: 1
                }
            },

            push: {
                quantity: 4
            }

        }

    },

    detectRetina: true

});
