// tailwind.config.js
import daisyui from 'daisyui'; // Importing daisyui using ES Modules syntax

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
//   isse hm dark mode set krte hain
  theme: {
    extend: {},
  },
  plugins: [daisyui], // Using the imported daisyui plugin
};
