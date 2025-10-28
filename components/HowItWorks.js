'use client';

import { useState } from 'react';
import styles from '../styles/HowItWorks.module.css';
import ContactModal from './ContactModal';

export default function HowItWorks() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const steps = [
    {
      number: '01',
      title: 'Entre em Contato',
      description: 'Solicite uma apresentação personalizada para entender como o TEACH pode transformar sua instituição'
    },
    {
      number: '02',
      title: 'Análise e Proposta',
      description: 'Receba uma proposta customizada baseada no tamanho e necessidades da sua equipe educacional'
    },
    {
      number: '03',
      title: 'Implementação',
      description: 'Onboarding estruturado com suporte dedicado para garantir adoção efetiva dos seus professores'
    },
    {
      number: '04',
      title: 'Resultados Mensuráveis',
      description: 'Acompanhe métricas de evolução, engajamento e impacto educacional através do nosso dashboard'
    }
  ];

  return (
    <>
      <section className={styles.howItWorks} id="como-funciona">
        <div className={styles.container}>
        <h2 className={styles.title}>Como Funciona</h2>
        <p className={styles.subtitle}>
          Um processo simples para transformar sua instituição educacional
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
          <button className={styles.ctaButton} onClick={() => setIsModalOpen(true)}>
            Solicitar Apresentação
          </button>
          <p className={styles.ctaNote}>
            ✓ Proposta personalizada • ✓ Suporte dedicado • ✓ ROI mensurável
          </p>
        </div>
      </div>
    </section>

    <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
