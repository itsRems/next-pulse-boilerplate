import { usePulse } from "@pulsejs/next";
import { useEffect } from "react";
import core from "../core";

export default function IndexPage () {
  const [quotes, show] = usePulse([
    core.quotes.groups.programming,
    core.quotes.state.QUOTES_LOADED
  ]);
  useEffect(() => {
    core.quotes.loadQuotes();
  }, []);
  if (!show) return <p>Loading your quotes</p>;
  return (
    <div>
      <h1>Programming quotes.</h1>
      <ul>
        {
          quotes.map((quote) => (
            <li>{ quote.author } once said: "{ quote.content }"</li>
          ))
        }
      </ul>
    </div>
  );
}