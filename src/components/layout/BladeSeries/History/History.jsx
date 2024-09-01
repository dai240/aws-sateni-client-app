import React from 'react';
import styles from './History.module.css';

const History = () => {
    return (
        <section className={styles.history}>
            <h2 className={styles.sectionTitle}>歴史</h2>
            <div className={styles.timeline_design}>
                <ul className={styles.timeline}>
                    <li>
                        <dl>
                            <dt><span className={styles.icon}>1</span>2008年</dt>
                            <dd>初代「K Blade」がオレンジ色で登場。ノバク・ジョコビッチとジョー・ウィルフリード・ツォンガが使用。</dd>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dt><span className={styles.icon}>2</span>2012年</dt>
                            <dd>Blade 93がリリースされ、よりコンパクトなヘッドサイズで登場。</dd>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dt><span className={styles.icon}>3</span>2013年</dt>
                            <dd>Blade 98Sが登場し、スピンエフェクトテクノロジーを採用。</dd>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dt><span className={styles.icon}>4</span>2015年</dt>
                            <dd>Blade 98 (16x19)とBlade 98 (18x20)がリリース。パワーとスピン、コントロールに応じたモデル。</dd>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dt><span className={styles.icon}>5</span>2017年</dt>
                            <dd>Blade 104が登場。セリーナ・ウィリアムズが使用するモデル。</dd>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dt><span className={styles.icon}>6</span>2019年</dt>
                            <dd>Blade v7がリリース。</dd>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dt><span className={styles.icon}>7</span>2021年</dt>
                            <dd>Blade v8が登場。</dd>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dt><span className={styles.icon}>8</span>2023年</dt>
                            <dd>最新モデルBlade v9がリリース。</dd>
                        </dl>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default History;
