import React, { useState, useEffect } from "react";
import videoBgMobile from "../../assets/videoBgMobile.mp4";
import videoBgDesktop from "../../assets/videoBgDesktop.mp4";
import AuthModal from "../../components/authModal";
import { load } from "../../hooks/storage";
import * as S from "./index.styles";
import { Helmet } from "react-helmet-async";

export default function Home() {
  const isLoggedIn = load("loggedInUser");
  if (isLoggedIn) {
    window.location.href = `/games`;
  }
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Bits & Bots | Home</title>
      </Helmet>
      <S.Video
        autoPlay
        loop
        muted
        playsInline
        src={isMobile ? videoBgMobile : videoBgDesktop}
      />
      <AuthModal />
    </div>
  );
}
