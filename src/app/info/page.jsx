"use client";

import { useRef } from "react";
import ReactLenis from "@studio-freight/react-lenis";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

gsap.registerPlugin(useGSAP);

const Page = () => {
    const container = useRef();

    useGSAP(() => {
        const infoText = new SplitType(".info p", {
            types: "lines",
            tagName: "div",
            lineClass: "line",
        });

        infoText.lines.forEach((line) => {
            const content = line.innerHTML;
            line.innerHTML = `<span>${content}</span>`;
        });

        gsap.set(infoText.lines, {
            y: 200,
            display: "block",
        });
        gsap.to(infoText.lines, {
            y: 0,
            duration: 1.5,
            stagger: 0.1,
            ease: "Power4.out",
            delay: 1,
        });

        
        return () => {
            if (infoText) infoText.revert()
        };
    }, { scope: container });

    return (
        <ReactLenis root>
            <div className="info" ref={container}>
                <div className="col">
                    <img src="img2.png" alt="dd" />
                </div>
                <div className="col">
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
                        doloremque vitae nostrum quibusdam excepturi, quos esse aperiam!
                        Facilis, tempora eligendi?
                    </p>
                </div>
            </div>
        </ReactLenis>
    );
};

export default Page;