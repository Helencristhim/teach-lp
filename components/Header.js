import styles from '../styles/Header.module.css';

export default function Header() {
  return (
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
          <button className={styles.btnSecondary}>Entrar</button>
          <button className={styles.btnPrimary}>Começar Agora</button>
        </div>
      </div>
    </header>
  );
}
