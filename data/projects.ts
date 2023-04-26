interface Project {
  image: string;
  tools: string[];
  description: string;
  title: string;
}

export const projects: Project[] = [
  {
    description:
      "My most challenging app is a social interaction platform where users can create an account, create, update, and delete posts, add comments and recursively reply to those comments. Users can also browse different posts created by other users and can like or remove likes from those posts. Initially created for a Frontend Mentor challenge, I expanded it into a full-stack application. It was a challenging project that required a lot of effort, but I am proud of the final product and the skills I gained through the process. In the future I'm planning to add a follow system.",
    image: "/images-2/post-images/post-project_macbookgrey_front.png",
    tools: [
      "Typescript",
      "React",
      "Redux Toolkit",
      "Vite",
      "TailwindCSS",
      "Nest",
      "PostgreSQL",
      "Docker",
    ],
    title: "Posts App",
  },
  {
    description:
      "This is an ecommerce platform that provides customers with features such as browsing through a wide range of products, adding items to their cart, and checking out with ease. Additionally, this platform includes PayPal as a payment option. Moreover, this ecommerce project includes an admin panel that allows the admin to manage their products, view orders, and track their inventory. They can create and publish new product listings, as well as edit existing ones. This panel also provides valuable insights into sales performance and offers features such as inventory tracking, sales reports, and order management. For the design, I was inspired by this Frontend Mentor challenge: [ECOMMERCE-CHALLENGE]",
    image: "/images-2/ecommerce-images/ecommerce-project_macbookgrey_front.png",
    tools: [
      "Typescript",
      "Next.js",
      "React Context API",
      "MUI",
      "MongoDB",
      "Docker",
    ],
    title: "Audiophile",
  },
  {
    description:
      "This website was for a real estate agent that allows users to navigate through various properties and provides information about each property, such as its location, price, and features.In addition to this, the project includes an admin panel that allows the agent to manage their properties, including adding new ones, updating existing ones, and removing old ones. This project was especially significant to me since it was my first real project for a client, and I was able to gain valuable experience in building a functional and effective website.",
    image:
      "/images-2/realestate-images/realestate-project_macbookgrey_front.png",
    tools: [
      "Typescript",
      "Next.js",
      "Redux Toolkit",
      "TailwindCSS",
      "Nest",
      "PostgreSQL",
      "Docker",
    ],
    title: "Real Estate Agent",
  },
  {
    description:
      "This is a command-line interface (CLI) tool that allows users to write and execute code in a built-in code editor and view the output in real-time. In addition to the code execution feature, this project also includes a built-in text editor that allows users to save text along with their code in the same window. This is especially useful for documenting the coding process or taking notes along with the code. At this time, users can only write JavaScript and React code, but in the future, I am planning to add support for more programming languages.",
    image: "/images-2/notescript-images/notescript_macbookgrey_front.png",
    tools: [
      "Typescript",
      "React",
      "Redux Toolkit",
      "Vite",
      "MUI",
      "Node",
      "Lerna",
    ],
    title: "Notescript",
  },
];
