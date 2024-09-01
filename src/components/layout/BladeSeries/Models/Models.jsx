import React from 'react';
import styles from './Models.module.css';

const Models = () => {
    return (
        <section className={styles.models}>
            <h2 className={styles.sectionTitle}>モデル別紹介</h2>
            <div className={styles.model}>
                <div className={styles.modelHeader}>
                    <h3>Blade 98 (16x19)</h3>
                </div>
                <div className={styles.modelContent}>
                    <div className={styles.imagePlaceholder}>Image</div>
                    <div className={styles.modelDescription}>
                        <p>パワーとスピンを求めるプレイヤー向け。オープンストリングパターンにより、より多くのパワーとスピンを生成。</p>
                    </div>
                </div>
            </div>
            <div className={styles.model}>
                <div className={styles.modelHeader}>
                    <h3>Blade 98 (18x20)</h3>
                </div>
                <div className={styles.modelContent}>
                    <div className={styles.imagePlaceholder}>Image</div>
                    <div className={styles.modelDescription}>
                        <p>コントロールを重視するプレイヤー向け。デンスストリングパターンにより、より高いコントロールを提供。</p>
                    </div>
                </div>
            </div>
            {/* 他のモデルも同様に追加 */}
        </section>
    );
};

export default Models;
