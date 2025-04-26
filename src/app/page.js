"use client";

import { useRef } from "react";
import ReactLenis from "@studio-freight/react-lenis";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

gsap.registerPlugin(useGSAP);


export default function Home() {

  const container = useRef();
  useGSAP(() => {
    const heroText = new SplitType(".home h1", { types: "char" });
    gsap.set(heroText.chars, { y: 200 });
    gsap.to(heroText.chars, {
      y: 0,
      duration: 1,
      stagger: 0.1,
      ease: "Power4.out",
      delay: .9,
    })
  }, { scope: container })


  return (
    <ReactLenis root >
      <div className="home" ref={container}>
        <h1 className="">Offsense</h1>
      </div>
    </ReactLenis>
  );
}
