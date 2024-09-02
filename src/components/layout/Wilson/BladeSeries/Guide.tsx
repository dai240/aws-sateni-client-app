import React from 'react';

const Guide: React.FC = () => {
  return (
    <section className="mb-5">
      <h2 className="text-3xl font-black my-8 text-gray-600 border-b pb-1 border-gray-300">購入ガイド</h2>
      <div className="mb-5 p-4 bg-gray-100 rounded">
        <h3 className="font-bold text-lg">モデルの選び方</h3>
        <p className="mt-2">
          プレイヤーレベルやプレイスタイルに応じたモデル選びのアドバイス。例えば、スピンとパワーを重視するならBlade 98 (16x19)、コントロールを重視するならBlade 98 (18x20)が適しています。
        </p>
      </div>
      <div className="mb-5 p-4 bg-gray-100 rounded">
        <h3 className="font-bold text-lg">購入リンク</h3>
        <p className="mt-2">
          オンラインショップや正規代理店へのリンクを掲載。
        </p>
      </div>
    </section>
  );
};

export default Guide;
