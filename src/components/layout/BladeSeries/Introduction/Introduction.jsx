import React from 'react';
import styles from './Introduction.module.css';

const Introduction = () => {
    return (
        <section className={styles.introduction}>
            <h2 className={styles.sectionTitle}>イントロダクション</h2>
            <p className={styles.sectionContent}>
                Wilson Bladeシリーズは、競技志向のテニスプレイヤーに最適なラケットです。このシリーズは、優れたフィーリングとコントロールを提供し、世界中のプロ選手に愛用されています。Bladeシリーズのラケットは、コート上でのパフォーマンスを最大限に引き出すために設計されています。
            </p>
        </section>
    );
};

export default Introduction;
