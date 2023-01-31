import { setMaxHeightOfWorkItemContainer } from "./works-add-to-page.js";
import {
  workItems,
  workMenuItems,
  workMenuContainer,
  WORK_MENU_ITEM_CLASS_NAME,
  WORK_MENU_LINK_CLASS_NAME,
} from "./works-selectors.js";
const showAllItemsFilter = "all";
let currentFilter = showAllItemsFilter;

export const filterWorkItems = (filter = showAllItemsFilter) => {
  Array.from(workItems).forEach((workItem) => {
    const currentItemFilter = workItem.dataset.filter.trim();
    currentFilter === showAllItemsFilter || currentItemFilter.includes(filter)
      ? workItem.classList.remove("hide")
      : workItem.classList.add("hide");
  });
};

const worksFilter = (event) => {
  event.preventDefault();
  const currentMenuItem = event.target.closest(`.${WORK_MENU_ITEM_CLASS_NAME}`);
  if (!currentMenuItem) return;
  currentFilter = currentMenuItem.dataset.filter;
  filterWorkItems(currentFilter);
  setMaxHeightOfWorkItemContainer();
  Array.from(workMenuItems).forEach((menuItem) => {
    const menuLink = menuItem.querySelector(`.${WORK_MENU_LINK_CLASS_NAME}`);
    if (menuItem === currentMenuItem) {
      menuItem.classList.add("active");
      menuLink.classList.add("active");
    } else {
      menuItem.classList.remove("active");
      menuLink.classList.remove("active");
    }
  });
};
export const worksFilterEventListener = () => {
  workMenuContainer.addEventListener("click", worksFilter);
};
