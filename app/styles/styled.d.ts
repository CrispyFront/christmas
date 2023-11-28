import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    btnColor: {
      red: string;
      green: string;
    };

    fontWeight: {
      normal: number;
      bold: number;
    };
  }
}
