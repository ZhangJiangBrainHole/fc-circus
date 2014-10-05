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
