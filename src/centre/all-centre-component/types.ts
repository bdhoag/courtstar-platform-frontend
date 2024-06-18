export interface Image {
  id: number;
  imageNo: number;
  url: string;
}

export interface CentreProps {
  id: number;
  name: string;
  address: string;
  district: string;
  openTime: string;
  closeTime: string;
  pricePerHour: number;
  numberOfCourts: number;
  images: Image[];
  rating: number;
}

export interface CentreListProps {
  centres: CentreProps[];
}
