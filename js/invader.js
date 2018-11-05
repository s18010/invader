phina.globalize();

const SCREEN_WIDTH = 960;
const SCREEN_HEIGHT = 640;
const ASSETS = {
    "image": {
        "buro": "./assets/image/buropiyo.png",
        "mero": "./assets/image/meropiyo.png",
        "mika": "./assets/image/mikapiyo.png",
        "nasu": "./assets/image/nasupiyo.png",
        "take": "./assets/image/takepiyo.png",
        "toma": "./assets/image/tomapiyo.png"
    }
};


phina.define("MainScene", {
    superClass: "DisplayScene",
    init: function () {
        this.superInit({
            width: SCREEN_WIDTH,
            height: SCREEN_HEIGHT,
            assets: ASSETS,
        });
        this.gridX = Grid(SCREEN_WIDTH, 40);
        this.gridY = Grid(SCREEN_HEIGHT, 40);

        this.backgroundColor = "black";

        const player = Player(
            this.gridX.center(), this.gridY.span(37)).addChildTo(this);
    }
});

phina.define("Player", {
        superClass: "Sprite",
    init: function(x, y) {
            this.superInit("toma", 64, 64);
            this.setFrameIndex(10, 64, 64);
            this.x = x;
            this.y = y;
            this.SPEED = 5;
            this.bullet = null;
    },

    update: function(app) {
            const key = app.keyboard;

            if (key.getKey("left")) {
               this.x -= this.SPEED;
               if (this.left < 0) {
                   this.left = 0;
               }
            }
            if (key.getKey("right")) {
                this.x += this.SPEED;
                if (this.right > SCREEN_WIDTH) {
                    this.right = SCREEN_WIDTH;
                }
            }

            if (this.bullet == null && key.getKey("space")) {
                this.bullet = Bullet(this.x, this.top).addChildTo(this.parent);
            }

            if (this.bullet != null && this.bullet.isinvalid) {
                this.bullet.remove();
                this.bullet = null;
            }

    }
});

phina.define("Bullet", {
    superClass: "RectangleShape",
    init: function(x, y) {
        this.superInit({
            width: 5,
            height: 12,
            fill: "white",
            stroke: null,
        });
        this.x = x;
        this.y = y;
        this.isinvalid = false;
        this.SPEED = 5;

    },
    update : function() {
        this.y -= this.SPEED;
        if (this.bottom < 0) {
            this.isinvalid = true;
        }
    }
});

phina.main(() => {
    const app = GameApp ({
        title: "インベーダー",
        fps: 60,
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        assets: ASSETS,
    });
    app.run();
});