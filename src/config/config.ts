export interface Data {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
}

export const people: Data[] = new Array(500).fill(true).map((_, id) => ({
  id: id,
  firstName: Math.random().toString(20).substring(8),
  lastName: Math.random().toString(20).substring(8),
  age: Math.ceil(Math.random() * 80),
}));
