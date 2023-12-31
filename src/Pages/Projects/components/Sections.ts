export interface Sections {
  [index: string]: Section;
}

interface Section {
  section: JSX.Element;
  name: string;
}
