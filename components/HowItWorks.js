import styles from '../styles/HowItWorks.module.css';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Cadastro Gratuito',
      description: 'Crie sua conta em menos de 2 minutos e tenha acesso imediato à plataforma'
    },
    {
      number: '02',
      title: 'Comece pelo Starter',
      description: 'Aprenda os fundamentos de IA com 12 aulas práticas e assistência de IA integrada'
    },
    {
      number: '03',
      title: 'Evolua no Seu Ritmo',
      description: 'Avance pelos módulos, complete desafios e ganhe certificados oficiais'
    },
    {
      number: '04',
      title: 'Transforme Suas Aulas',
      description: 'Aplique o conhecimento em sala, crie conteúdo com IA e impacte seus alunos'
    }
  ];

  return (
    <section className={styles.howItWorks} id="como-funciona">
      <div className={styles.container}>
        <h2 className={styles.title}>Como Funciona</h2>
        <p className={styles.subtitle}>
          Um processo simples para transformar sua carreira educacional
        </p>

        <div className={styles.steps}>
          {steps.map((step, idx) => (
            <div key={idx} className={styles.step}>
              <div className={styles.stepNumber}>{step.number}</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
              {idx < steps.length - 1 && (
                <div className={styles.connector}>→</div>
              )}
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <button className={styles.ctaButton}>
            Começar Jornada Gratuita
          </button>
          <p className={styles.ctaNote}>
            ✓ Sem cartão de crédito • ✓ Acesso imediato • ✓ Cancele quando quiser
          </p>
        </div>
      </div>
    </section>
  );
}
