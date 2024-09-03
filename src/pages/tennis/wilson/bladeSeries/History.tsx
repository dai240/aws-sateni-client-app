import React from 'react';
import TimelineItem from '../../../../components/common/TimelineItem';

const historyData = [
  { year: '2008年', description: '初代「K Blade」がオレンジ色で登場。ノバク・ジョコビッチとジョー・ウィルフリード・ツォンガが使用。' },
  { year: '2012年', description: 'Blade 93がリリースされ、よりコンパクトなヘッドサイズで登場。' },
  { year: '2013年', description: 'Blade 98Sが登場し、スピンエフェクトテクノロジーを採用。' },
  { year: '2015年', description: 'Blade 98 (16x19)とBlade 98 (18x20)がリリース。パワーとスピン、コントロールに応じたモデル。' },
  { year: '2017年', description: 'Blade 104が登場。セリーナ・ウィリアムズが使用するモデル。' },
  { year: '2019年', description: 'Blade v7がリリース。' },
  { year: '2021年', description: 'Blade v8が登場。' },
  { year: '2023年', description: '最新モデルBlade v9がリリース。' },
];

const History: React.FC = () => {
  return (
    <section className="mb-5">
      <h2 className="text-3xl font-black my-8 text-gray-600 border-b pb-1 border-gray-300">歴史</h2>
      <div className="flex justify-start items-center ml-5 my-3 relative">
        <ul className="relative before:absolute before:content-[''] before:w-4 before:h-full before:bg-gray-200 before:left-0 before:top-0 before:rounded-full">
          {historyData.map((item, index) => (
            <TimelineItem key={index} year={item.year} description={item.description} index={index + 1} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default History;
