'use client';

import { useState } from 'react';
import styles from '../styles/ContactModal.module.css';

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    nome: '',
    instituicao: '',
    telefone: '',
    email: '',
    numProfessores: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Aqui você pode integrar com seu backend ou serviço de email
    // Por enquanto, vou simular um envio
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Obrigado! Entraremos em contato em breve.');

      // Limpar formulário após 2 segundos e fechar modal
      setTimeout(() => {
        setFormData({
          nome: '',
          instituicao: '',
          telefone: '',
          email: '',
          numProfessores: ''
        });
        setSubmitMessage('');
        onClose();
      }, 2000);
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          ✕
        </button>

        <h2 className={styles.title}>Solicitar Contato</h2>
        <p className={styles.subtitle}>
          Preencha o formulário e nossa equipe entrará em contato
        </p>

        {submitMessage ? (
          <div className={styles.successMessage}>
            <span className={styles.successIcon}>✓</span>
            <p>{submitMessage}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="nome">Nome Completo *</label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
                placeholder="Seu nome"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="instituicao">Nome da Instituição *</label>
              <input
                type="text"
                id="instituicao"
                name="instituicao"
                value={formData.instituicao}
                onChange={handleChange}
                required
                placeholder="Nome da escola/universidade"
              />
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="telefone">Telefone *</label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  required
                  placeholder="(00) 00000-0000"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="numProfessores">Nº de Professores *</label>
                <input
                  type="number"
                  id="numProfessores"
                  name="numProfessores"
                  value={formData.numProfessores}
                  onChange={handleChange}
                  required
                  min="1"
                  placeholder="Ex: 50"
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email Institucional *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="seu.email@instituicao.com.br"
              />
            </div>

            <button
              type="submit"
              className={styles.submitButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Solicitação'}
            </button>

            <p className={styles.privacy}>
              Ao enviar, você concorda com nossa política de privacidade
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
