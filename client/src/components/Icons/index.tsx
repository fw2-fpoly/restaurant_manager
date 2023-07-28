import { Icon } from "@chakra-ui/react";

export const CheckIcon = (props: any) => (
  <Icon
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1.5}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="m5.75 12.867 2.59 3.547a2 2 0 0 0 3.26-.043l6.65-9.621" />
  </Icon>
);

export const IconChat = ({ size = 36, strokeWidth = 1.5, color = "currentColor", ...props }) => (
	<Icon
		width={size}
		height={size}
		fill="none"
		stroke={color}
		strokeLinecap="round"
		strokeWidth={strokeWidth}
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path d="M4.1 17.813c.057-.206-.066-.491-.184-.697a2.007 2.007 0 0 0-.12-.178 9.366 9.366 0 0 1-1.546-5.156C2.233 6.52 6.596 2.25 11.992 2.25c4.705 0 8.633 3.26 9.55 7.587a9.32 9.32 0 0 1 .208 1.952c0 5.269-4.195 9.606-9.59 9.606-.858 0-2.016-.216-2.647-.393a17.714 17.714 0 0 1-1.425-.474A1.46 1.46 0 0 0 7 20.545l-3.18 1.148a.748.748 0 0 1-.218.057.45.45 0 0 1-.45-.457.744.744 0 0 1 .029-.154l.92-3.326Z" />
		<path
			fill={color}
			stroke="none"
			d="M7.5 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
		/>
		<path
			fill={color}
			stroke="none"
			d="M12 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
		/>
		<path
			fill={color}
			stroke="none"
			d="M16.5 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
		/>
	</Icon>
);


export const SearchIconHistory = (props: any) => (
	<Icon
		fill="none"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth="2"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path d="M11 3a8 8 0 1 0 0 16 8 8 0 1 0 0-16z"></path>
		<path d="m21 21-4.35-4.35"></path>
	</Icon>
);

export const MoreIcon = (props: any) => (
	<Icon
		fill="none"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth="2"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path d="M12 11a1 1 0 1 0 0 2 1 1 0 1 0 0-2z"></path>
		<path d="M19 11a1 1 0 1 0 0 2 1 1 0 1 0 0-2z"></path>
		<path d="M5 11a1 1 0 1 0 0 2 1 1 0 1 0 0-2z"></path>
	</Icon>
);
export const CopyIcon = (props: any) => (
	<Icon
		fill="none"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth={1.5}
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path d="M6.5 15.25v0a1.75 1.75 0 0 1-1.75-1.75V6.75a2 2 0 0 1 2-2h6.75c.966 0 1.75.784 1.75 1.75v0" />
		<rect
			width={10.5}
			height={10.5}
			x={8.75}
			y={8.75}
			rx={2}
		/>
	</Icon>
);

export const LogoIcon = (props: any) => (
  <Icon
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1.5}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" />
    <path d="M22 12a9.974 9.974 0 0 1-.716 3.724c-.468 1.166-2.065.036-3.673 1.76-1.609 1.726-.356 3.134-1.603 3.68A9.966 9.966 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10Z" />
    <path d="M10 12.5s.105.605.5 1 1 .5 1 .5" />
  </Icon>
);

export const HomeIcon = (props: any) => (
	<Icon
		fill="currentColor"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			fillRule="evenodd"
			d="m11.52 5.872 7.2 7.2v5.048a1.8 1.8 0 0 1-1.8 1.8H6.12a1.8 1.8 0 0 1-1.8-1.8v-5.048l7.2-7.2Zm6-.952v4.2l-2.4-2.4v-1.8a.6.6 0 0 1 .6-.6h1.2a.6.6 0 0 1 .6.6Z"
			clipRule="evenodd"
		/>
		<path
			fillRule="evenodd"
			d="M10.672 3.72a1.2 1.2 0 0 1 1.697 0l7.976 7.976a.6.6 0 1 1-.85.85L11.52 4.568l-7.975 7.976a.6.6 0 0 1-.85-.85l7.977-7.975Z"
			clipRule="evenodd"
		/>
	</Icon>
);

export const MenuIcon = (props: any) => (
  <Icon
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1.5}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M3 21h18" />
    <path d="M3 18h18" />
    <path d="M4.5 12.5a7.5 7.5 0 1 1 15 0V18h-15v-5.5Z" />
    <path d="M8.5 12.5v2" />
    <path d="M14 5V4a2 2 0 1 0-4 0v1" />
  </Icon>
);

export const SettingIcon = (props: any) => (
  <Icon
    width={33}
    height={33}
    fill="none"
    stroke="currentColor"
    strokeLinejoin="round"
    strokeWidth={1.5}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M9.142 21.585a9.997 9.997 0 0 1-4.348-2.652 3 3 0 0 0-2.59-4.919A10.044 10.044 0 0 1 2.457 9H2.5a3 3 0 0 0 2.692-4.325A9.984 9.984 0 0 1 9.326 2.36a3 3 0 0 0 5.348 0 9.984 9.984 0 0 1 4.134 2.314A3 3 0 0 0 21.542 9a10.044 10.044 0 0 1 .255 5.015 3 3 0 0 0-2.59 4.919 9.998 9.998 0 0 1-4.349 2.651 3.001 3.001 0 0 0-5.716 0Z" />
    <path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />
  </Icon>
);

export const CartIcon = (props: any) => (
  <Icon
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1.5}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M8.25 20.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
    <path d="M18.75 20.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
    <path d="M2.25 3.75h3L7.5 16.5h12" />
    <path d="M7.5 13.5h11.692a.375.375 0 0 0 .369-.301l1.35-6.75a.376.376 0 0 0-.37-.449H6" />
  </Icon>
);

export const BellIcon = (props: any) => (
  <Icon
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1.5}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M14.857 19.428c-.762 1.143-1.714 1.715-2.857 1.715-1.143 0-2.095-.572-2.857-1.715" />
    <path d="M17.81 17.714H6.19a1.887 1.887 0 0 1-1.619-2.857 12.03 12.03 0 0 0 1.715-6.19V7.429a4.571 4.571 0 0 1 4.571-4.57h2.286a4.571 4.571 0 0 1 4.571 4.57v1.24c0 2.18.593 4.32 1.715 6.189a1.887 1.887 0 0 1-1.618 2.857Z" />
    <path d="M20 5.143c-.305-1.067-.686-1.83-1.143-2.286-.456-.457-1.218-.837-2.286-1.143" />
    <path d="M4.101 5.143c.238-1.067.585-1.83 1.042-2.286C5.6 2.4 6.395 2.02 7.53 1.714" />
  </Icon>
);

export const TableIcon = (props: any) => (
  <Icon
    fill="none"
    stroke="currentColor"
    strokeLinejoin="round"
    strokeWidth={1.5}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M9 3H4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Z" />
    <path d="M9 14H4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1Z" />
    <path d="M20 3h-5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Z" />
    <path d="M20 14h-5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1Z" />
  </Icon>
);

export const ArrowLeftCirleIcon = (props: any) => (
	<Icon
		fill="currentColor"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path d="M16.828 11.736a27.683 27.683 0 0 1-.198-.019 9.873 9.873 0 0 0-.83-.057 813.608 813.608 0 0 0-4.187-.037 850.334 850.334 0 0 1-3.131-.025 1.463 1.463 0 0 1-.185-.019l-.041-.006.053-.057c.06-.066.11-.12.162-.172a10.121 10.121 0 0 0 1.819-2.54l.015-.028a1.21 1.21 0 0 0 .109-.257.353.353 0 0 0-.01-.16.619.619 0 0 1-.013-.062l-.005-.042-.042.008a.718.718 0 0 1-.074.01.304.304 0 0 0-.178.051c-.058.055-.11.116-.155.181-.035.05-.073.097-.115.141-.338.346-.676.69-1.016 1.035-.436.443-.871.887-1.305 1.332a4.047 4.047 0 0 0-.522.612c-.218.339-.185.62.111.943.284.309.582.643.91 1.023.24.276.477.554.714.832.257.302.515.603.774.903.1.12.215.226.345.313a.32.32 0 0 0 .16.039.229.229 0 0 0 .15-.044.323.323 0 0 0 .057-.313 2.116 2.116 0 0 0-.248-.361l-.062-.08-.896-1.152-1.043-1.344a.87.87 0 0 1-.076-.127l-.016-.03.566.028c.46.023.895.046 1.335.063.936.035 2.303.07 3.625.104 1.138.028 2.212.056 3.002.083.154.004.31-.007.462-.033.233-.037.351-.157.35-.356 0-.223-.132-.357-.37-.38Z" />
		<path d="M2.938 9.451c-.832 3.27-.103 6.155 2.167 8.575l.18.186c1.22 1.22 2.738 1.972 3.942 2.496.517.226 3.167.5 3.885.393 4.262-.636 7.066-3.04 8.043-7.062.187-.788.28-1.595.277-2.405.005-1.907-.798-4.124-2.454-5.784-.17-.141-.34-.287-.505-.429-.356-.306-.724-.623-1.11-.894-2.943-2.071-6-2.083-9.088-.984-2.796.993-4.591 2.982-5.337 5.908Zm5.349-4.93c2.709-1.125 5.427-1.324 8.078.362.485.309 1.777 1.353 1.98 1.51l.013.01.011.012c1.034 1.096 2.219 3.102 2.192 5.163a10.516 10.516 0 0 1-.355 2.61c-.673 2.448-2.283 4.232-4.921 5.452-2.683 1.284-6.53-.014-7.553-.69a11.952 11.952 0 0 1-2.926-2.844c-1.263-1.788-1.546-4.358-.868-6.707a7.617 7.617 0 0 1 4.349-4.878Z" />
	</Icon>
);

export const CodeIcon = (props: any) => (
  <Icon
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1.5}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M13.5 6 10 18.5" />
    <path d="M6.5 8.5 3 12l3.5 3.5" />
    <path d="M17.5 8.5 21 12l-3.5 3.5" />
  </Icon>
);

export const GoogleIcon = (props: any) => (
	<Icon
		viewBox="0 0 32 32"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<g
			id="SVGRepo_bgCarrier"
			strokeWidth="0"
		></g>
		<g
			id="SVGRepo_tracerCarrier"
			strokeLinecap="round"
			strokeLinejoin="round"
		></g>
		<g id="SVGRepo_iconCarrier">
			{" "}
			<path
				d="M30.0014 16.3109C30.0014 15.1598 29.9061 14.3198 29.6998 13.4487H16.2871V18.6442H24.1601C24.0014 19.9354 23.1442 21.8798 21.2394 23.1864L21.2127 23.3604L25.4536 26.58L25.7474 26.6087C28.4458 24.1665 30.0014 20.5731 30.0014 16.3109Z"
				fill="#4285F4"
			></path>{" "}
			<path
				d="M16.2863 29.9998C20.1434 29.9998 23.3814 28.7553 25.7466 26.6086L21.2386 23.1863C20.0323 24.0108 18.4132 24.5863 16.2863 24.5863C12.5086 24.5863 9.30225 22.1441 8.15929 18.7686L7.99176 18.7825L3.58208 22.127L3.52441 22.2841C5.87359 26.8574 10.699 29.9998 16.2863 29.9998Z"
				fill="#34A853"
			></path>{" "}
			<path
				d="M8.15964 18.769C7.85806 17.8979 7.68352 16.9645 7.68352 16.0001C7.68352 15.0356 7.85806 14.1023 8.14377 13.2312L8.13578 13.0456L3.67083 9.64746L3.52475 9.71556C2.55654 11.6134 2.00098 13.7445 2.00098 16.0001C2.00098 18.2556 2.55654 20.3867 3.52475 22.2845L8.15964 18.769Z"
				fill="#FBBC05"
			></path>{" "}
			<path
				d="M16.2864 7.4133C18.9689 7.4133 20.7784 8.54885 21.8102 9.4978L25.8419 5.64C23.3658 3.38445 20.1435 2 16.2864 2C10.699 2 5.8736 5.1422 3.52441 9.71549L8.14345 13.2311C9.30229 9.85555 12.5086 7.4133 16.2864 7.4133Z"
				fill="#EB4335"
			></path>{" "}
		</g>
	</Icon>
);

export const FacebookIcon = (props: any) => (
	<Icon
		viewBox="0 0 48 48"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<g
			id="SVGRepo_bgCarrier"
			strokeWidth="0"
		></g>
		<g
			id="SVGRepo_tracerCarrier"
			strokeLinecap="round"
			strokeLinejoin="round"
		></g>
		<g id="SVGRepo_iconCarrier">
			{" "}
			<circle
				cx="24"
				cy="24"
				r="20"
				fill="#3B5998"
			></circle>{" "}
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M29.315 16.9578C28.6917 16.8331 27.8498 16.74 27.3204 16.74C25.8867 16.74 25.7936 17.3633 25.7936 18.3607V20.1361H29.3774L29.065 23.8137H25.7936V35H21.3063V23.8137H19V20.1361H21.3063V17.8613C21.3063 14.7453 22.7708 13 26.4477 13C27.7252 13 28.6602 13.187 29.8753 13.4363L29.315 16.9578Z"
				fill="white"
			></path>{" "}
		</g>
	</Icon>
);

export const SearchIcon = ({
  size = 46,
  strokeWidth = 2,
  color = "currentColor",
  ...props
}) => (
  <svg
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={strokeWidth}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M11 3a8 8 0 1 0 0 16 8 8 0 1 0 0-16z" />
    <path d="m21 21-4.35-4.35" />
  </svg>
);

export const StarIcon = ({ size = 46, color = "currentColor", ...props }) => (
	<svg
		width={size}
		height={size}
		fill={color}
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path d="M18.469 22.5a.75.75 0 0 1-.44-.14L12 17.99l-6.029 4.37a.75.75 0 0 1-1.15-.847l2.35-6.965-6.093-4.178A.75.75 0 0 1 1.5 9h7.518l2.268-6.981a.75.75 0 0 1 1.427 0l2.27 6.984H22.5a.75.75 0 0 1 .424 1.369l-6.096 4.176 2.35 6.963a.75.75 0 0 1-.71.99Z" />
	</svg>
);

export const CloseIcon = ({ size = 46, color = "currentColor", ...props }) => (
	<svg
		width={size}
		height={size}
		fill={color}
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path d="M12 2.25c-5.376 0-9.75 4.374-9.75 9.75s4.374 9.75 9.75 9.75 9.75-4.374 9.75-9.75S17.376 2.25 12 2.25ZM16.06 15 15 16.06l-3-3-3 3L7.94 15l3-3-3-3L9 7.94l3 3 3-3L16.06 9l-3 3 3 3Z" />
	</svg>
);

export const UserIcon = (props: any) => (
  <Icon
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1.5}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12 4.75a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 1 0 0-6.5z" />
    <path d="M6.848 19.25h10.305c1.141 0 2.021-.982 1.488-1.992C17.856 15.773 16.068 14 12 14s-5.856 1.773-6.64 3.258c-.534 1.01.346 1.992 1.487 1.992Z" />
  </Icon>
);

export const PassIcon = (props: any) => (
  <Icon
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1.5}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M5.75 11.75a1 1 0 0 1 1-1h10.5a1 1 0 0 1 1 1v5.5a2 2 0 0 1-2 2h-8.5a2 2 0 0 1-2-2v-5.5Z" />
    <path d="M7.75 10.5v-.157c0-1.562-.094-3.302.996-4.42C9.368 5.288 10.374 4.75 12 4.75c1.626 0 2.632.537 3.254 1.174 1.09 1.117.996 2.857.996 4.419v.157" />
  </Icon>
);

export const Heart = (props: any) => (
	<Icon
		width={46}
		height={46}
		fill="none"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth={1.5}
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<g
			id="SVGRepo_bgCarrier"
			strokeWidth="0"
		></g>
		<g
			id="SVGRepo_tracerCarrier"
			strokeLinecap="round"
			strokeLinejoin="round"
		></g>
		<g id="SVGRepo_iconCarrier">
			{" "}
			<path
				d="M11.995 7.233c-1.45-1.623-3.867-2.06-5.683-.573-1.816 1.486-2.072 3.971-.645 5.73l6.328 5.86 6.329-5.86c1.426-1.759 1.201-4.26-.646-5.73-1.848-1.471-4.233-1.05-5.683.573Z"
				clipRule="evenodd"
			/>{" "}
		</g>
	</Icon>
);
export const Plus = (props: any) => (
	<Icon
		width={46}
		height={46}
		fill="none"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth={1.5}
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<g
			id="SVGRepo_bgCarrier"
			strokeWidth="0"
		></g>
		<g
			id="SVGRepo_tracerCarrier"
			strokeLinecap="round"
			strokeLinejoin="round"
		></g>
		<g id="SVGRepo_iconCarrier">
			{" "}
			<path d="M12 5.75v12.5" />
			<path d="M18.25 12H5.75" />{" "}
		</g>
	</Icon>
);

export const Start = (props: any) => (
	<Icon
		width={46}
		height={46}
		fill="none"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth={1.5}
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<g
			id="SVGRepo_bgCarrier"
			strokeWidth="0"
		></g>
		<g
			id="SVGRepo_tracerCarrier"
			strokeLinecap="round"
			strokeLinejoin="round"
		></g>
		<g id="SVGRepo_iconCarrier">
			{" "}
			<path d="m12 4.75 1.75 5.5h5.5l-4.5 3.5 1.5 5.5-4.25-3.5-4.25 3.5 1.5-5.5-4.5-3.5h5.5L12 4.75Z" />{" "}
		</g>
	</Icon>
);
export const PizzaIcon = (props: any) => (
	<Icon
		width={46}
		height={46}
		fill="currentColor"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<g
			id="SVGRepo_bgCarrier"
			strokeWidth="0"
		></g>
		<g
			id="SVGRepo_tracerCarrier"
			strokeLinecap="round"
			strokeLinejoin="round"
		></g>
		<g id="SVGRepo_iconCarrier">
			{" "}
			<path d="m9.281 2.86-.234.632-6 16.43-.164.445.75.75.445-.164 16.43-6 .633-.234-.164-.656S19.919 9.84 17.039 6.96 9.937 3.023 9.937 3.023l-.656-.164Zm.914 1.85c.853.265 3.627 1.19 5.766 3.33 2.139 2.138 3.064 4.912 3.328 5.765l-1.148.422a7.837 7.837 0 0 0-.328-1.055c-.457-1.134-1.31-2.622-2.836-4.149-1.527-1.526-3.015-2.355-4.149-2.812a9.408 9.408 0 0 0-1.055-.352l.422-1.148Zm-.914 2.556c.252.067.574.164.985.328.966.39 2.285 1.113 3.656 2.484.401.402.732.788 1.031 1.172a1.5 1.5 0 0 0 .047 3 1.49 1.49 0 0 0 1.29-.75c.031.076.087.161.116.234.17.422.261.756.328 1.008l-7.5 2.719a1.112 1.112 0 0 0-.984-.586 1.125 1.125 0 0 0-1.102 1.36l-2.18.796 2.626-7.195c.199.097.419.164.656.164a1.5 1.5 0 0 0 .375-2.953l.656-1.781Zm1.219 5.859a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z" />{" "}
		</g>
	</Icon>
);
export const CakeIcon = (props: any) => (
  <Icon
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z"
    />
  </Icon>
);

export const IconHeart = ({
  size = 36,
  strokeWidth = 2,
  color = "currentColor",
  ...props
}) => (
  <Icon
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={strokeWidth}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </Icon>
);

export const IconAddCart = ({
  size = 36,
  strokeWidth = 2,
  color = "currentColor",
  ...props
}) => (
  <Icon
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={strokeWidth}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <path d="M3 6h18" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </Icon>
);

export const LogoutIcon = (props: any) => (
  <Icon
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1.5}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="m15.75 8.75 3.5 3.25-3.5 3.25" />
    <path d="M19 12h-8.25" />
    <path d="M15.25 4.75h-8.5a2 2 0 0 0-2 2v10.5a2 2 0 0 0 2 2h8.5" />
  </Icon>
);

export const ArrowRight = ({
  size = 36,
  strokeWidth = 2,
  color = "currentColor",
  ...props
}) => (
  <Icon
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={strokeWidth}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </Icon>
);

export const IconEye = ({
  size = 36,
  strokeWidth = 2,
  color = "currentColor",
  ...props
}) => (
  <Icon
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={strokeWidth}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <path d="M12 9a3 3 0 1 0 0 6 3 3 0 1 0 0-6z" />
  </Icon>
);

export const IconChevronRight = ({
  size = 36,
  strokeWidth = 2,
  color = "currentColor",
  ...props
}) => (
  <Icon
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={strokeWidth}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="m9 18 6-6-6-6" />
  </Icon>
);

export const IconChevronBack = ({
  size = 36,
  strokeWidth = 1.5,
  color = "currentColor",
  ...props
}) => (
  <Icon
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={strokeWidth}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M15.375 5.25 8.625 12l6.75 6.75" />
  </Icon>
);

export const IconChevronFoward = ({
  size = 36,
  strokeWidth = 1.5,
  color = "currentColor",
  ...props
}) => (
  <Icon
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={strokeWidth}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="m8.625 5.25 6.75 6.75-6.75 6.75" />
  </Icon>
);
// icon filter

export const IconFilter = ({
  size = 36,
  strokeWidth = 1.5,
  color = "currentColor",
  ...props
}) => (
  <Icon
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={strokeWidth}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M1.5 6.75h21" />
    <path d="M5.25 12h13.5" />
    <path d="M9.75 17.25h4.5" />
  </Icon>
);

// order detail

export const WalletIcon = ({ size = 36, strokeWidth = 1.5, color = "currentColor", ...props }) => (
	<Icon
		width={size}
		height={size}
		fill="none"
		stroke={color}
		strokeLinejoin="round"
		strokeWidth={strokeWidth}
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path d="M19.5 6.75h-15A2.25 2.25 0 0 0 2.25 9v9a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25Z" />
		<path d="M19.282 6.75V5.342A2.344 2.344 0 0 0 16.5 3.041L4.155 5.148A2.344 2.344 0 0 0 2.25 7.452V9.75" />
		<path
			fill={color}
			stroke="none"
			d="M17.25 15a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
		/>
	</Icon>
);

export const IconCash = ({
  size = 36,
  strokeWidth = 1.5,
  color = "currentColor",
  ...props
}) => (
  <Icon
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={strokeWidth}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M2.25 15.75h19.5a.75.75 0 0 0 .75-.75V4.5a.75.75 0 0 0-.75-.75H2.25a.75.75 0 0 0-.75.75V15c0 .414.336.75.75.75Z" />
    <path d="M3 18h18" />
    <path d="M4.5 20.25h15" />
    <path d="M12 13.5A3.75 3.75 0 1 0 12 6a3.75 3.75 0 0 0 0 7.5Z" />
    <path d="M22.5 7.5a3.75 3.75 0 0 1-3.75-3.75" />
    <path d="M1.5 7.5a3.75 3.75 0 0 0 3.75-3.75" />
    <path d="M22.5 12a3.75 3.75 0 0 0-3.75 3.75" />
    <path d="M1.5 12a3.75 3.75 0 0 1 3.75 3.75" />
  </Icon>
);

export const IconQrCode = ({ size = 36, color = "currentColor", ...props }) => (
	<Icon
		width={size}
		height={size}
		fill={color}
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path d="M19.5 15.75h-3.75v3.75h3.75v-3.75Z" />
		<path d="M15.75 12.75h-3v3h3v-3Z" />
		<path d="M22.5 19.5h-3v3h3v-3Z" />
		<path d="M22.5 12.75h-2.25V15h2.25v-2.25Z" />
		<path d="M15 20.25h-2.25v2.25H15v-2.25Z" />
		<path d="M19.5 4.5h-3.75v3.75h3.75V4.5Z" />
		<path d="M22.5 11.25h-9.75V1.5h9.75v9.75Zm-7.688-2.063h5.626V3.564h-5.625v5.624Z" />
		<path d="M8.25 4.5H4.5v3.75h3.75V4.5Z" />
		<path d="M11.25 11.25H1.5V1.5h9.75v9.75ZM3.562 9.187h5.626V3.564H3.561v5.624Z" />
		<path d="M8.25 15.75H4.5v3.75h3.75v-3.75Z" />
		<path d="M11.25 22.5H1.5v-9.75h9.75v9.75Zm-7.688-2.063h5.626v-5.625H3.561v5.626Z" />
	</Icon>
);

export const BankIcon = ({ size = 36, color = "currentColor", ...props }) => (
  <Icon
    width={46}
    height={46}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1.5}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M18.25 11.5v7.75m-12.5 0V11.5m4 7.75V11.5m4.5 7.75V11.5" />
    <path d="m12 4.75 7.25 6.5H4.75L12 4.75Z" />
    <path d="M4.75 19.25h14.5" />
  </Icon>
);
export const CateIcon = ({ size = 36, color = "currentColor", ...props }) => (
	<Icon
		width={46}
		height={46}
		fill="none"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth={1.5}
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			fill="currentColor"
			stroke="none"
			d="M15 8a1 1 0 1 0 0 2 1 1 0 1 0 0-2z"
		/>
		<path d="M12 4.75h7.25V12l-6.697 6.67a2 2 0 0 1-2.87-.047L5.29 13.94a2 2 0 0 1 .072-2.81L12 4.75Z" />
	</Icon>
);

export const PizzzaIcon = ({ size = 36, color = "currentColor", ...props }) => (
	<Icon
		width={size}
		height={size}
		viewBox="0 0 1024 1024"
		version="1.1"
		xmlns="http://www.w3.org/2000/svg"
		fill="#000000"
		{...props}
	>
		<g
			id="SVGRepo_bgCarrier"
			strokeWidth="0"
		></g>
		<g
			id="SVGRepo_tracerCarrier"
			strokeLinecap="round"
			strokeLinejoin="round"
		></g>
		<g id="SVGRepo_iconCarrier">
			<path
				d="M167.7 388.7s120.9-187.2 329.8-176.3 280.9 103.3 303.8 126.9 51.7 70.3 51.7 70.3L671.6 689.8s-41.4-24.8-65.1-5.5-19.6 56-12.8 65.9 18.7 15.8 18.7 15.8l-96.2 149.5L243 507.6s46.3-27.4 19.8-71.6c-25.7-43-61.4 4.4-61.4 4.4l-33.7-51.7z"
				fill="#FFFCEE"
			></path>
			<path
				d="M359.9 643.4m-78.6 0a78.6 78.6 0 1 0 157.2 0 78.6 78.6 0 1 0-157.2 0Z"
				fill="#FCD04E"
			></path>
			<path
				d="M399.4 356m-32.8 0a32.8 32.8 0 1 0 65.6 0 32.8 32.8 0 1 0-65.6 0Z"
				fill="#E8433F"
			></path>
			<path
				d="M732.8 573.2m-32.8 0a32.8 32.8 0 1 0 65.6 0 32.8 32.8 0 1 0-65.6 0Z"
				fill="#FFDEB3"
			></path>
			<path
				d="M547.2 501.7c23.3 14.5 49.3-1.3 54.5-19 5.2-17.7 20.8-42.3 20.8-42.3l28.9 8.2s1.5-47.4-19.3-62c-20.8-14.5-70.5-11.1-70.5-11.1l12.6 33.4s-28 23.6-41.5 53c-13.4 29.5 14.5 39.8 14.5 39.8z"
				fill="#95C751"
			></path>
			<path
				d="M167.6 384.4l-57.1-89.8s176-211.4 415.2-185.7 389.2 205 389.2 205L854.5 402s-107-175.3-342.4-185.7c-223-9.8-344.5 168.1-344.5 168.1z"
				fill="#FFDEB3"
			></path>
			<path
				d="M926.3 309.1C827.5 175.7 669.6 96 503.8 96c-157.5 0-305.4 69.8-405.7 191.5-3.5 4.2-3.8 10.3-0.8 14.9l57.8 87.1c0.2 1.8 0.8 3.6 1.8 5.2l33.5 50.6c2.5 3.8 6.9 5.9 11.3 5.6 4.5-0.3 8.5-3.1 10.4-7.2 4.1-8.8 13-14.5 22.6-14.5 13.8 0 25 11.2 25 25 0 13.5-10.6 24.4-24.1 24.9-4.5 0.2-8.6 2.8-10.7 6.8-2.1 4-1.8 8.9 0.7 12.6l57.2 86.2c-12.5 16.3-20 36.6-20 58.7 0 53.5 43.5 97 97 97 8.3 0 16.4-1.2 24.1-3.2l122.9 185.2c2.3 3.5 6.2 5.6 10.4 5.6s8.1-2.1 10.4-5.6l100-150.4c2.2-3.3 2.7-7.3 1.4-11-1.3-3.7-4.2-6.6-7.9-7.8-13.4-4.4-22.4-16.6-22.4-30.5 0-17.8 14.5-32.3 32.3-32.3 9.3 0 17.9 4 24.3 11.3 2.6 2.9 6.2 4.5 10.3 4.3 3.9-0.3 7.5-2.3 9.6-5.6l52-78.4c1.9 0.2 3.8 0.6 5.7 0.6 27.6 0 50-22.4 50-50 0-9-2.6-17.2-6.7-24.5l84.5-127.4c1.7-1 3.1-2.3 4.2-3.9l61.7-93.1c3-4.6 2.9-10.4-0.3-14.6zM288 643.4c0-19.2 7.6-36.6 19.9-49.5 1.5-1.5 3-3 4.5-4.4 0.3-0.2 0.5-0.5 0.8-0.7 1.4-1.2 2.9-2.4 4.5-3.5 0.5-0.4 0.9-0.7 1.4-1.1 1.2-0.9 2.5-1.6 3.8-2.4l2.4-1.5c0.9-0.5 1.9-0.9 2.8-1.4 1.2-0.6 2.4-1.2 3.7-1.8 0.5-0.2 1-0.3 1.4-0.5 8.2-3.3 17.2-5.2 26.6-5.2 39.7 0 71.9 32.3 71.9 71.9 0 3.4-0.3 6.8-0.8 10.1l-0.3 1.8c-1.2 6.9-3.3 13.5-6.3 19.7 0 0.1 0 0.1-0.1 0.2-8 16.1-21.9 29.1-39.4 35.6-7.8 2.9-16.2 4.6-25.1 4.6-39.4 0-71.7-32.3-71.7-71.9z m415.3-30.8l-41.1 62c-9.2-6-20-9.4-31.1-9.4-31.6 0-57.3 25.7-57.3 57.3 0 19.3 9.7 36.9 25.2 47.3l-81.5 122.9-109.7-165.1 0.1-0.1c3.5-2 6.8-4.2 10-6.6 0.3-0.2 0.6-0.5 1-0.7 6.6-5.1 12.5-10.9 17.6-17.4 0 0 0-0.1 0.1-0.1 2.5-3.3 4.9-6.7 7-10.3l0.1-0.1c4.1-7 7.4-14.6 9.6-22.7 0.2-0.6 0.3-1.1 0.4-1.7 0.8-3.2 1.5-6.5 2-9.8 0.1-0.9 0.3-1.8 0.4-2.7 0.5-3.9 0.8-7.9 0.8-11.9 0-53.5-43.5-97-97-97-4.8 0-9.5 0.5-14.2 1.2-1.1 0.2-2.1 0.3-3.2 0.5-4.4 0.8-8.6 1.9-12.8 3.2-1.1 0.4-2.1 0.8-3.2 1.2-3.8 1.4-7.5 3-11.1 4.9-0.5 0.3-1.1 0.5-1.7 0.8-4.1 2.2-8 4.9-11.7 7.6-0.4 0.3-0.8 0.5-1.2 0.8l-44.6-67.2c17-8 28.6-25.2 28.6-45.1 0-27.6-22.4-50-50-50-12.4 0-24.2 4.7-33.2 12.7l-19-28.7c1.9-2.5 3.7-5.1 5.6-7.6 2.2-2.9 4.4-5.8 6.6-8.6 2.8-3.4 5.7-6.8 8.5-10.1 2.3-2.7 4.6-5.4 6.9-8 3-3.3 6.2-6.5 9.3-9.7 2.4-2.4 4.7-4.9 7.1-7.3 3.3-3.2 6.7-6.3 10.1-9.4 2.4-2.2 4.8-4.4 7.3-6.6 3.6-3.1 7.3-6 11-9 2.4-1.9 4.8-3.9 7.2-5.8 3.9-3 7.8-5.8 11.8-8.6 2.4-1.7 4.8-3.5 7.2-5.1 4.1-2.8 8.4-5.4 12.6-8.1 2.4-1.5 4.7-3 7.2-4.5 4.4-2.6 8.9-5.1 13.4-7.5 2.4-1.3 4.7-2.6 7-3.9 4.7-2.4 9.4-4.6 14.1-6.8 2.3-1.1 4.6-2.3 7-3.3 4.9-2.2 9.8-4.1 14.7-6.1 2.3-0.9 4.6-1.9 7-2.8 5-1.9 10.1-3.6 15.2-5.2 2.4-0.8 4.7-1.6 7.1-2.4 5.1-1.6 10.3-2.9 15.5-4.3 2.4-0.6 4.8-1.4 7.3-2 5.2-1.3 10.5-2.3 15.8-3.4 2.5-0.5 4.9-1.1 7.4-1.6 5.4-1 10.8-1.7 16.2-2.5 2.4-0.3 4.8-0.8 7.2-1.1 5.7-0.7 11.4-1.1 17.2-1.6 2.2-0.2 4.4-0.5 6.6-0.6 8-0.5 15.9-0.7 24-0.7 8.7 0 17.3 0.3 25.8 0.8 3.3 0.2 6.6 0.6 9.9 0.9 5.2 0.5 10.4 0.8 15.5 1.5 4.1 0.5 8.2 1.3 12.3 1.9 4.2 0.7 8.5 1.2 12.7 2.1 4.5 0.9 8.9 2 13.4 3 3.7 0.8 7.4 1.6 11.1 2.5 4.7 1.2 9.3 2.7 13.9 4 3.3 1 6.7 1.9 10 3 4.7 1.6 9.4 3.3 14.1 5.1 3.1 1.1 6.2 2.2 9.3 3.4 4.7 1.9 9.3 4 13.9 6 3 1.3 6 2.5 8.9 3.9 4.6 2.2 9 4.5 13.5 6.9 2.9 1.5 5.8 2.9 8.6 4.5 4.4 2.4 8.6 5 12.9 7.6 2.8 1.7 5.7 3.4 8.5 5.1 4.1 2.6 8.2 5.5 12.2 8.3 2.8 1.9 5.6 3.8 8.3 5.8 3.9 2.8 7.6 5.8 11.4 8.8 2.8 2.2 5.6 4.3 8.3 6.6 3.6 3 7.1 6.2 10.6 9.3 2.7 2.5 5.5 4.9 8.2 7.4 3.3 3.1 6.5 6.4 9.7 9.7 2.7 2.8 5.5 5.5 8.1 8.4 3 3.2 5.9 6.6 8.8 9.9 2.7 3.1 5.3 6.1 7.9 9.3 2.7 3.3 5.3 6.8 7.9 10.2 2.6 3.4 5.2 6.8 7.7 10.3 2.4 3.4 4.8 6.9 7.1 10.4 1.6 2.4 3.2 4.8 4.7 7.3l-80.4 121.2c-1.2-0.7-2.4-1.3-3.7-1.9-1.4-0.7-2.9-1.4-4.4-1.9-2-0.7-4-1.4-6-1.9l-2.7-0.6c-2.9-0.5-5.8-0.9-8.7-0.9-27.6 0-50 22.4-50 50 0 3.1 0.4 6.1 0.9 9.1 0.1 0.6 0.2 1.1 0.3 1.6 0.6 2.7 1.4 5.4 2.5 7.9 0.3 0.6 0.5 1.2 0.8 1.9 1.1 2.4 2.3 4.8 3.8 7 0.3 0.5 0.7 1 1.1 1.4 1.3 1.8 2.6 3.4 4.1 5 0.7 0.7 1.4 1.5 2.1 2.2 1.3 1.8 2.9 3.1 4.7 4.4z m29.5-15.2c-2.6 0-5.1-0.5-7.5-1.3-0.1 0-0.1-0.1-0.2-0.1-7.6-2.5-13.3-8.3-15.9-15.4-0.1-0.4-0.3-0.8-0.4-1.2-0.7-2.3-1.1-4.6-1.1-7.1 0-13.8 11.2-25 25-25 1.8 0 3.5 0.2 5.2 0.6 0.3 0.1 0.5 0.2 0.8 0.2 1.5 0.4 2.9 0.8 4.2 1.4 0.1 0 0.1 0.1 0.2 0.1 3.1 1.5 6 3.6 8.4 6.4l0.1 0.1c3.7 4.4 6.1 10 6.1 16.1 0.2 14-11.1 25.2-24.9 25.2z m121.9-210.7c-1-1.5-2.1-2.9-3.1-4.3-2.2-3.2-4.5-6.4-6.8-9.6-3-4.1-6.1-8.2-9.2-12.3-2.4-3-4.8-5.9-7.2-8.9-3.3-4-6.6-7.9-10.1-11.8-2.5-2.8-5-5.5-7.5-8.1-3.6-3.8-7.2-7.6-10.9-11.2-2.5-2.5-5.1-5-7.7-7.4-3.9-3.6-7.8-7.2-11.8-10.7-2.6-2.3-5.2-4.5-7.9-6.7-4.1-3.4-8.4-6.8-12.6-10-2.7-2-5.3-4.1-8.1-6.1-4.4-3.2-8.9-6.3-13.4-9.3-2.7-1.8-5.5-3.7-8.2-5.4-4.6-3-9.4-5.8-14.1-8.5-2.8-1.6-5.6-3.3-8.4-4.8-4.9-2.7-9.8-5.2-14.7-7.7-2.9-1.4-5.7-2.9-8.6-4.3-5-2.4-10.1-4.6-15.3-6.7-2.9-1.2-5.9-2.5-8.8-3.7-5.2-2.1-10.5-3.9-15.7-5.8-3-1.1-6-2.2-9-3.2-5.3-1.7-10.7-3.3-16.1-4.8-3.1-0.9-6.2-1.8-9.3-2.6-5.5-1.4-11-2.6-16.5-3.8-3.1-0.7-6.3-1.4-9.4-2.1-5.7-1.1-11.4-1.9-17.2-2.8-3.1-0.5-6.2-1-9.3-1.4-6.1-0.8-12.4-1.3-18.6-1.8-2.8-0.2-5.5-0.6-8.3-0.8-9-0.6-18-0.9-27.1-0.9-8.4 0-16.8 0.3-25.2 0.8-3 0.2-5.9 0.5-8.9 0.8-5.3 0.4-10.7 0.8-16 1.5-3.7 0.4-7.3 1.1-10.9 1.6-4.6 0.7-9.1 1.3-13.6 2.1-3.9 0.7-7.8 1.6-11.7 2.4-4.2 0.9-8.3 1.7-12.4 2.7-4.1 1-8.1 2.1-12.1 3.2-3.9 1.1-7.8 2.1-11.6 3.3-4.1 1.3-8.2 2.7-12.3 4-3.7 1.2-7.4 2.5-11 3.8-4.1 1.5-8.2 3.2-12.2 4.8-3.5 1.4-7 2.8-10.5 4.3-4.1 1.8-8.1 3.7-12.1 5.6-3.4 1.6-6.8 3.2-10.1 4.9-4 2-7.9 4.1-11.8 6.3-3.3 1.8-6.5 3.6-9.7 5.5-3.9 2.2-7.7 4.6-11.4 6.9-3.2 2-6.3 4-9.5 6.1-3.7 2.4-7.4 5-11 7.5-3.1 2.2-6.2 4.4-9.2 6.7-3.5 2.6-7 5.3-10.4 8.1-3 2.4-6 4.9-8.9 7.4-3.3 2.8-6.6 5.6-9.8 8.5l-8.7 8.1c-3.1 2.9-6.2 5.9-9.2 9-2.9 2.9-5.6 5.9-8.4 8.9-2.9 3.1-5.7 6.1-8.5 9.3-2.8 3.2-5.5 6.4-8.2 9.7-2.6 3.2-5.2 6.3-7.8 9.5-0.6 0.8-1.3 1.5-1.9 2.3l-45.4-68.4C218.7 184.8 356.8 121 503.8 121c155 0 302.8 73.1 397.2 196l-46.3 69.7z"
				fill="#004364"
			></path>
			<path
				d="M401 308.9c-27.6 0-50 22.4-50 50s22.4 50 50 50 50-22.4 50-50c0.1-27.5-22.4-50-50-50z m0 75.1c-13.8 0-25-11.2-25-25s11.2-25 25-25 25 11.2 25 25-11.2 25-25 25zM637.1 375.6c-21.1-15.7-47.8-20.7-73.2-13.9-5.8 1.6-10.6 5.6-13.3 11-2.7 5.7-2.8 12.3-0.2 18.1 3.1 7 8.4 11.9 12.7 15.8 0.7 0.6 1.5 1.4 2.3 2.2l-37.7 34c-0.6 0.5-1.2 1.2-1.7 1.8-16.1 21.7-12.3 52.1 9.5 68.5 8.2 6 17.8 8.9 27.5 8.9 15 0 30.1-7.1 39.9-20.3 0.5-0.7 0.9-1.4 1.3-2.1l21.8-45.9c1 0.5 1.9 1.1 2.7 1.6 5 3 11.2 6.7 18.8 7.6 6.3 0.8 12.6-1.3 17.3-5.5 4.4-4.1 6.9-9.8 6.7-15.9-0.7-26.1-13.3-50.2-34.4-65.9z m4.5 58.4c-6.3-3.7-22.9-13.6-34.7 2.4-0.5 0.7-0.9 1.4-1.3 2.1l-23.5 49.4c-8 9.8-22.3 12.2-32.5 4.8-9.4-7.1-11.2-21.5-4.2-32l40.6-36.6c0.6-0.6 1.2-1.2 1.7-1.8 11.9-16-2.4-29-7.8-33.9-1.2-1.1-2.6-2.4-3.7-3.5 16.2-2.7 32.6 1.2 45.9 11.1 13.3 9.9 21.8 24.5 23.9 40.8-1.4-1.1-2.9-2-4.4-2.8z"
				fill="#004364"
			></path>
			<path
				d="M489.8 516.2m-14.5 0a14.5 14.5 0 1 0 29 0 14.5 14.5 0 1 0-29 0Z"
				fill="#004364"
			></path>
			<path
				d="M374.4 613.1m-14.5 0a14.5 14.5 0 1 0 29 0 14.5 14.5 0 1 0-29 0Z"
				fill="#004364"
			></path>
			<path
				d="M320.5 639.9m-14.5 0a14.5 14.5 0 1 0 29 0 14.5 14.5 0 1 0-29 0Z"
				fill="#004364"
			></path>
			<path
				d="M357.3 682.6m-14.5 0a14.5 14.5 0 1 0 29 0 14.5 14.5 0 1 0-29 0Z"
				fill="#004364"
			></path>
			<path
				d="M637 186.4m-14.5 0a14.5 14.5 0 1 0 29 0 14.5 14.5 0 1 0-29 0Z"
				fill="#004364"
			></path>
			<path
				d="M547.2 770.9m-14.5 0a14.5 14.5 0 1 0 29 0 14.5 14.5 0 1 0-29 0Z"
				fill="#004364"
			></path>
			<path
				d="M512 807.7m-14.5 0a14.5 14.5 0 1 0 29 0 14.5 14.5 0 1 0-29 0Z"
				fill="#004364"
			></path>
		</g>
	</Icon>
);

export const KitchenIcon = ({ size = 36, color = "currentColor", ...props }) => (
	<Icon
		width={size}
		height={size}
		fill="none"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth={1.5}
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path d="M7 15v5c0 3 4 3 4 0v-5" />
		<path d="M11 18.5H7" />
		<path d="M7 3a1 1 0 0 1 1-1h8.317c.16 0 .317.037.444.133C17.271 2.513 18.6 3.79 19 7c.386 3.091-.684 6.182-1.19 7.427a.933.933 0 0 1-.876.573H7V3Z" />
		<path
			fill="currentColor"
			stroke="none"
			d="M11 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
		/>
	</Icon>
);
