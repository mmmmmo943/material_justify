import React, { useRef, useEffect } from "react";

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const text = "酸酸的jiojio小不点喜欢吃"; // 需要滚动的文字
  let x = 0; // 文字的起始x坐标

  useEffect(() => {
    const canvas = canvasRef.current!;
    const gl = canvas.getContext("2d");

    const draw = () => {
      if (!canvas || !gl) return;

      const width = canvas.width;
      const height = canvas.height;

      gl.clearRect(0, 0, width, height); // 清除画布
      gl.fillStyle = "white"; // 设置画布背景为白色
      gl.fillRect(0, 0, canvas.width, canvas.height); // 填充整个画布为白色

      gl.fillStyle = "red"; // 文字的颜色
      gl.textBaseline = "middle"; // 设置文字的基线为中间
      gl.textAlign = "left"; // 设置文字的对齐方式为左对齐
      gl.font = "30px Arial"; // 设置字体大小和类型

      gl.fillText(text, x, height / 2); // 绘制文字

      x -= 2; // 更新文字的x坐标，使其向左移动
      if (x < -gl.measureText(text).width) {
        x = width; // 如果文字完全滚出画布，则重新从右侧开始
      }

      requestAnimationFrame(draw); // 请求下一帧动画
    };

    draw(); // 开始动画循环
  }, []); // 传入一个空的依赖数组，确保effect只在挂载时运行一次

  return (
    <div className="flex items-center justify-center mt-[90px]">
      <canvas ref={canvasRef} width={1024} height={576} />
    </div>
  );
};

export default Canvas;
