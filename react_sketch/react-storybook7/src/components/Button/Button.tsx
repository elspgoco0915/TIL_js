import './button.css';

type Props = {
  children: React.ReactNode,
  // color?: 'default' | 'primary' | 'danger',
  color?: string;
  // size?: 'base' | 'sm' | 'lg',
  size?: string;
  onClick?: () => void,
};
function Button({
  children,
  color = 'default',
  size = 'base',
  handleClick = () => console.log('click')
}: Props) {
  return <button className={`${color} ${size}`} onClick={handleClick}>
    {children}
  </ button>;
}

export default Button;