import React from 'react';

const Technology: React.FC = () => {
  return (
    <section className="mb-5">
      <h2 className="text-3xl font-black my-8 text-gray-600 border-b pb-1 border-gray-300">技術詳細</h2>
      <div className="mb-5 p-4 bg-gray-100 rounded">
        <h3 className="font-bold text-lg">最新技術</h3>
        <p className="mt-2">
          最新モデルのBlade V9には、FORTYFIVE°構造やParallel Drillingなどの技術が採用されており、柔軟性と安定性を高めています。
        </p>
      </div>
      <div className="mb-5 p-4 bg-gray-100 rounded">
        <h3 className="font-bold text-lg">パフォーマンス評価</h3>
        <p className="mt-2">
          Blade 100 V8は、グラウンドストローク、ボレー、サーブ、リターンなどの各ショットにおいて高いパフォーマンスを発揮します。
        </p>
      </div>
    </section>
  );
};

export default Technology;
