import React, { useRef, useEffect, useState } from "react";

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [color, setColor] = useState("red"); // 假设你将来可能会使用这个状态

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return; // 如果canvas不存在，则不执行后面的代码
    const gl = canvas.getContext("2d")!;
    gl.clearRect(0, 0, canvas.width, canvas.height);
    gl.fillStyle = color;
    // 清除之前的画布内容
    gl.clearRect(0, 0, canvas.width, canvas.height);
    // 填充整个画布
    gl.fillRect(0, 0, canvas.width, canvas.height);
    // 设置正方形的颜色
    gl.fillStyle = "white"; // 正方形的颜色
    console.log(canvas.width / 2, canvas.height);
    gl.translate(canvas.width / 2, canvas.height / 2);
    gl.rotate(-Math.PI / 2);
    // gl.transform(2, 0.5, -0.5, 5, -60, 100);
    // gl.resetTransform();
    // gl.globalAlpha = 0.5;
    // 在坐标原点绘制一个100x100的正方形
    gl.fillRect(-50, -50, 100, 100);
    gl.fillStyle = "yellow";
    gl.fillRect(50, -50, 100, 100);
    gl.fillStyle = "black";
    gl.fillRect(-50, 50, 100, 100);
  }, [color]); // 将color添加为依赖项，这样每当颜色变化时，useEffect都会重新执行

  return (
    <div className="flex items-center justify-center  mt-[90px]">
      <canvas ref={canvasRef} width={1024} height={576} />
    </div>
  );
};

export default Canvas;
