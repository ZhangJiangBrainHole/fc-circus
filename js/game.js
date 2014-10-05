var canvas,
    context,
    scrsize = {
        width: 0,
        height: 0
    };

var player = {
    position: {
        x: 0,
        y: 0
    },
    velocity: {
        vx: 0,
        vy: 0
    }
};

var draw = {
    clear: function () {
        context.save();
        context.fillStyle = "#fff";
        context.fillRect(0, 0, scrsize.width, scrsize.height);
        context.restore();
    }
};

var music = {

};

var control = {

};

var game = {
    initialization: function () {
        canvas = document.getElementsByTagName("canvas")[0];
        context = canvas.getContext("2d");
    }
};
