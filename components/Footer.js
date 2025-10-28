import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <>
      <section className={styles.finalCta}>
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaTitle}>
            Pronto para Transformar a Educação?
          </h2>
          <p className={styles.ctaSubtitle}>
            Junte-se a mais de 1.000 professores que já estão revolucionando suas salas de aula com IA
          </p>
          <button className={styles.ctaButton}>
            Começar Jornada Gratuita Agora →
          </button>
          <p className={styles.ctaNote}>
            Acesso imediato • Sem cartão de crédito • Cancele quando quiser
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

            <div className={styles.column}>
              <h4 className={styles.columnTitle}>Empresa</h4>
              <ul className={styles.links}>
                <li><a href="#sobre">Sobre Nós</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#contato">Contato</a></li>
                <li><a href="#carreiras">Carreiras</a></li>
              </ul>
            </div>

            <div className={styles.column}>
              <h4 className={styles.columnTitle}>Suporte</h4>
              <ul className={styles.links}>
                <li><a href="#ajuda">Central de Ajuda</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#privacidade">Privacidade</a></li>
                <li><a href="#termos">Termos de Uso</a></li>
              </ul>
            </div>
          </div>

          <div className={styles.bottom}>
            <p className={styles.copyright}>
              © 2025 TEACH. Todos os direitos reservados.
            </p>
            <div className={styles.social}>
              <a href="#" aria-label="Instagram">📸</a>
              <a href="#" aria-label="LinkedIn">💼</a>
              <a href="#" aria-label="YouTube">🎥</a>
              <a href="#" aria-label="WhatsApp">💬</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
