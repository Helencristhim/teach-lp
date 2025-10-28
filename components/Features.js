import styles from '../styles/Features.module.css';

export default function Features() {
  const features = [
    {
      icon: '🤖',
      title: 'Assistente IA de Ensino',
      description: 'Chat inteligente para tirar dúvidas sobre IA, criar conteúdo personalizado e sugerir atividades práticas'
    },
    {
      icon: '🎮',
      title: 'Gamificação Completa',
      description: 'Sistema de pontos, badges, rankings e desafios para manter você motivado durante toda a jornada'
    },
    {
      icon: '🎯',
      title: 'Trilhas Personalizadas',
      description: 'Caminho de aprendizagem adaptado ao seu perfil, objetivos e ritmo de estudo'
    },
    {
      icon: '👥',
      title: 'Fórum da Comunidade',
      description: 'Conecte-se com outros educadores, compartilhe experiências e aprenda colaborativamente'
    },
    {
      icon: '📊',
      title: 'Aulas ao Vivo com Mestres',
      description: 'Sessões ao vivo com especialistas em IA educacional para aprofundar seu conhecimento'
    },
    {
      icon: '🎓',
      title: 'Certificação Oficial',
      description: 'Receba certificados oficiais a cada módulo completado para valorizar seu currículo'
    },
    {
      icon: '📚',
      title: 'Biblioteca de Recursos',
      description: 'Acesso a templates, exemplos, ferramentas e materiais prontos para usar em suas aulas'
    },
    {
      icon: '📅',
      title: 'Calendário de Eventos',
      description: 'Fique por dentro de webinars, workshops e eventos exclusivos da comunidade TEACH'
    }
  ];

  return (
    <section className={styles.features} id="recursos">
      <div className={styles.container}>
        <h2 className={styles.title}>
          Uma Plataforma Completa para Sua Transformação
        </h2>
        <p className={styles.subtitle}>
          Tudo que você precisa para se tornar um educador do futuro, em um só lugar
        </p>

        <div className={styles.grid}>
          {features.map((feature, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>{feature.icon}</span>
              </div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
