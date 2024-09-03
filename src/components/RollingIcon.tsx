import React, { useEffect, useState } from 'react';

const RollingIcon: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // TODO これを使うか、ちゃんと設定する
  const startScroll = 200; // アニメーションが開始するスクロール位置
  const endScroll = 800;   // アニメーションが終了するスクロール位置

  const isInRange = scrollY >= startScroll && scrollY <= endScroll;
  const rotationDegree = isInRange ? scrollY - startScroll : 0;

  const iconStyle: React.CSSProperties = {
    transform: `rotate(${rotationDegree}deg) scale(0.8)`, // ここで80%に縮小
    position: 'absolute', // 親要素にrelativeが必要
    top: '10px',
    left: '10px',
    zIndex: 10,
    width: '50px',
    height: '50px',
    backgroundColor: 'green', // アイコンの色（必要に応じて変更）
    borderRadius: '50%',
    textAlign: 'center',
    lineHeight: '50px',
    color: '#fff',
    fontWeight: 'bold',
  };

  return <span className="text-xs font-segoe" style={iconStyle}>Te</span>;
};

export default RollingIcon;
