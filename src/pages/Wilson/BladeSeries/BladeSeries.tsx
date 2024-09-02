import React, { useEffect } from 'react';
import Layout from '../../../components/layout/Layout';
import Introduction from './Introduction';
import Features from './Features';
import History from './History';
import Models from './Models';
import Players from './Players';
import Technology from './Technology';
import Guide from './Guide';
import Faq from './Faq';
import Reviews from './Reviews';

const BladeSeries: React.FC = () => {
  // ページ遷移時にスクロール位置をリセット
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="container mx-auto p-4">
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
    </Layout>
  );
};

export default BladeSeries;
