const {
	default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			animation: {
				aurora: "aurora 30s linear infinite",
			},
			colors: {
				"aurora-start": "#0AC2D4", 
				"aurora-middle": "#90F6D7", 
				"aurora-end": "#02C4D3", 
			},
			keyframes: {
				aurora: {
					from: {
						backgroundPosition: "50% 50%, 50% 50%",
						// background: "linear-gradient(45deg, var(--aurora-start), var(--aurora-end))"
					},
					to: {
						backgroundPosition: "350% 50%, 350% 50%",
						// background: "linear-gradient(45deg, var(--aurora-start), var(--aurora-end))"
					},
				},
			},
		},
	},
	plugins: [addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
	let allColors = flattenColorPalette(theme("colors"));
	let newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);

	addBase({
		":root": newVars,
	});
}
