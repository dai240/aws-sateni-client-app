import React from 'react';
import styles from './Guide.module.css';

const Guide = () => {
    return (
        <section className={styles.guide}>
            <h2 className={styles.sectionTitle}>購入ガイド</h2>
            <div className={styles.guideDetail}>
                <h3>モデルの選び方</h3>
                <p>
                    プレイヤーレベルやプレイスタイルに応じたモデル選びのアドバイス。例えば、スピンとパワーを重視するならBlade 98 (16x19)、コントロールを重視するならBlade 98 (18x20)が適しています。
                </p>
            </div>
            <div className={styles.guideDetail}>
                <h3>購入リンク</h3>
                <p>オンラインショップや正規代理店へのリンクを掲載。</p>
            </div>
        </section>
    );
};

export default Guide;
