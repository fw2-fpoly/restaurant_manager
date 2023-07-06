import { defineStyleConfig } from "@chakra-ui/react";
export const Button = defineStyleConfig({
	// Styles for the base style
	baseStyle: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: "4px",
		border: "none",
		color: "white",
		fontWeight: 500,
		_loading: {
			color: "white",
			bgColor: "primary.100",
		},
	},
	// Styles for the size variations
	sizes: {
		small: {
			fontSize: "12px",
			px: "24px",
			height: "38px",
		},
		medium: {
			fontSize: "14px",
			px: "24px",
			height: "42px",
		},
		lager: {
			fontSize: "14px",
			px: "24px",
			height: "46px",
		},
	},
	// Styles for the visual style variations
	variants: {
		primary: {
			bgColor: "primary.100",
		},
	},
	// The default `size` or `variant` values
	defaultProps: {
		size: "medium",
		variant: "primary",
	},
});
