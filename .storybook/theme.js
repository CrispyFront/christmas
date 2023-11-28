import logo from "./Logo.svg";
import { create } from "@storybook/theming";

export default create({
  base: "dark",

  brandImage: logo,
  brandName: "크리스마스에 뭐하지?",
  brandUrl: "https://christmas-mocha.vercel.app/",
});
