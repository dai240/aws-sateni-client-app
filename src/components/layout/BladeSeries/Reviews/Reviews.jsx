import React from 'react';
import styles from './Reviews.module.css';

const Reviews = () => {
    return (
        <section className={styles.reviews}>
            <h2 className={styles.sectionTitle}>カスタマーレビュー</h2>
            <p className={styles.sectionContent}>
                <strong>ユーザーの声</strong>: 実際の使用者からのレビューやフィードバックを掲載し、信頼性を高めます。
            </p>
        </section>
    );
};

export default Reviews;
