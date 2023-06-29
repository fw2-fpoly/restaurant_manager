export const CheckIcon = ({ size = "3.2rem", strokeWidth = 1.5, color = "currentColor", ...props }) => (
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
		<path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
		<path d="m9 12 2 2 4-4" />
	</svg>
);
