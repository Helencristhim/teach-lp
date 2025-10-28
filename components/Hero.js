'use client';

import styles from '../styles/Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.badge}>
          ⭐ Primeira plataforma de IA para educadores no Brasil
        </div>

        <h1 className={styles.title}>
          Transforme a educação com <br />
          <span className={styles.gradient}>Inteligência Artificial</span>
        </h1>

        <p className={styles.subtitle}>
          Junte-se aos primeiros 1.000 professores que irão transformar a educação brasileira.<br />
          Início do programa piloto: Dezembro 2025.
        </p>

        <div className={styles.ctas}>
          <button className={styles.btnPrimary}>
            Capacite Seus Professores
          </button>
          <button className={styles.btnSecondary}>
            📖 Solicitar Demonstração
          </button>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <div className={styles.statIcon}>👥</div>
            <div className={styles.statContent}>
              <div className={styles.statNumber}>1000+</div>
              <div className={styles.statLabel}>professores na versão beta</div>
            </div>
          </div>

          <div className={styles.stat}>
            <div className={styles.statIcon}>🌍</div>
            <div className={styles.statContent}>
              <div className={styles.statNumber}>Todo Brasil</div>
              <div className={styles.statLabel}>Disponível em todo país</div>
            </div>
          </div>

          <div className={styles.stat}>
            <div className={styles.statIcon}>🏆</div>
            <div className={styles.statContent}>
              <div className={styles.statNumber}>Certificado</div>
              <div className={styles.statLabel}>Certificação oficial</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
