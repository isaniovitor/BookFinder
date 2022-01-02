export interface ImageProps {
  smallThumbnail: string;
  thumbnail: string;
}

export interface VolumeInfoProps {
  title: string;
  description: string;
  authors: string[];
  imageLinks: ImageProps;
}

// export interface SaleInfoProps {}

// export interface AccessInfoProps {}

// export interface SearchInfoProps {}

export interface BookProps {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: VolumeInfoProps;
  saleInfo: any;
  accessInfo: any;
  searchInfo: any;
}
