import React, { useEffect, useState } from 'react';

const RollingNewIcon: React.FC = () => {
  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [movingRight, setMovingRight] = useState(true);
  const [isMoving, setIsMoving] = useState(true);
  const gravity = 0.98; // 重力加速度
  const bounceHeight = 50; // バウンドの高さ
  const speed = 5; // 移動速度

  useEffect(() => {
    if (isMoving) {
      const moveInterval = setInterval(() => {
        setPositionX((prev) => {
          if (movingRight) {
            if (prev >= 200) {
              setMovingRight(false);
              setIsMoving(false);
              return prev - 1;
            } else {
              return prev + 1;
            }
          } else {
            if (prev <= 0) {
              setMovingRight(true);
              setIsMoving(false);
              return prev + 1;
            } else {
              return prev - 1;
            }
          }
        });

        // 回転速度を調整
        setRotation((prevRotation) => prevRotation + (movingRight ? 5 : -5));

        // 3回のバウンド効果の追加
        if (movingRight) {
          setPositionY((prev) => {
            const nextY = Math.abs(Math.sin(positionX / 200 * Math.PI * 3)) * bounceHeight;
            return nextY > 0 ? -nextY : 0;
          });
        } else {
          setPositionY(0); // 左に戻るときはバウンドしない
        }
      }, 10);

      return () => clearInterval(moveInterval);
    } else {
      const pauseTimeout = setTimeout(() => {
        setIsMoving(true);
      }, 2000);

      return () => clearTimeout(pauseTimeout);
    }
  }, [isMoving, movingRight, positionX]);

  const iconStyle: React.CSSProperties = {
    transform: `translate(${positionX}px, ${positionY}px) rotate(${rotation}deg) scale(0.8)`,
    position: 'absolute',
    top: '10px',
    left: '10px',
    zIndex: 1000,
    width: '50px',
    height: '50px',
    backgroundColor: 'gold',
    borderRadius: '50%',
    textAlign: 'center',
    lineHeight: '50px',
    color: '#fff',
    fontWeight: 'bold',
  };

  return <span className="text-xs font-segoe" style={iconStyle}>NEW</span>;
};

export default RollingNewIcon;
