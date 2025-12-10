export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Modern color palette
      colors: {
        // Light Mode Colors
        'primary': 'zinc-900',
        'light-bg-surface': '#FFFFFF',
        'light-text-heading': '#111827',
        'light-text-body': '#374151',
        'light-text-muted': '#6B7280',
        'light-accent-primary': '#10B981',
        'light-accent-secondary': '#059669',
        'light-text-on-accent': '#FFFFFF',
        'light-state-success': '#10B981',
        'light-state-danger': '#EF4444',
        'light-state-warning': '#F59E0B',

        // Dark Mode Colors
        'dark-bg-app': '#1F2937',
        'dark-bg-surface': '#374151',
        'dark-text-heading': '#F3F4F6',
        'dark-text-body': '#D1D5DB',
        'dark-text-muted': '#9CA3AF',
        'dark-accent-primary': '#34D399',
        'dark-accent-secondary': '#047857',
        'dark-text-on-accent': '#1F2937',
        'dark-state-success': '#34D399',
        'dark-state-danger': '#F87171',
        'dark-state-warning': '#FBBF24',
      },

      fontFamily: {
        'sans': ['Roboto', 'Cairo', 'sans-serif'],
        'heading': ['Raleway', 'sans-serif'],
        'nav': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}