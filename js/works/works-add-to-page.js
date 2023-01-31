import { createWorkItem } from "./create-work-item.js";
import { workItemContainer } from "./works-selectors.js";
export const addImagesToPage = (images) => {
  images.forEach((image) => {
    const workItem = createWorkItem(
      image.image_url,
      image.filter,
      image.main_link,
      image.alt_link,
      image.header,
      image.description
    );
    workItemContainer.insertAdjacentHTML("beforeend", workItem);
  });
  setMaxHeightOfWorkItemContainer();
};

export const setMaxHeightOfWorkItemContainer = () => {
  workItemContainer.style.maxHeight = workItemContainer.scrollHeight + "px";
};
