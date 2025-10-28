import styles from '../styles/Modules.module.css';

export default function Modules() {
  const modules = [
    {
      id: 'starter',
      icon: '📚',
      color: 'blue',
      title: 'Starter',
      subtitle: 'Fundamentos de IA e primeiras ferramentas essenciais',
      features: [
        'ChatGPT e Claude',
        'Prompting básico',
        'Ética em IA',
        'Seu novo papel'
      ]
    },
    {
      id: 'survivor',
      icon: '🎯',
      color: 'green',
      title: 'Survivor',
      subtitle: 'Ferramentas específicas por matéria e faixa etária',
      features: [
        'Ferramentas por disciplina',
        'Criação de conteúdo',
        'Adaptação por idade',
        'Projetos práticos'
      ]
    },
    {
      id: 'explorer',
      icon: '🏆',
      color: 'purple',
      title: 'Explorer',
      subtitle: 'Automação avançada e construção de comunidades',
      features: [
        'Automação com IA',
        'Plataformas avançadas',
        'Avaliação personalizada',
        'Liderança educacional'
      ]
    },
    {
      id: 'expert',
      icon: '⭐',
      color: 'yellow',
      title: 'Expert',
      subtitle: 'Criação de apps e liderança em transformação',
      features: [
        'Desenvolvimento de apps',
        'Design curricular',
        'Formação de professores',
        'Inovação educacional'
      ]
    }
  ];

  return (
    <section className={styles.modules} id="modulos">
      <div className={styles.container}>
        <h2 className={styles.title}>
          4 Módulos Progressivos de Aprendizagem
        </h2>
        <p className={styles.subtitle}>
          Da iniciação ao domínio completo: uma jornada estruturada para transformar sua prática educacional
        </p>

        <div className={styles.grid}>
          {modules.map((module) => (
            <div key={module.id} className={`${styles.card} ${styles[module.color]}`}>
              <div className={styles.cardIcon}>{module.icon}</div>
              <h3 className={styles.cardTitle}>{module.title}</h3>
              <p className={styles.cardSubtitle}>{module.subtitle}</p>
              <ul className={styles.features}>
                {module.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <p className={styles.ctaText}>
            Invista no futuro da sua instituição educacional
          </p>
          <button className={styles.ctaButton}>
            Transforme Sua Instituição →
          </button>
        </div>
      </div>
    </section>
  );
}
