// Basic buttonの3種類のボタンを作成
// それぞれのボタンは渡すpropsでsmallサイズかLargeサイズかを使い分けできるようにする
// それぞれのボタンは渡すpropsでcolorを指定できるようにする

import { ReactNode } from 'react';
import './basicButton.css';

type Props = {
  type?: 'contained' | 'outlined'
  // TODO: text未完
  // | 'text'
  color?: 'default' | 'primary' | 'danger',
  size?: 'small' | 'large',
  children: ReactNode,
  disabled?: boolean
};

export const BasicButton = ({
  children,
  type = 'contained',
  color = 'default',
  size = 'small',
  disabled = false
}: Props) => {

  // diabledフラグ有効の時はクリック時のアニメーションcssを付与しない
  const clickAnimation = disabled ? '' : 'ripple';
  // const clickAnimation = '';

  return (
    <button disabled={disabled} className={`${type}Button ${color} ${size} ${clickAnimation}`}>
      {children}
    </button>
  );
};