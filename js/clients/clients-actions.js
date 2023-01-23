import { moveElementTo, showClient } from "./clients-position-calc.js";
import {
  getActiveCarouselLink,
  getNextSiblingElement,
  getPrevSiblingElement,
} from "./clients-selectors.js";

import { CAROUSLE_ITEM_CLASS_NAME } from "./clients-vars.js";

export const NEXT_CLIENT_ACTION = "next_client_action";
export const PREV_CLIENT_ACTION = "prev_client_action";
export const SHOW_CLIENT_ACTION = "show_client_action";
export const MOVE_ELEMENT_ACTION = "move_element_action";

export const applyAction = (action, target) => {
  if (!action) return;
  let activeCarouselLink;
  switch (action) {
    case null:
      break;
    case PREV_CLIENT_ACTION:
      activeCarouselLink = getActiveCarouselLink();
      const prevClient = getPrevSiblingElement(activeCarouselLink, "");
      showClient(prevClient);
      moveElementTo(prevClient);
      break;
    case NEXT_CLIENT_ACTION:
      activeCarouselLink = getActiveCarouselLink();
      const nextClient = getNextSiblingElement(activeCarouselLink, "");
      showClient(nextClient);
      moveElementTo(nextClient);
      break;
    case SHOW_CLIENT_ACTION:
      showClient(target.closest(`.${CAROUSLE_ITEM_CLASS_NAME}`));
      break;
    case MOVE_ELEMENT_ACTION:
      moveElementTo(target);
  }
};
