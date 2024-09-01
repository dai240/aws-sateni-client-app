import React from 'react';
import styles from './Technology.module.css';

const Technology = () => {
    return (
        <section className={styles.technology}>
            <h2 className={styles.sectionTitle}>技術詳細</h2>
            <div className={styles.techDetail}>
                <h3>最新技術</h3>
                <p>
                    最新モデルのBlade V9には、FORTYFIVE°構造やParallel Drillingなどの技術が採用されており、柔軟性と安定性を高めています。
                </p>
            </div>
            <div className={styles.techDetail}>
                <h3>パフォーマンス評価</h3>
                <p>
                    Blade 100 V8は、グラウンドストローク、ボレー、サーブ、リターンなどの各ショットにおいて高いパフォーマンスを発揮します。
                </p>
            </div>
        </section>
    );
};

export default Technology;
