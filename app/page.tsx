'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

export default function BirthdayPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  const customizeData = {
    greeting: "Olá",
    name: "Larissa",
    greetingText: "Mesmo estando a 550km de distância...",
    text1: "É seu aniversário!!! 🎉",
    textInChatBox: "Feliz aniversário pra você!! Yeee! Muitas felicidades e...",
    sendButtonLabel: "Enviar",
    text2: "Eu ia mandar uma mensagem normal.",
    text3: "Mas aí eu parei.",
    text4: "Pensei: vou fazer algo",
    text4Adjective: "especial",
    text5Entry: "Porque,",
    text5Content: "Você é Especial",
    smiley: ":)",
    bigTextPart1: "L",
    bigTextPart2: "A",
    imagePath: "/img/lydia2.png",
    wishHeading: "Feliz Aniversário!",
    wishText: "Que este novo ano seja repleto de alegrias e momentos especiais! 🎂✨",
    outroText: "Espero que tenha gostado dessa surprisinha!",
    replayText: "Clique aqui se quiser assistir novamente.",
    outroSmiley: "😊"
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
        0.5,
        {
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
        0.8,
        {
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
        2.5,
        {
          opacity: 0.9,
          y: 1400
        },
        {
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
        0.7,
        {
          scale: 1.4,
          rotationY: 150
        },
        {
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
        1.5,
        {
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

  const createScrapbookExplosion = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.target as HTMLButtonElement;
    const rect = btn.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    const colors = ["#ff6b6b", "#4ecdc4", "#feca57", "#ff9ff3", "#48dbfb"];
    const shapes = ["💫", "⭐", "✨", "🌟", "💎", "🎉"];

    for (let i = 0; i < 25; i++) {
      const conf = document.createElement("div");
      conf.style.position = "fixed";
      conf.style.left = `${cx}px`;
      conf.style.top = `${cy}px`;
      conf.style.fontSize = `${Math.random() * 15 + 10}px`;
      conf.style.pointerEvents = "none";
      conf.style.zIndex = "9999";
      conf.style.userSelect = "none";

      if (Math.random() > 0.5) {
        conf.textContent = shapes[Math.floor(Math.random() * shapes.length)];
      } else {
        conf.style.width = "8px";
        conf.style.height = "8px";
        conf.style.background = colors[Math.floor(Math.random() * colors.length)];
        conf.style.borderRadius = Math.random() > 0.5 ? "50%" : "0";
      }

      document.body.appendChild(conf);

      gsap.to(conf, {
        x: (Math.random() - 0.5) * 600,
        y: (Math.random() - 0.5) * 400 - 150,
        rotation: Math.random() * 720,
        opacity: 0,
        scale: 0,
        duration: Math.random() * 2 + 1,
        ease: "power2.out",
        onComplete: () => conf.remove()
      });
    }

    gsap.to(btn, {
      scale: 0.9,
      rotation: -8,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut"
    });
  };

  useEffect(() => {
    // Start animation after component mounts
    const timer = setTimeout(() => {
      animationTimeline();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
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
            alt="Larissa" 
            className="lydia-dp"
            width={200}
            height={200}
          />
          <Image 
            src="/img/hat.svg" 
            alt="Chapéu de festa" 
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
                  alt={`Balão ${balloonType}`}
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

      {/* Scrapbook Section */}
      <div className="scrapbook-section">
        <div className="scrapbook-container">
          <div className="scrapbook-title">
            <h2>Álbum de Memórias Especiais 📸</h2>
          </div>
          
          <div className="photo-page fade-in">
            <div className="tape tape-1"></div>
            <div className="tape tape-2"></div>
            <div className="photo-content">
              <div className="photo-frame" style={{background: 'linear-gradient(45deg, #ff9a9e, #fecfef)'}}>
                <div className="illustration">🎂</div>
                <div className="photo-label">Momentos Doces</div>
              </div>
              <h2 className="photo-title">CELEBRANDO VOCÊ</h2>
              <p className="photo-description">
                Cada aniversário é uma nova página na história da sua vida. Que este novo capítulo seja repleto de aventuras incríveis, sorrisos genuínos e momentos que aquecem o coração.
              </p>
              <div className="song-quote">Mais um ano de vida, mais motivos para celebrar!</div>
              <button className="ok-button" onClick={createScrapbookExplosion}>INCRÍVEL! 🎂</button>
            </div>
            <div className="sticker sticker-1">🌟</div>
            <div className="sticker sticker-2">🎉</div>
            <div className="washi-tape washi-1"></div>
          </div>

          <div className="photo-page fade-in">
            <div className="tape tape-1"></div>
            <div className="tape tape-3"></div>
            <div className="photo-content">
              <div className="photo-frame" style={{background: 'linear-gradient(45deg, #89f7fe, #66a6ff)'}}>
                <div className="illustration">💝</div>
                <div className="photo-label">Amizade Verdadeira</div>
              </div>
              <h2 className="photo-title">DISTÂNCIA NÃO IMPORTA</h2>
              <p className="photo-description">
                550km podem nos separar fisicamente, mas nossa amizade transcende qualquer distância. Você é uma pessoa especial que ilumina a vida de todos ao seu redor, mesmo de longe!
              </p>
              <div className="song-quote">Amigos de verdade estão sempre no coração</div>
              <button className="ok-button" onClick={createScrapbookExplosion}>DEMAIS! 💝</button>
            </div>
            <div className="sticker sticker-1">💕</div>
            <div className="sticker sticker-2">🌈</div>
            <div className="washi-tape washi-2"></div>
          </div>

          <div className="photo-page fade-in">
            <div className="tape tape-2"></div>
            <div className="tape tape-3"></div>
            <div className="photo-content">
              <div className="photo-frame" style={{background: 'linear-gradient(45deg, #a8edea, #fed6e3)'}}>
                <div className="illustration">🌟</div>
                <div className="photo-label">Brilho Especial</div>
              </div>
              <h2 className="photo-title">SEU BRILHO ÚNICO</h2>
              <p className="photo-description">
                Você tem esse dom especial de fazer os outros se sentirem bem. Sua energia positiva e seu jeito único de ser fazem toda a diferença no mundo. Continue brilhando sempre!
              </p>
              <div className="song-quote">Que seu brilho ilumine todos os seus caminhos!</div>
              <button className="ok-button" onClick={createScrapbookExplosion}>PERFEITO! 🌟</button>
            </div>
            <div className="sticker sticker-3">✨</div>
            <div className="sticker sticker-4">🦋</div>
            <div className="washi-tape washi-3"></div>
          </div>
        </div>
      </div>
    </>
  );
}