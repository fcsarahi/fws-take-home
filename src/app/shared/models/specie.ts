export interface Specie {
  name: string;
  url: string;
}

export interface SpecieDetail {
  id: number;
  name: string;
  order: number;
  color: Color;
  shape: Shape;
  pictureUrl: string;
}

export interface Color {
  name: string;
}

export interface Shape {
  name: string;
}
