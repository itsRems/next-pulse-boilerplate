import { preserveServerState, usePulse } from '@pulsejs/next';
import core from '../core';
import { ProgrammingQuotes } from '../core/modules/quotes/quote.data';

export default function SsrQuotes () {
  const [quotes] = usePulse([
    core.quotes.collection.groups.programming
  ]);
  return (
    <div>
      <h1>Programming quotes.</h1>
      <ul>
        {
          quotes.map((quote, index) => (
            <li key={`q_${index}`}>
              { quote.author } once said: "{ quote.content }"
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export const getServerSideProps = async () => {
  const data = { props: {} };

  core.quotes.collection.collect(ProgrammingQuotes, 'programming');

  return preserveServerState(data);
}