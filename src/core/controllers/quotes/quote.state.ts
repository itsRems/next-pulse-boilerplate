import { App } from "../../app";
import { QuoteBody } from "./quote.interfaces";

export const QuoteCollection = App.Collection<QuoteBody>()((Collection) => ({
  name: 'quotes_collection', // So we can use preserveServerState
  groups: {
    programming: Collection.Group()
  },
  primaryKey: 'content' // Since we do not provide "id" in our quotes, we need to tell pulse what it should use as a unique identifier
}));

export const QuoteState = {
  QUOTES_LOADED: App.State<boolean>(false)
}