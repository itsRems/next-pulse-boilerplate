import { ProgrammingQuotes } from './quote.data';
import {
  QuoteCollection as collection,
  QuoteState as state
} from './quote.state';

export function loadQuotes () {
  collection.collect(ProgrammingQuotes, 'programming');
  state.QUOTES_LOADED.set(true);
}