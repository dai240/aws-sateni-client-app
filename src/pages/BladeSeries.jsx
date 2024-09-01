import React from 'react';
import Introduction from '../components/layout/BladeSeries/Introduction/Introduction';
import Features from '../components/layout/BladeSeries/Features/Features';
import History from '../components/layout/BladeSeries/History/History';
import Models from '../components/layout/BladeSeries/Models/Models';
import Players from '../components/layout/BladeSeries/Players/Players';
import Technology from '../components/layout/BladeSeries/Technology/Technology';
import Guide from '../components/layout/BladeSeries/Guide/Guide';
import Faq from '../components/layout/BladeSeries/Faq/Faq';
import Reviews from '../components/layout/BladeSeries/Reviews/Reviews';
import './BladeSeries.module.css';

const BladeSeries = () => {
    return (
        <div className="container">
            <h1 className="mainTitle">Wilson Bladeシリーズの紹介</h1>
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
