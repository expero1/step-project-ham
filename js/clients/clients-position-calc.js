import { carouselWrapper } from "./clients-selectors.js";
import {
  ACTIVE_ITEM_CLASS_NAME,
  CAROUSLE_ITEM_CLASS_NAME,
  ITEM_PREVIEW_WIDTH,
} from "./clients-vars.js";
import { showClientCard } from "./create-slider.js";
const scrollElement = (element, moveDistance) => {
  let leftSide = element.offsetLeft + moveDistance;
  const rightSide = leftSide + element.offsetWidth;
  const visibleRightSide = element.offsetParent.offsetWidth;
  switch (Math.sign(moveDistance)) {
    case -1:
      if (rightSide < visibleRightSide)
        leftSide += visibleRightSide - rightSide;
      break;
    case 1:
      if (leftSide > 0) leftSide = 0;
  }
  element.style.left = `${leftSide}px`;
};
export const moveElementTo = (element) => {
  const leftSide = element.offsetLeft + element.offsetParent.offsetLeft;
  const visibleRightSide = element.offsetParent.offsetParent.offsetWidth;
  const targetPoint = visibleRightSide / 2 - element.offsetWidth / 2;
  if (leftSide < 0 || leftSide + ITEM_PREVIEW_WIDTH > visibleRightSide) {
    let moveDistance = targetPoint - leftSide;
    scrollElement(element.offsetParent, moveDistance);
  }
};
export const showClient = (target) => {
  const clientId = target.dataset.id;
  const carouselLinks = carouselWrapper.querySelectorAll(
    `.${CAROUSLE_ITEM_CLASS_NAME}`
  );
  carouselLinks.forEach((carouselLink) => {
    carouselLink.dataset.id === clientId
      ? carouselLink.classList.add(ACTIVE_ITEM_CLASS_NAME)
      : carouselLink.classList.remove(ACTIVE_ITEM_CLASS_NAME);
  });
  // const clientsTabs = clients.querySelectorAll(".clients-tab");
  // clientsTabs.forEach((clientTab) => {
  //   clientTab.dataset.id === clientId
  //     ? clientTab.classList.add(ACTIVE_ITEM_CLASS_NAME)
  //     : clientTab.classList.remove(ACTIVE_ITEM_CLASS_NAME);
  // });
  showClientCard(clientId);
};
