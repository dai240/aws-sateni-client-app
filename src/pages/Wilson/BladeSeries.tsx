import React from 'react';
import Introduction from '../../components/layout/Wilson/BladeSeries/Introduction';
import Features from '../../components/layout/Wilson/BladeSeries/Features';
import History from '../../components/layout/Wilson/BladeSeries/History';
import Models from '../../components/layout/Wilson/BladeSeries/Models';
import Players from '../../components/layout/Wilson/BladeSeries/Players';
import Technology from '../../components/layout/Wilson/BladeSeries/Technology';
import Guide from '../../components/layout/Wilson/BladeSeries/Guide';
import Faq from '../../components/layout/Wilson/BladeSeries/Faq';
import Reviews from '../../components/layout/Wilson/BladeSeries/Reviews';

const BladeSeries: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto p-5 bg-white shadow-lg rounded">
      <h1 className="text-4xl font-bold border-b-2 border-gray-800 pb-3 mb-6">Wilson Bladeシリーズの紹介</h1>
      <Introduction />
      <Features />
      <History />
      <Models />
      <Players />
      <Technology />
      <Guide />
      <Faq />
      <Reviews />
    </div>
  );
};

export default BladeSeries;
