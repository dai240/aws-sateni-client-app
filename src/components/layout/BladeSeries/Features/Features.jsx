import React from 'react';
import styles from './Features.module.css';

const Features = () => {
    return (
        <section className={styles.features}>
            <h2 className={styles.sectionTitle}>特徴</h2>
            <div className={styles.feature}>
                <h3>フィーリングとコントロール</h3>
                <p>
                    Bladeシリーズは、プレイヤーにボールの振動を感じさせることで、より正確なショットを可能にします。柔軟性と安定性のバランスが取れた設計により、競技レベルのプレイヤーに最適です。
                </p>
            </div>
            <div className={styles.feature}>
                <h3>素材とテクノロジー</h3>
                <p>
                    編み込まれたグラファイトとバサルトを使用し、Parallel Drilling技術などの最新技術を採用しています。これにより、ラケットの安定性と反発力が向上します。
                </p>
            </div>
        </section>
    );
};

export default Features;
