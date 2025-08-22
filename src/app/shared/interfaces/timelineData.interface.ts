import { SafeHtml } from "@angular/platform-browser";

export interface TimelineData {

      year: string;
      title: string;
      subTitle?: string;
      description?: string;
      stack: IconSvg[];
      isCompleted: boolean;
}

// export interface IconSvg {
//   name?: string;
//   path: string;
//   viewBox?: string;
//   color?: string;

// }

export interface IconSvg {
  name?: string;
  svg: SafeHtml;

}
