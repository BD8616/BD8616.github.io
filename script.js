particlesJS("particles-js", {

    particles: {

        number: {
            value: 120,
            density: {
                enable: true,
                value_area: 900
            }
        },

        color: {
            value: "#8A2BE2"
        },

        shape: {
            type: "circle"
        },

        opacity:{
    value:0.7,
    anim:{
        enable:true,
        speed:1
    }
}

        size: {
            value: 3,
            random: true
        },

        line_linked: {
            enable: true,
            distance: 150,
            color: "#8A2BE2",
            opacity: 0.5,
            width: 1
        },

      move:{
    enable:true,
    speed:1.5,
    random:true,
    straight:false,
    out_mode:"out"
}


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

                particles_nb: 5

            }

        }

    },


    retina_detect: true

});
