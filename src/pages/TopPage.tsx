import React from 'react';
import { Link } from 'react-router-dom'; // React Routerを使用する場合

import racketImage from '../assets/images/tennis_racket_design.jpeg';
import shoeImage from '../assets/images/tennis_shoe_design.jpeg';
import apparelImage from '../assets/images/tennis_apparel_design.jpeg';

const TopPage: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* メインビジュアルセクション */}
      <header className="bg-gradient-to-r from-pink-500 to-orange-400 text-white p-10 text-center">
        <h1 className="text-5xl font-bold mb-4">テニスをもっと楽しく！</h1>
        <p className="text-xl">最新の情報と共に、テニスの魅力をお届けします。</p>
        <button className="mt-6 bg-white text-pink-500 font-bold py-2 px-4 rounded-full shadow-lg hover:bg-pink-100">
          詳しく見る
        </button>
      </header>

      {/* 注目コンテンツセクション */}
      <section className="p-10">
        <h2 className="text-3xl font-bold mb-6">注目コンテンツ</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-2">最新ニュース</h3>
            <p>テニス界の最新ニュースをチェックしましょう！</p>
            <Link to="/news" className="text-blue-500 hover:underline">
              ニュースを見る
            </Link>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-2">おすすめ動画</h3>
            <p>話題のYouTuberの動画をピックアップ。</p>
            <Link to="/videos" className="text-blue-500 hover:underline">
              動画を見る
            </Link>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-2">新着ブログ</h3>
            <p>最新のブログ記事でテニスの知識を深めましょう。</p>
            <Link to="/blog" className="text-blue-500 hover:underline">
              ブログを見る
            </Link>
          </div>
        </div>
      </section>

      {/* 製品紹介セクション */}
      <section className="bg-gray-50 p-10">
        <h2 className="text-3xl font-bold mb-6">注目の製品</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Link to="/wilson/bladeseries">
              <img src={racketImage} alt="ラケット" className="w-full h-40 object-cover mb-4 rounded" />
              <h3 className="text-2xl font-bold">Blade 98</h3>
              <p>パワーとコントロールを兼ね備えたラケット。</p>
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Link to="/products/shoes">
              <img src={shoeImage} alt="シューズ" className="w-full h-40 object-cover mb-4 rounded" />
              <h3 className="text-2xl font-bold">テニスシューズ</h3>
              <p>快適な履き心地を提供する最新シューズ。</p>
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Link to="/products/apparel">
              <img src={apparelImage} alt="ウェア" className="w-full h-40 object-cover mb-4 rounded" />
              <h3 className="text-2xl font-bold">テニスウェア</h3>
              <p>スタイリッシュで機能的なテニスウェア。</p>
            </Link>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-gray-800 text-white p-6 text-center">
        <p>&copy; 2024 テニス情報サイト. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default TopPage;
