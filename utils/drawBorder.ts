export default function drawBorder(context: CanvasRenderingContext2D, strokeStyle: "green" | "red" | "white" | "orange" | "yellow") {
    if (context) {
        context.beginPath();

        // config
        context.strokeStyle = strokeStyle;
        context.lineWidth = 4;

        // top left
        context.moveTo(100, 150);
        context.lineTo(30, 150);
        context.lineTo(30, 220);
        context.stroke();

        // top right
        context.moveTo(200, 150);
        context.lineTo(270, 150);
        context.lineTo(270, 220);
        // config
        context.strokeStyle = strokeStyle;
        context.lineWidth = 4;
        context.stroke();

        // bottom left
        context.moveTo(30, 380);
        context.lineTo(30, 450);
        context.lineTo(100,450);
        // config
        context.strokeStyle = strokeStyle;
        context.lineWidth = 4;
        context.stroke();

        // bottom right
        context.moveTo(270, 380);
        context.lineTo(270, 450);
        context.lineTo(200, 450);
        // config
        context.strokeStyle = strokeStyle;
        context.lineWidth = 4;
        context.stroke();

        context.closePath();
    }
}