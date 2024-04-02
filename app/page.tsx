"use client";
import React, { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Canvas from "./component/canvas";
function MyComponent() {
  // 使用useRef创建一个指向canvas元素的引用
  const router = useRouter();
  return (
    <div className="">
      <p
        onClick={() => {
          router.push("/gallery");
        }}
      >
        to gallery
      </p>
    </div>
  );
}

export default MyComponent;
