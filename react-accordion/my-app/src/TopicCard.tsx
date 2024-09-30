import { Topic } from './App';

type Props = {
  topic: Topic;
  isOpen: boolean;
  onClick: () => void;
};
export function TopicCard({ topic, isOpen, onClick }: Props) {
  return (
    <div onClick={onClick} className="cards-container">
      <h1 className="topic-card">{topic.title}</h1>
      {isOpen && <p className="content">{topic.content}</p>}
    </div>
  );
}

// this component renders cards with titles, and conditionally shows the content based on whether the card is open or not
