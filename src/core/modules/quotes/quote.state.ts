import { collection, state } from "@pulsejs/core";
import { QuoteBody } from "./quote.interfaces";

export const QuoteCollection = collection<QuoteBody>({
  name: 'quotes_collection', // So we can use preserveServerState
  primaryKey: 'content' // Since we do not provide "id" in our quotes, we need to tell pulse what it should use as a unique identifier
}).createGroup('programming');

export const QuoteState = {
  QUOTES_LOADED: state<boolean>(false)
}