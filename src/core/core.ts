// Import Pulse first
import { App } from "./app";

// Import controllers
import { quotes } from './controllers/quotes';

export const core = App.Core({
  quotes
});