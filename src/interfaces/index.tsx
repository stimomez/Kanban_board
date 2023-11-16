export interface Color {
  violet: "#6a6dcd";
  fuchsia: "#e3a7d3";
  red: "#d93535";
  blue: "#3180e2";
  green: "#00a88b";
}

export interface Task {
  id: string;
  title: string;
  body?: string;
  list: number;
  color: string;
}
