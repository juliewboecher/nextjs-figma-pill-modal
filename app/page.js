"use client";

import Modal from "@/components/Modal";
import Pill from "@/components/Pill";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [openModal, setOpenModal] = useState(null);

  const examples = [
    {
      label: "Mange valg",
      type: "primary",
      title: "Hick's Law",
      description:
        "Jo flere valgmuligheder, jo længere tid tager det at vælge.",
    },
    {
      label: "Store knapper",
      type: "secondary",
      title: "Fitts's Law",
      description: "Større mål tættere på brugeren er hurtigere at vælge.",
    },
    {
      label: "Kendte mønstre",
      type: "primary",
      title: "Jakob's Law",
      description:
        "Brugere forventer, at dit produkt fungerer som andre produkter, de kender.",
    },
    {
      label: "Hukommelse",
      type: "secondary",
      title: "Peak-End Rule",
      description:
        "Mennesker husker især den stærkeste oplevelse og afslutningen.",
    },
  ];

  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Laws of UX</h1>
      <p>
        {" "}
        Klik på en pill for at åbne et moral. Luk den med ecs eller klik uden
        for den.
      </p>
      <section
        className={styles.example}
        aria-label="Primary component example"
      >
        {examples.map((example) => (
          <div className={styles.pillRow} key={example.label}>
            <Pill type={example.type} onClick={() => setOpenModal(example)}>
              {example.label}
            </Pill>
          </div>
        ))}
      </section>
      <Modal
        isOpen={Boolean(openModal)}
        title={openModal?.title}
        description={openModal?.description}
        onClose={() => setOpenModal(null)}
      />
    </main>
  );
}
