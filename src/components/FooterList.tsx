import React from 'react';
import './FooterList.scss';

interface FooterListProps extends React.CSSProperties {
  title: String;
  listData: String[];
}

export const FooterList: React.FC<FooterListProps> = ({
  title,
  listData,
  width: listWidth,
}) => {
  return (
    <div
      className='mainFooterListContainer'
      style={
        listWidth
          ? {
              width: listWidth,
            }
          : undefined
      }
    >
      <h3 className='sub-header'>{title}</h3>
      <ul className='footer-list'>
        {listData.map(item => (
          <li className='footer-list-item'>
            <a className='general-text footer-link' href='#'>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
