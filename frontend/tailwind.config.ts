import type { Config } from "tailwindcss";
import withMT from "@material-tailwind/react/utils/withMT";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3d5aa0",
      }
    },
  },
}

const withMaterialTailwind = withMT(config);
export default withMaterialTailwind;