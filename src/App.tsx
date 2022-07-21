import "./App.css";
import Paragraph from "./components/paragraph/paragraph";

const texts = [
  {
    id: 1,
    title: "What is your return policy?",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro tenetur delectus optio rem at corporis quia explicabo quas accusamus nesciunt deserunt quos, consequuntur iure ea. Perspiciatis distinctio tempora aspernatur quas. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse quas placeat sit odio tempore alias nemo, quo obcaecati doloribus recusandae laborum deleniti quod dolor similique. Possimus nihil molestias at blanditiis!",
  },
  {
    id: 2,
    title: "How do I track my order?",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro tenetur delectus optio rem at corporis quia explicabo quas accusamus nesciunt deserunt quos, consequuntur iure ea. Perspiciatis distinctio tempora aspernatur quas. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse quas placeat sit odio tempore alias nemo, quo obcaecati doloribus recusandae laborum deleniti quod dolor similique. Possimus nihil molestias at blanditiis!",
  },
  {
    id: 3,
    title: "Can I purchase items again?",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro tenetur delectus optio rem at corporis quia explicabo quas accusamus nesciunt deserunt quos, consequuntur iure ea. Perspiciatis distinctio tempora aspernatur quas. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse quas placeat sit odio tempore alias nemo, quo obcaecati doloribus recusandae laborum deleniti quod dolor similique. Possimus nihil molestias at blanditiis!",
  },
];

const App = () => {
  return (
    <>
      <div className="accordion-container">
        {texts.map((text) => (
          <Paragraph
            key={text.id}
            title={text.title}
            description={text.description}
          />
        ))}
      </div>
    </>
  );
};

export default App;
