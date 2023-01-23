import {
  SHOW_CLIENT_ACTION,
  NEXT_CLIENT_ACTION,
  PREV_CLIENT_ACTION,
  MOVE_ELEMENT_ACTION,
  applyAction,
} from "./clients-actions.js";
import { clientsCarousel } from "./clients-selectors.js";
import {
  PREV_BTN_CLASS_NAME,
  NEXT_BTN_CLASS_NAME,
  CAROUSLE_ITEM_CLASS_NAME,
  CLIENTS_SECTION_CLASS_NAME,
} from "./clients-vars.js";

export const activateEventListeners = () => {
  clientsCarousel.addEventListener("click", (event) => {
    event.preventDefault();
    const { target } = event;
    const action = target.closest(`.${PREV_BTN_CLASS_NAME}`)
      ? PREV_CLIENT_ACTION
      : target.closest(`.${NEXT_BTN_CLASS_NAME}`)
      ? NEXT_CLIENT_ACTION
      : target.closest(`.${CAROUSLE_ITEM_CLASS_NAME}`)
      ? SHOW_CLIENT_ACTION
      : null;
    applyAction(action, target);
  });
  const isClientsSectionVisible = () => {
    const clientPosition = document
      .querySelector(`.${CLIENTS_SECTION_CLASS_NAME}`)
      .getBoundingClientRect().top;
    const windowHeight = document.documentElement.clientHeight;
    return (
      clientPosition > -windowHeight / 2 && clientPosition < windowHeight / 2
    );
  };

  document.addEventListener("keydown", (event) => {
    const { target } = event;

    if (isClientsSectionVisible()) {
      let action;
      switch (event.code) {
        case "ArrowLeft":
          event.preventDefault();
          action = PREV_CLIENT_ACTION;
          break;
        case "ArrowRight":
          event.preventDefault();
          action = NEXT_CLIENT_ACTION;
          break;
        case "Space":
          event.preventDefault();
          if (target.closest(`.${PREV_BTN_CLASS_NAME}`)) {
            action = PREV_CLIENT_ACTION;
          } else if (target.closest(`.${NEXT_BTN_CLASS_NAME}`)) {
            action = NEXT_CLIENT_ACTION;
          } else if (target.closest(`.${CAROUSLE_ITEM_CLASS_NAME}`)) {
            action = SHOW_CLIENT_ACTION;
          }
          break;
      }
      applyAction(action, target);
    }
  });

  clientsCarousel.addEventListener("focusin", (event) => {
    const { target } = event;
    if (target.closest(`.${CAROUSLE_ITEM_CLASS_NAME}`)) {
      // moveElementTo(target);
      applyAction(MOVE_ELEMENT_ACTION, target);
    }
  });
};
