import React from 'react';

const ModelItem: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <div className="flex flex-col border mb-5 rounded">
    <div className="bg-gray-800 text-white p-3">
      <h3>{title}</h3>
    </div>
    <div className="flex p-3">
      <div className="w-36 h-36 bg-gray-200 flex items-center justify-center mr-5 flex-shrink-0">Image</div>
      <div className="flex-grow flex items-center">
        <p>{description}</p>
      </div>
    </div>
  </div>
);

const Models: React.FC = () => {
  return (
    <section className="mb-5">
      <h2 className="text-3xl font-black my-8 text-gray-600 border-b pb-1 border-gray-300">モデル別紹介</h2>
      <ModelItem
        title="Blade 98 (16x19)"
        description="パワーとスピンを求めるプレイヤー向け。オープンストリングパターンにより、より多くのパワーとスピンを生成。"
      />
      <ModelItem
        title="Blade 98 (18x20)"
        description="コントロールを重視するプレイヤー向け。デンスストリングパターンにより、より高いコントロールを提供。"
      />
      <ModelItem
        title="Blade 100L"
        description="軽量モデルで、スウィングスピードが速いプレイヤーに適しています。"
      />
      <ModelItem
        title="Blade 104"
        description="より大きなヘッドサイズでスウィートスポットが広く、安定感を重視したモデル。"
      />
      <ModelItem
        title="Blade SW104 Autograph"
        description="セリーナ・ウィリアムズのサイン入りモデル。競技志向のプレイヤーに最適。"
      />
    </section>
  );
};

export default Models;
