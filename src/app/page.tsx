"use client";
import { useTranslation } from "react-i18next";
import Home from "@/components/home/home";
import { Navbar } from "@/components/navbar/Navbar.component";
import { Parallax } from "@/components/parallax/Parallax";
import { sunriseUrl } from "@/utils/styles";
import "../i18n";

export default function MyPortfolio() {
  const { t } = useTranslation();
  return (
    <main>
      <section id="Home">
        <Navbar />
        <Home />
      </section>
      <section id="About">
        <Parallax
          type="About"
          text1={t("@T_About_Paragraph_1")}
          text2={t("@T_About_Paragraph_2")}
          backgroundUrl="/sunrise_mountains_2.png"
          isColumnOne={true}
        />
      </section>
      <section id="Projects">
        <Parallax
          type="Projects"
          text1={t("@T_About_Paragraph_1")}
          text2={t("@T_About_Paragraph_2")}
          backgroundUrl="/sunrise_mountains_2.png"
          isColumnOne={false}
        />
      </section>
      <section id="Testemonials">
        <Parallax
          type="Testemonials"
          text1={t("@T_About_Paragraph_1")}
          text2={t("@T_About_Paragraph_2")}
          backgroundUrl="/sunrise_mountains_2.png"
          isColumnOne={true}
        />
      </section>
      <section id="Contact">
        <Parallax
          type="Contact"
          text1={t("@T_About_Paragraph_1")}
          text2={t("@T_About_Paragraph_2")}
          backgroundUrl="/sunrise_mountains_2.png"
          isColumnOne={false}
        />
      </section>
    </main>
  );
}
