import React from 'react';
import styles from './Faq.module.css';

const Faq = () => {
    return (
        <section className={styles.faq}>
            <h2 className={styles.sectionTitle}>FAQ</h2>
            <p className={styles.sectionContent}>
                <strong>よくある質問</strong>: メンテナンス方法やストリングの選び方、保証に関する情報。
            </p>
        </section>
    );
};

export default Faq;
