"use client";
import { Navbar } from "@/components/navbar/Navbar.component";
import { MyComponent } from "@/components/test";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <section id="Home">
        <Navbar/>
      </section>
      <section id="About">
        <a href="">Who am I and WHY?</a>
      </section>
      <section id="Projects">What</section>
      <section id="Testemonials">Testimonials</section>
      <section id="Contact">Contact</section>
    </main>
  );
}
