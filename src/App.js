import Accordion from "./components/Accordion";

function App() {
  const items = [
    {
      label: "Can I use React on this project?",
      content:
        "You can use react on any project you want. You can use react on any project you want. You can use react on any project you want.",
    },
    {
      label: "Can I use Javascript on this project?",
      content:
        "You can use react on any project you want. You can use react on any project you want. You can use react on any project you want.",
    },
    {
      label: "Can I use CSS on this project?",
      content:
        "You can use react on any project you want. You can use react on any project you want. You can use react on any project you want.",
    },
  ];

  return <Accordion items={items} />;
}

export default App;
