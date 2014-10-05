var canvas,
    context,
    scrsize = {
        width: 0,
        height: 0
    };

var player = {
    initialization: function () {
    },
    position: {
        x: 0,
        y: 0
    },
    size: {
        width: 0,
        height: 0
    },
    velocity: {
        vx: 0,
        vy: 0
    },
    frameImages: []
};

var background = {
    initialization: function () {
        draw.addLayer();
    },
    position: {
        x: 0,
        y: 0
    },
    size: {
        width: 0,
        height: 0
    }

};

var draw = {
    /*
    * layer
    *   + [function] initialization
    *       calculate this layer's information in current frame
    *   + [object] position
    *       {
    *           x, y
    *       }
    *   + [object] size
    *       {
    *           width, height
    *       }
    *   + [string] pictureURL
    * */
    layers: [],

    addLayer: function (layer) {
        draw.layers.push(layer);
    },

    removeLayer: function (layer) {
        var index = draw.layers.indexOf(layer);
        if(index !== -1)
            draw.layers.splice(index, 1);
    },

    // clear screen (to #fff)
    clear: function () {
        context.save();
        context.fillStyle = "#fff";
        context.fillRect(0, 0, scrsize.width, scrsize.height);
        context.restore();
    },

    // draw current frame
    display: function () {
        draw.clear();
        for(var i = 0; i < draw.layers.length; ++i) {
            var layer = draw.layers[i];
            layer.initialization && layer.initialization();
            var image = new Image();
            image.src = layer.pictureURL;
            context.drawImage(image, layer.position.x, layer.position.y, layer.size.width, layer.size.height);
        }
    }
};

var music = {
    startBGM: function (levelCount) {
        var wait = 0;

        switch (levelCount) {
            case 0:
                //play BGM-L0a3.mp3/midi
                break;
            case 1:
                //play BGM-L1a2.mp3/midi
                break;
            case 2:
                //play BGM-L1a2.mp3/midi
                break;
            case 3:
                //play BGM-L0a3.mp3/midi
                break;
            case 4:
                //play BGM-L4.mp3/midi
                break;
        }

    },
    startDeathMusic: function () {
        var wait = 0;

        //TODO How can I return a value to tell who use this function that DeathMusic is already done?
        //return a value to tell function game to restart this level
        //play DeathMusic.mp3/midi
        //return "musicFinish";
    }
};

var control = {

};

var game = {
    initialization: function () {
        canvas = document.getElementsByTagName("canvas")[0];
        context = canvas.getContext("2d");
    }
};

game.initialization();
