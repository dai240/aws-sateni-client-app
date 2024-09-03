import React from 'react';

const Features: React.FC = () => {
  return (
    <section className="mb-5">
      <h2 className="text-3xl font-black my-8 text-gray-600 border-b pb-1 border-gray-300">特徴</h2>
      <div className="mb-5 p-4 bg-gray-100 rounded">
        <h3 className="font-bold text-lg">フィーリングとコントロール</h3>
        <p className="mt-2">
          Bladeシリーズは、プレイヤーにボールの振動を感じさせることで、より正確なショットを可能にします。柔軟性と安定性のバランスが取れた設計により、競技レベルのプレイヤーに最適です。
        </p>
      </div>
      <div className="mb-5 p-4 bg-gray-100 rounded">
        <h3 className="font-bold text-lg">素材とテクノロジー</h3>
        <p className="mt-2">
          編み込まれたグラファイトとバサルトを使用し、Parallel Drilling技術などの最新技術を採用しています。これにより、ラケットの安定性と反発力が向上します。
        </p>
      </div>
    </section>
  );
};

export default Features;
