'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

export default function BirthdayPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  const customizeData = {
    greeting: "Hey",
    name: "Lydia",
    greetingText: "I really like your name btw!",
    text1: "It's your birthday!!! :D",
    textInChatBox: "Happy birthday to you!! Yeee! Many many happy blah...",
    sendButtonLabel: "Send",
    text2: "That's what I was going to do.",
    text3: "But then I stopped.",
    text4: "I realised, I wanted to do something",
    text4Adjective: "special",
    text5Entry: "Because,",
    text5Content: "You are Special",
    smiley: ":)",
    bigTextPart1: "S",
    bigTextPart2: "O",
    imagePath: "/img/lydia2.png",
    wishHeading: "Happy Birthday!",
    wishText: "May the js.prototypes always be with you! ;)",
    outroText: "Okay, now come back and tell me if you liked it.",
    replayText: "Or click, if you want to watch it again.",
    outroSmiley: ":)"
  };

  const animationTimeline = () => {
    if (!containerRef.current) return;

    // Split text for character animation
    const textBoxChars = containerRef.current.querySelector('.hbd-chatbox') as HTMLElement;
    const hbd = containerRef.current.querySelector('.wish-hbd') as HTMLElement;

    if (textBoxChars) {
      textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
        .split("")
        .join("</span><span>")}</span>`;
    }

    if (hbd) {
      hbd.innerHTML = `<span>${hbd.innerHTML
        .split("")
        .join("</span><span>")}</span>`;
    }

    const ideaTextTrans = {
      opacity: 0,
      y: -20,
      rotationX: 5,
      skewX: "15deg"
    };

    const ideaTextTransLeave = {
      opacity: 0,
      y: 20,
      rotationY: 5,
      skewX: "-15deg"
    };

    const tl = gsap.timeline();
    timelineRef.current = tl;

    tl
      .to(".container", 0.1, {
        visibility: "visible"
      })
      .from(".one", 0.7, {
        opacity: 0,
        y: 10
      })
      .from(".two", 0.4, {
        opacity: 0,
        y: 10
      })
      .to(
        ".one",
        0.7,
        {
          opacity: 0,
          y: 10
        },
        "+=2.5"
      )
      .to(
        ".two",
        0.7,
        {
          opacity: 0,
          y: 10
        },
        "-=1"
      )
      .from(".three", 0.7, {
        opacity: 0,
        y: 10
      })
      .to(
        ".three",
        0.7,
        {
          opacity: 0,
          y: 10
        },
        "+=2"
      )
      .from(".four", 0.7, {
        scale: 0.2,
        opacity: 0
      })
      .from(".fake-btn", 0.3, {
        scale: 0.2,
        opacity: 0
      })
      .staggerTo(
        ".hbd-chatbox span",
        {
          duration: 0.5,
          visibility: "visible"
        },
        0.05
      )
      .to(".fake-btn", 0.1, {
        backgroundColor: "rgb(127, 206, 248)"
      })
      .to(
        ".four",
        0.5,
        {
          scale: 0.2,
          opacity: 0,
          y: -150
        },
        "+=0.7"
      )
      .from(".idea-1", 0.7, ideaTextTrans)
      .to(".idea-1", 0.7, ideaTextTransLeave, "+=1.5")
      .from(".idea-2", 0.7, ideaTextTrans)
      .to(".idea-2", 0.7, ideaTextTransLeave, "+=1.5")
      .from(".idea-3", 0.7, ideaTextTrans)
      .to(".idea-3 strong", 0.5, {
        scale: 1.2,
        x: 10,
        backgroundColor: "rgb(21, 161, 237)",
        color: "#fff"
      })
      .to(".idea-3", 0.7, ideaTextTransLeave, "+=1.5")
      .from(".idea-4", 0.7, ideaTextTrans)
      .to(".idea-4", 0.7, ideaTextTransLeave, "+=1.5")
      .from(
        ".idea-5",
        0.7,
        {
          rotationX: 15,
          rotationZ: -10,
          skewY: "-5deg",
          y: 50,
          z: 10,
          opacity: 0
        },
        "+=0.5"
      )
      .to(
        ".idea-5 .smiley",
        0.7,
        {
          rotation: 90,
          x: 8
        },
        "+=0.4"
      )
      .to(
        ".idea-5",
        0.7,
        {
          scale: 0.2,
          opacity: 0
        },
        "+=2"
      )
      .staggerFrom(
        ".idea-6 span",
        0.8,
        {
          scale: 3,
          opacity: 0,
          rotation: 15,
          ease: "expo.out"
        },
        0.2
      )
      .staggerTo(
        ".idea-6 span",
        {
          duration: 0.8,
          scale: 3,
          opacity: 0,
          rotation: -15,
          ease: "expo.out"
        },
        0.2,
        "+=1"
      )
      .staggerFromTo(
        ".baloons img",
        {
          opacity: 0.9,
          y: 1400
        },
        {
          duration: 2.5,
          opacity: 1,
          y: -1000
        },
        0.2
      )
      .from(
        ".lydia-dp",
        0.5,
        {
          scale: 3.5,
          opacity: 0,
          x: 25,
          y: -25,
          rotationZ: -45
        },
        "-=2"
      )
      .from(".hat", 0.5, {
        x: -100,
        y: 350,
        rotation: -180,
        opacity: 0
      })
      .staggerFrom(
        ".wish-hbd span",
        0.7,
        {
          opacity: 0,
          y: -50,
          rotation: 150,
          skewX: "30deg",
          ease: "elastic.out(1, 0.5)"
        },
        0.1
      )
      .staggerFromTo(
        ".wish-hbd span",
        {
          scale: 1.4,
          rotationY: 150
        },
        {
          duration: 0.7,
          scale: 1,
          rotationY: 0,
          color: "#ff69b4",
          ease: "expo.out"
        },
        0.1,
        "party"
      )
      .from(
        ".wish h5",
        0.5,
        {
          opacity: 0,
          y: 10,
          skewX: "-15deg"
        },
        "party"
      )
      .staggerTo(
        ".eight svg",
        {
          duration: 1.5,
          visibility: "visible",
          opacity: 0,
          scale: 80,
          repeat: 3,
          repeatDelay: 1.4
        },
        0.3
      )
      .to(".six", 0.5, {
        opacity: 0,
        y: 30,
        zIndex: "-1"
      })
      .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
      .to(
        ".last-smile",
        0.5,
        {
          rotation: 90
        },
        "+=1"
      );
  };

  const handleReplay = () => {
    if (timelineRef.current) {
      timelineRef.current.restart();
    }
  };

  useEffect(() => {
    // Start animation after component mounts
    const timer = setTimeout(() => {
      animationTimeline();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container" ref={containerRef}>
      <div className="one">
        <h1 className="one">
          <span>{customizeData.greeting}</span>{' '}
          <span>{customizeData.name}</span>
        </h1>
        <p className="two">{customizeData.greetingText}</p>
      </div>

      <div className="three">
        <p>{customizeData.text1}</p>
      </div>

      <div className="four">
        <div className="text-box">
          <p className="hbd-chatbox">{customizeData.textInChatBox}</p>
          <p className="fake-btn">{customizeData.sendButtonLabel}</p>
        </div>
      </div>

      <div className="five">
        <p className="idea-1">{customizeData.text2}</p>
        <p className="idea-2">{customizeData.text3}</p>
        <p className="idea-3">
          <span>{customizeData.text4}</span>{' '}
          <strong>{customizeData.text4Adjective}</strong>.
        </p>
        <p className="idea-4">{customizeData.text5Entry}</p>
        <p className="idea-5">
          <span>{customizeData.text5Content}</span>{' '}
          <span className="smiley">{customizeData.smiley}</span>
        </p>
        <p className="idea-6">
          <span>{customizeData.bigTextPart1}</span>
          <span>{customizeData.bigTextPart2}</span>
        </p>
      </div>

      <div className="six">
        <Image 
          src={customizeData.imagePath} 
          alt="Birthday person" 
          className="lydia-dp"
          width={200}
          height={200}
        />
        <Image 
          src="/img/hat.svg" 
          alt="Party hat" 
          className="hat"
          width={80}
          height={80}
        />
        <div className="wish">
          <h3 className="wish-hbd">{customizeData.wishHeading}</h3>
          <h5>{customizeData.wishText}</h5>
        </div>
      </div>

      <div className="seven">
        <div className="baloons">
          {Array.from({ length: 33 }, (_, i) => {
            const balloonType = (i % 3) + 1;
            return (
              <Image
                key={i}
                src={`/img/ballon${balloonType}.svg`}
                alt={`Balloon ${balloonType}`}
                width={50}
                height={100}
              />
            );
          })}
        </div>
      </div>

      <div className="eight">
        {Array.from({ length: 9 }, (_, i) => (
          <svg key={i} viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" />
          </svg>
        ))}
      </div>

      <div className="nine">
        <p>{customizeData.outroText}</p>
        <p id="replay" onClick={handleReplay} style={{ cursor: 'pointer' }}>
          {customizeData.replayText}
        </p>
        <p className="last-smile">{customizeData.outroSmiley}</p>
      </div>
    </div>
  );
}