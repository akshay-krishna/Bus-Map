import { useState } from 'react';
import { ISvgProps } from '../../interfaces';

const Seater = (props: ISvgProps) => {
  const [fillColor, setFillColor] = useState<string>(props.fill || 'none');

  const handleClick = () => {
    setFillColor((prevColor) => (prevColor === 'cyan' ? 'none' : 'cyan'));
  };

  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
      onClick={handleClick}
    >
      <path
        d="M25.4722 4.36863C25.25 3.32106 24.3333 2.5 23.1944 2.5H11.3611C10.25 2.5 9.30556 3.29275 9.08333 4.34032H4.36111C3.33333 4.36863 2.5 5.18969 2.5 6.23726V23.7061C2.5 24.7537 3.33333 25.5747 4.36111 25.5747H9.05556C9.25 26.6789 10.1944 27.5 11.3333 27.5H23.1944C24.25 27.5 25.1389 26.7922 25.4167 25.8579C26.5833 25.7446 27.5 24.7537 27.5 23.5362V6.66195C27.5 5.50113 26.6111 4.51019 25.4722 4.36863ZM11.3611 3.32106H23.2222C23.9167 3.32106 24.4722 3.77407 24.6667 4.39694C23.75 4.62344 23.0556 5.38788 22.9167 6.3222H11.3611C10.5278 6.3222 9.86111 5.6427 9.86111 4.82163C9.86111 4.00057 10.5278 3.32106 11.3611 3.32106ZM9.08333 24.7537H4.36111C3.77778 24.7537 3.30556 24.2724 3.30556 23.7061V6.23726C3.30556 5.6427 3.77778 5.18969 4.36111 5.18969H9.05556C9.22222 6.3222 10.1944 7.17157 11.3333 7.17157H22.8333V22.8851H11.3611C10.2222 22.8567 9.27778 23.6778 9.08333 24.7537ZM23.1944 26.7072H11.3611C10.5278 26.7072 9.86111 26.0277 9.86111 25.2067C9.86111 24.3856 10.5278 23.7061 11.3611 23.7061H22.8889C22.9444 24.7254 23.6667 25.5464 24.6111 25.8012C24.3611 26.3109 23.8333 26.7072 23.1944 26.7072ZM26.6944 23.5362C26.6944 24.3573 26.0278 25.0368 25.1944 25.0368C24.3611 25.0368 23.6944 24.3573 23.6944 23.5362V6.66195C23.6944 5.84088 24.3611 5.16138 25.1944 5.16138C26.0278 5.16138 26.6944 5.84088 26.6944 6.66195V23.5362Z"
        fill="black"
      />
      <path
        d="M9.08333 24.7537H4.36111C3.77778 24.7537 3.30556 24.2724 3.30556 23.7061V6.23726C3.30556 5.6427 3.77778 5.18969 4.36111 5.18969H9.05556C9.22222 6.3222 10.1944 7.17157 11.3333 7.17157H22.8333V22.8851H11.3611C10.2222 22.8567 9.27778 23.6778 9.08333 24.7537Z"
        fill={fillColor}
      />
      <path
        d="M26.6944 23.5362C26.6944 24.3573 26.0278 25.0368 25.1944 25.0368C24.3611 25.0368 23.6944 24.3573 23.6944 23.5362V6.66195C23.6944 5.84088 24.3611 5.16138 25.1944 5.16138C26.0278 5.16138 26.6944 5.84088 26.6944 6.66195V23.5362Z"
        fill={fillColor}
      />
      <path
        d="M11.3611 3.32106H23.2222C23.9167 3.32106 24.4722 3.77407 24.6667 4.39694C23.75 4.62344 23.0556 5.38788 22.9167 6.3222H11.3611C10.5278 6.3222 9.86111 5.6427 9.86111 4.82163C9.86111 4.00057 10.5278 3.32106 11.3611 3.32106Z"
        fill={fillColor}
      />
      <path
        d="M23.1944 26.7072H11.3611C10.5278 26.7072 9.86111 26.0277 9.86111 25.2067C9.86111 24.3856 10.5278 23.7061 11.3611 23.7061H22.8889C22.9444 24.7254 23.6667 25.5464 24.6111 25.8012C24.3611 26.3109 23.8333 26.7072 23.1944 26.7072Z"
        fill={fillColor}
      />
    </svg>
  );
};

export default Seater;
