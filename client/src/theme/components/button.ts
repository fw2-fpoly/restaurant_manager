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
		fontWeight: 600,
	},
	// Styles for the size variations
	sizes: {
		small: {
			fontSize: "xs",
			px: "1rem",
			height: "36px",
		},
		medium: {
			fontSize: "xs",
			px: "1rem",
			height: "42px",
			bgColor: "red",
		},
		lager: {
			fontSize: "xs",
			px: "1rem",
			height: "48px",
		},
	},
	// Styles for the visual style variations
	variants: {
		primary: {
			bgColor: "yellow",
		},
	},
	// The default `size` or `variant` values
	defaultProps: {
		size: "medium",
		variant: "primary",
	},
});
