import React from 'react';
import { FaGithub, FaLinkedin, FaGoogle, FaPhone } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <h3 className="section-title">DISCUTONS DE VOS OBJECTIFS</h3>
                <p>
                    À la recherche d’une alternance pour ma 3e année en développement web dès septembre 2025 sur un rythme de 2 semaines en entreprise / 1 semaine en cours. 
                    Je suis disponible et motivé pour un éventuel entretient.
                </p>
                <h2 className="section-subtitle">OÙ ME TROUVER</h2>

                <div className="contact-info">
                    <div className="contact-item">
                        <FaPhone className="contact-icon phone" />
                        <h4>Mon numéro de téléphone</h4>
                        <p>
                            <a href="tel:+33652984336">+33 6 52 98 43 36</a>
                        </p>
                    </div>

                    <div className="contact-item">
                        <FaGoogle className="contact-icon email" />
                        <h4>Mon adresse mail</h4>
                        <p>
                            <a href="mailto:shun.mampuya@gmail.com">shun.mampuya@gmail.com</a>
                        </p>
                    </div>

                    <div className="contact-item">
                        <FaLinkedin className="contact-icon linkedin" />
                        <h4>LinkedIn</h4>
                        <p>
                            <a href="https://www.linkedin.com/in/shun-mampuya-499162295/" target="_blank" rel="noopener noreferrer">
                                Mon profil LinkedIn
                            </a>
                        </p>
                    </div>

                    <div className="contact-item">
                        <FaGithub className="contact-icon github" />
                        <h4>GitHub</h4>
                        <p>
                            <a href="https://github.com/shunouu/" target="_blank" rel="noopener noreferrer">
                                Mon profil GitHub
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;