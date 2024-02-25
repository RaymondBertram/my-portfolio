"use client";
import Home from "@/components/home/home";
import { Navbar } from "@/components/navbar/Navbar.component";
import { Parallax } from "@/components/parallax/Parallax";
import { sunriseUrl } from "@/utils/styles";

import styles from "./page.module.css";

export default function MyPortfolio() {
  return (
    <main>
      <section id="Home">
        <Navbar/>
        <Home/>
      </section>
      <section id="About"><Parallax type="About"/></section>
      <section id="Projects"><Parallax type="Projects"/></section>
      <section id="Testemonials"><Parallax type="Testemonials"/></section>
      <section id="Contact"><Parallax type="Contact"/></section>
    </main>
  );
}
