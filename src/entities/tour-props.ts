interface TourEntity {
  uuid: string,
  image_urls: string[];
  location: string;
  inBookmark?: boolean;
  days_duration: string;
  title: string;
  price: number;
  previousPrice?: number;
  score: number;
}
