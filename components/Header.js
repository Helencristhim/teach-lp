'use client';

import { useState } from 'react';
import styles from '../styles/Header.module.css';
import ContactModal from './ContactModal';

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <span className={styles.logoText}>TEACH</span>
            <span className={styles.logoSubtext}>Technology Education for Advanced Classroom Help</span>
          </div>

          <nav className={styles.nav}>
            <a href="#modulos">Módulos</a>
            <a href="#recursos">Recursos</a>
            <a href="#como-funciona">Como Funciona</a>
          </nav>

          <div className={styles.actions}>
            <button className={styles.btnSecondary} onClick={() => setIsModalOpen(true)}>
              Fale Conosco
            </button>
            <button className={styles.btnPrimary} onClick={() => setIsModalOpen(true)}>
              Solicitar Proposta
            </button>
          </div>
        </div>
      </header>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
