'use client';

import { useState } from 'react';
import styles from '../styles/Footer.module.css';
import ContactModal from './ContactModal';

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className={styles.finalCta}>
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaTitle}>
            Lidere a Revolução Educacional no Brasil
          </h2>
          <p className={styles.ctaSubtitle}>
            Junte-se aos primeiros 1.000 professores que irão transformar a educação brasileira.<br />
            Início do programa piloto: Dezembro 2025.
          </p>
          <button className={styles.ctaButton} onClick={() => setIsModalOpen(true)}>
            Investir em Capacitação →
          </button>
          <p className={styles.ctaNote}>
            Programa exclusivo para instituições públicas e privadas
          </p>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.columns}>
            <div className={styles.column}>
              <div className={styles.logo}>
                <span className={styles.logoText}>TEACH</span>
                <span className={styles.logoSubtext}>
                  Technology Education for Advanced Classroom Help
                </span>
              </div>
              <p className={styles.description}>
                A primeira plataforma de IA para educadores no Brasil. Capacitando professores para o futuro da educação.
              </p>
            </div>

            <div className={styles.column}>
              <h4 className={styles.columnTitle}>Plataforma</h4>
              <ul className={styles.links}>
                <li><a href="#modulos">Módulos</a></li>
                <li><a href="#recursos">Recursos</a></li>
                <li><a href="#como-funciona">Como Funciona</a></li>
                <li><a href="#certificacao">Certificação</a></li>
              </ul>
            </div>

            <div className={styles.columnLogo}>
              <img
                src="/images/logo-bettered.png"
                alt="Bettered Tech Logo"
                className={styles.footerLogo}
              />
            </div>
          </div>

          <div className={styles.bottom}>
            <p className={styles.copyright}>
              © 2025 TEACH. Todos os direitos reservados.
            </p>
            <div className={styles.social}>
              <a href="#" aria-label="Instagram">Instagram</a>
              <a href="#" aria-label="LinkedIn">LinkedIn</a>
              <a href="#" aria-label="YouTube">YouTube</a>
              <a href="#" aria-label="WhatsApp">WhatsApp</a>
            </div>
          </div>
        </div>
      </footer>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
