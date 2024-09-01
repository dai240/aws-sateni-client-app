import React from 'react';
import styles from './Players.module.css';

const Players = () => {
    return (
        <section className={styles.players}>
            <h2 className={styles.sectionTitle}>使用プレイヤー</h2>
            <p className={styles.sectionContent}>
                Bladeシリーズは、セリーナ・ウィリアムズ、ステファノス・チチパス、エマ・ラドゥカヌなど、数多くのトッププロ選手に愛用されています。これらの選手は、Bladeシリーズのラケットを使って数々の大舞台での勝利を収めています。
            </p>
        </section>
    );
};

export default Players;
