import Modal from "@/components/Modal";
import Pill from "@/components/Pill";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <h1>Components</h1>
      <div className={styles.pills}>
        <Pill />
      </div>
      {/* A closed <dialog> is hidden. You will see the modal once a pill can open it. */}
      <Modal />
    </main>
  );
}
