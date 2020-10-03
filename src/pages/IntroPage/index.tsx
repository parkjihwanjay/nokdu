import React from 'react';
import './style.scss';
import { Header } from '@/components/Header';
import { IntroText, IntroConcert } from './components';
interface IProps {}
export const IntroPage: React.FC<IProps> = (props) => {
  return (
    <div className="intro-page">
      <IntroText />
      <IntroConcert />
    </div>
  );
};
