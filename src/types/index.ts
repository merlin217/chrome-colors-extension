export enum Sender {
  React,
  Content,
}

export interface Palette {
  name: string;
  background: string[];
  text: string[];
  button: string[];
  highlight: string[];
}

export interface ChromeMessage {
  from: Sender;
  palette?: Palette;
}
