import { App } from "../../app";
import * as actions from './quote.actions';
import {
  QuoteCollection as collection,
  QuoteState as state
} from './quote.state';

const controller = App.Controller({
  name: 'quotes',
  collection,
  state
}).root(actions); // .root() makes the actions available directly from the controller and not controller.actions

export const quotes = controller;