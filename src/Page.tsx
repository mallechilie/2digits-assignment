export interface Page {
  title: string;
  page_header: {
    title: string;
    text?: undefined | string;
    image: {
      url?: undefined | string;
      width?: undefined | number;
      height?: undefined | number;
    };
  };
}
