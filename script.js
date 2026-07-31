particlesJS("particles-js", {
    particles: {
        number: {
            value: 120
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
            opacity: 0.4,
            width: 1
        },

        move: {
            enable: true,
            speed: 2
        }
    },

    interactivity: {
        detect_on: "canvas",

         events:{
        onhover:{
            enable:true,
            mode:"attract"
        },
        onclick:{
            enable:true,
            mode:"push"
        }
    },

    modes:{
        attract:{
            distance:200,
            duration:0.4,
            factor:5
        },

        push:{
            particles_nb:4
        }
    }
}
    retina_detect: true
});
