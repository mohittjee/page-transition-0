"use client";

import {  useTransitionRouter } from "next-view-transitions";
import Link from "next/link";

const transitionFunctions = {
  topToBottom: () => {
    document.documentElement.animate(
      [
        { opacity: 1, transform: "translateY(0)" },
        { opacity: 0.2, transform: "translateY(35%)" }, // 
      ],
      {
        duration: 1500,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-old(root)",
      }
    );
    document.documentElement.animate(
      [
        { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }, 
        { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }, 
      ],
      {
        duration: 1500,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  },
  bottomToTop: () => {
    document.documentElement.animate(
      [
        { opacity: 1, transform: "translateY(0)" },
        { opacity: 0.2, transform: "translateY(-35%)" }, // 
      ],
      {
        duration: 1500,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-old(root)",
      }
    );
    document.documentElement.animate(
      [
        { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }, 
        { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }, 
      ],
      {
        duration: 1500,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  },
  leftToRight: () => {
    document.documentElement.animate(
      [
        { opacity: 1, transform: "translateX(0)" },
        { opacity: 0.2, transform: "translateX(-35%)" },
      ],
      {
        duration: 1500,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-old(root)",
      }
    );
    document.documentElement.animate(
      [
        { clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)" }, 
        { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }, 
      ],
      {
        duration: 1500,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  },
  rightToLeft: () => {
    document.documentElement.animate(
      [
        { opacity: 1, transform: "translateX(0)" },
        { opacity: 0.2, transform: "translateX(35%)" },
      ],
      {
        duration: 1500,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-old(root)",
      }
    );
    document.documentElement.animate(
      [
        { clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" },
        { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" },
      ],
      {
        duration: 1500,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  },
};

const NavLink = ({ href, children, transitionType = "topToBottom" }) => {
  const router = useTransitionRouter();

  const handleClick = (e) => {
    e.preventDefault();
    const slideInOut = transitionFunctions[transitionType] || transitionFunctions.topToBottom;
    router.push(href, {
      onTransitionReady: slideInOut,
    });
  };

  return (
    <Link onClick={handleClick} href={href}>
      {children}
    </Link>
  );
};

export default NavLink;