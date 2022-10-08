/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      textColor: (theme) => ({
        ...theme("colors"),

        primary: "hsl(234, 12%, 34%)",

        secondary: "hsl(229, 6%, 66%)",

        terceary: "hsl(0, 0%, 98%)",
      }),
      backgroundColor: (theme) => ({
        ...theme("colors"),

        primary: "hsl(0, 78%, 62%)",

        secondary: "hsl(180, 62%, 55%)",

        terceary: "hsl(34, 97%, 64%)",

        cuarto: "hsl(212, 86%, 64%)",
      }),
    },
    plugins: [],
  },
};
