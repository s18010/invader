phina.globalize();

const SCREEN_WIDTH = 960;
const SCREEN_HEIGHT = 640;

phina.define("MainScene", {
    superClass: "DisplayScene",
    init: function () {
        this.superInit({
            width: SCREEN_WIDTH,
            height: SCREEN_HEIGHT,
        });
        this.gridX = Grid(SCREEN_WIDTH, 40);
        this.gridY = Grid(SCREEN_HEIGHT, 40);

        this.backgroundColor = "black";
    }
});

phina.main(() => {
    const app = GameApp ({
        title: "インベーダー",
        fps: 60,
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
    });
    app.run();
});