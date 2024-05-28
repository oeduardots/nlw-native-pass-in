import { fontFamily } from "./src/styles/fontFamily"
import { colors } from "./src/styles/colors"

/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily,
      colors,
    },
  },
  plugins: [],
}
