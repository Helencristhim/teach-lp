import styles from '../styles/Problem.module.css';

export default function Problem() {
  return (
    <section className={styles.problem}>
      <div className={styles.container}>
        <h2 className={styles.title}>A Escolha É Óbvia</h2>
        <p className={styles.subtitle}>
          O futuro da educação já chegou. Você vai ficar para trás?
        </p>

        <div className={styles.comparison}>
          <div className={styles.cardNegative}>
            <div className={styles.cardHeader}>
              <span className={styles.icon}>❌</span>
              <h3>Sistema Atual</h3>
            </div>
            <ul className={styles.list}>
              <li>Professor estressado</li>
              <li>40 alunos por turma</li>
              <li>Ensino padronizado</li>
              <li>Resultados medíocres</li>
              <li>200 anos desatualizado</li>
            </ul>
          </div>

          <div className={styles.cardPositive}>
            <div className={styles.cardHeader}>
              <span className={styles.icon}>✅</span>
              <h3>IA + Professor Renovado</h3>
            </div>
            <ul className={styles.list}>
              <li>Tutor IA personalizado</li>
              <li>Ensino individual</li>
              <li>Adaptado ao aluno</li>
              <li>Aprendizado garantido</li>
              <li>Professor como mentor</li>
            </ul>
          </div>
        </div>

        <div className={styles.highlight}>
          <h3 className={styles.highlightTitle}>O Professor do Futuro</h3>
          <div className={styles.roles}>
            <div className={styles.role}>
              <span className={styles.roleIcon}>🎓</span>
              <span>Facilitador de experiências</span>
            </div>
            <div className={styles.role}>
              <span className={styles.roleIcon}>💡</span>
              <span>Motivador e inspirador</span>
            </div>
            <div className={styles.role}>
              <span className={styles.roleIcon}>❤️</span>
              <span>Mentor emocional</span>
            </div>
            <div className={styles.role}>
              <span className={styles.roleIcon}>🌱</span>
              <span>Desenvolvedor de habilidades</span>
            </div>
          </div>
          <p className={styles.highlightText}>
            Voltará a fazer o que sempre foi sua vocação: <strong>TRANSFORMAR VIDAS</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
