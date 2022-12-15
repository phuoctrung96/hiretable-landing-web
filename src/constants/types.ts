export interface SwitchButtonItem {
  id: number;
  title: string;
}
export interface EnumServiceItems extends Array<SwitchButtonItem> {}

export interface HireEasilyItem {
  id: number;
  title: string;
  subTitle: string;
  desc: string;
  videoUrl: string;
}

export interface FQAItemType {
  id: number;
  title: string;
  desc: string;
}
