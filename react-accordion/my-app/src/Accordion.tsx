import { Topic } from './App';
import { useState } from 'react';
import { TopicCard } from './TopicCard';

type Props = {
  topics: Topic[];
};

export function Accordion({ topics }: Props) {
  const [topic, setTopic] = useState<Topic>();

  function handleTopicClick(newTopic: Topic) {
    if (topic === newTopic) {
      // if the newTopic that was clicked is the same as the one open, set it undefined aka close it? closes currently open topic
      setTopic(undefined);
    } else {
      setTopic(newTopic); // if we click on a topic card that isnt opened, close the others and open this one.. open the new topic
    }
  }
  return (
    <div>
      {topics.map((newTopic) => (
        <TopicCard
          onClick={() => handleTopicClick(newTopic)}
          isOpen={topic === newTopic}
          key={newTopic.id}
          topic={newTopic}
        />
      ))}
    </div>
  );
}
