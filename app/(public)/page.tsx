"use client"


import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";



export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Image
        src="/pexels.jpg"
        alt="test"
        width={500}
        height={500}
      />


      <Button onClick={() => setCount(count + 1)}>{count}</Button>
    </div>
  );
}
