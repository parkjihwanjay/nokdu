import React from 'react';
import './style.scss';
interface IProps {}
export const IntroConcert: React.FC<IProps> = (props) => {
  return (
    <div className="intro-concert">
      <div className="margin-center">
        <h2>공연</h2>
        <h3>17학번 정기 공연</h3>
        <p>2017.09.11 @홍대 크랙</p>
      </div>
    </div>
  );
};
