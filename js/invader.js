phina.globalize();

const SCREEN_WIDTH = 960;
const SCREEN_HEIGHT = 640;

phina.main(() => {
    const app = GameApp ({
        title: "インベーダー",
        fps: 60,
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
    });
    app.run();
});