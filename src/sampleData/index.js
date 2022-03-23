export const testDataTemplate1 = [
  {
    name: "basicSample1",
    id: "1",
    values: {
      name: "Will",
      jobTitle: "Software Engineer",
      employer: "MLS",
    },
  },
  {
    name: "basicSample2",
    id: "2",
    values: {
      name: "Jim",
      jobTitle: "Sales",
      employer: "Google",
    },
  },
  {
    name: "basicSample3",
    id: "3",
    values: {
      name: "Rory",
      jobTitle: "UX Designer",
      employer: "Netflix",
    },
  },
];

export const basicSample = [
  {
    name: "basicSample1",
    id: "1",
    template:
      "<h3>Hello, my name is {{name}}</h3><p>I am a {{jobTitle}} at <b>{{employer}}</b></p>",
  },
];
