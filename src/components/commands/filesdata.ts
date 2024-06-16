export type File = {
  id: number;
  title: string;
  url: string;
};

const files: File[] = [
  {
    id: 1,
    title: "CV.pdf",
    url: "/CV.pdf",
  },
  // {
  //   id: 2,
  //   title: "Icon.jpg",
  //   url: "/icon.jpg",
  // },
];

export default files;
