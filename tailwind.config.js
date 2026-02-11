/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  	extend: {
  		colors: {
  			// Your existing colors
  			primary: {
  				'50': '#eff6ff',
  				'500': '#3b82f6',
  				'600': '#2563eb',
  				'700': '#1d4ed8',
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			// New colors for the animated tabs component
  			gray: {
  				25: '#fcfcfc',
  				50: '#fafafa',
  				100: 'whitesmoke',
  				200: '#e5e5e5',
  				300: '#d6d6d6',
  				400: '#a3a3a3',
  				500: '#737373',
  				600: '#525252',
  				700: '#424242',
  				800: '#292929',
  				900: '#141414',
  			},
  			green: {
  				400: '#61ffc9',
  				500: '#25fabe', // dark-green
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)',
  			// Additional border radii for the animated tabs
  			'xlarge': '2rem',
  			'medium': '1.25rem',
  			'xmedium': '1.5rem',
  			'large-still': '1.75rem',
  			'large-change': '1.75rem',
  			'xsmall': '0.75rem',
  			'small': '1rem',
  			'home-hero': '2rem',
  			'about-image': '2rem',
  			'button-circle': '100vw',
  			'xtiny': '0.25rem',
  			'tiny': '0.375rem',
  			'xxtiny': '0.175rem',
  			'0': '0rem',
  			'xxsmall': '0.5rem'
  		},
  		fontFamily: {
  			'poppins': ['Poppins', 'sans-serif'],
  		},
  		spacing: {
  			// Custom spacing if needed
  			'3.3': '3.3%',
  		},
  		height: {
  			'90vh': '90vh',
  			'550vh': '550vh',
  			'600vh': '600vh',
  		},
  		maxWidth: {
  			'small': '30rem',
  			'120rem': '120rem',
  		},
  		transitionDuration: {
  			'600': '600ms',
  		},
  		letterSpacing: {
  			'tighter': '-0.02em',
  			'wide-03': '0.03em',
  		},
  		backfaceVisibility: {
  			'hidden': 'hidden',
  		},
  		transformStyle: {
  			'preserve-3d': 'preserve-3d',
  		},
  		willChange: {
  			'transform-opacity': 'transform, opacity',
  			'transform-width-height-color': 'transform, width, height, color',
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}