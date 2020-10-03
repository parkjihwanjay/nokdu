import React from 'react';
import './style.scss';
interface IProps {
  childern: [];
}
export const Header: React.FC<IProps> = ({ childern }) => {
  return (
    <div id="header">
      {childern.map((child) => {
        child;
      })}
    </div>
  );
};
