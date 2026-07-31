<script>
tsParticles.load("tsparticles",{

background:{
    color:"#000000"
},

fpsLimit:120,

particles:{

    number:{
        value:120
    },

    color:{
        value:"#8A2BE2"
    },

    links:{
        enable:true,
        distance:150,
        color:"#8A2BE2",
        opacity:0.45,
        width:1
    },

    move:{
        enable:true,
        speed:2
    },

    opacity:{
        value:0.6
    },

    size:{
        value:{min:2,max:4}
    }

},

interactivity:{

    events:{

        onHover:{
            enable:true,
            mode:["grab","repulse"]
        },

        onClick:{
            enable:true,
            mode:"push"
        }

    },

    modes:{

        grab:{
            distance:220,
            links:{
                opacity:1
            }
        },

        repulse:{
            distance:120,
            duration:0.4
        },

        push:{
            quantity:4
        }

    }

},

detectRetina:true

});
</script>
