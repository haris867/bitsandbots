import React, { useState, useEffect } from "react";
import videoBgMobile from "../../assets/videoBgMobile.mp4";
import videoBgDesktop from "../../assets/videoBgDesktop.mp4";

import { styled } from "styled-components";
import AuthModal from "../../components/authModal";

const Video = styled.video`
  position: absolute;
  width: 100%;
  left: 50%;
  top: 50%;
  height: 100%;
  object-fit: cover;
  transform: translate(-50.2%, -50%);
  z-index: -1;
`;

export default function Home() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  return (
    <div>
      <Video
        autoPlay
        loop
        muted
        src={isMobile ? videoBgMobile : videoBgDesktop}
      ></Video>
      <AuthModal />
    </div>
  );
}
