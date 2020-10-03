import React from 'react';
import './style.scss';
interface IProps {}
export const IntroText: React.FC<IProps> = (props) => {
  return (
    <div className="intro-text margin-center">
      <h2>SINCE 1980</h2>
      <p>
        <span>녹두울림 NookdooWoolim 綠豆</span>은 고려대학교 문과대학
        락밴드입니다. 1980년 노래패로 시작해, 1990년 락밴드로 전환해 매 해
        새로운 밴드부원을 모집하고 있습니다. 매 분기 정기공연, 주점 공연, OB밴드
        활동 등 활동을 활발히 이어가고 있는 음악을 즐기는 젊은이들의 모임입니다.
        이렇게 쓰지 않은 소개글로 대체.
      </p>
    </div>
  );
};
