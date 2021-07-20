import * as actions from './quote.actions';
import {
  QuoteCollection as collection,
  QuoteState as state
} from './quote.state';

export default {
  collection,
  state,
  ...actions
}