export interface IListItem {
  name: string;
  age: string;
  position: string[];
  description: string;
  heart: boolean;
  avatar?: string;
}

export default (): Promise<IListItem[]> => new Promise((resolve) => {
  return resolve([
    {
      "name": "Kostas Antetokounmpo",
      "age": "29",
      "position": [
        "Developer"
      ],
      "description": "Work with developers to design algorithms and flowcharts.",
      "heart": false
    },
    {
      "name": "Avery Bradley",
      "age": "23",
      "position": [
        "Desinger"
      ],
      "description": "Produce clean, efficient code based on specifications.",
      "heart": false
    },
    {
      "name": "Alex Caruso",
      "age": "31",
      "position": [
        "Architect",
        "Sales"
      ],
      "description": "Integrate software components and third-party programs.",
      "heart": false
    },
    {
      "name": "Quinn Cook",
      "age": "25",
      "position": [
        "Editor"
      ],
      "description": "Proven experience as a Software Developer, Software Engineer or similar role.",
      "heart": false
    },
    {
      "name": "Troy Daniels",
      "age": "22",
      "position": [
        "Sales",
        "Editor"
      ],
      "description": "Experience with databases and Object-Relational Mapping (ORM) frameworks (e.g. Hibernate).",
      "heart": false
    },
    {
      "name": "Danny Green",
      "age": "33",
      "position": [
        "Architect",
        "Editor"
      ],
      "description": "Experience with software design and development in a test-driven environment.",
      "heart": false
    },
    {
      "name": "LeBron James",
      "age": "32",
      "position": [
        "Developer",
        "Desinger"
      ],
      "description": "Knowledge of coding languages (e.g. C++, Java, JavaScript) and frameworks/systems (e.g. AngularJS, Git).",
      "heart": false
    },
    {
      "name": "Kyle Kuzma",
      "age": "40",
      "position": [
        "Developer",
        "Editor"
      ],
      "description": "Create technical documentation for reference and reporting.",
      "heart": false
    },
    {
      "name": "JaVale McGee",
      "age": "20",
      "position": [
        "Developer",
        "Architect",
        "Sales"
      ],
      "description": "Troubleshoot, debug and upgrade existing software.",
      "heart": false
    },
    {
      "name": "Rajon Rondo",
      "age": "28",
      "position": [
        "Developer",
        "Desinger",
        "Architect",
        "Sales",
        "Editor"
      ],
      "description": "Integrate software components and third-party programs.",
      "heart": false
    }
  ]);
});
