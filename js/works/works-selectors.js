const WORKS_SECTION_CLASS_NAME = "work-section";
const WORK_MENU_CONTAINER_CLASS_NAME = "work-menu__container";
export const WORK_MENU_ITEM_CLASS_NAME = "work-menu__item";
export const WORK_MENU_LINK_CLASS_NAME = "work-menu__link";
const WORK_ITEM_CONTAINER_CLASS_NAME = "work-item__container";
const WORK_ITEM_CLASS_NAME = "work-item";
const WORK_LOAD_MORE_BTN_CLASS_NAME = "load-more-btn";
const LOAD_SPINNER_CLASS_NAME = "load-spinner";
export const worksSection = document.querySelector(
  `.${WORKS_SECTION_CLASS_NAME}`
);
export const workMenuContainer = worksSection.querySelector(
  `.${WORK_MENU_CONTAINER_CLASS_NAME}`
);
export const workMenuItems = worksSection.getElementsByClassName(
  WORK_MENU_ITEM_CLASS_NAME
);
// export const selectWorkItems = () =>
//   worksSection.getElementsByClassName(WORK_ITEM_CLASS_NAME);
export const workItemContainer = worksSection.querySelector(
  `.${WORK_ITEM_CONTAINER_CLASS_NAME}`
);

export const workItems =
  worksSection.getElementsByClassName(WORK_ITEM_CLASS_NAME);
export const workLoadMoreBtn = worksSection.querySelector(
  `.${WORK_LOAD_MORE_BTN_CLASS_NAME}`
);
export const loadSpinner = worksSection.querySelector(
  `.${LOAD_SPINNER_CLASS_NAME}`
);

// export const selectWorkMenuItems = () =>
//   worksSection.getElementsByClassName(WORK_MENU_ITEM_CLASS_NAME);
export const getActiveWorkMenuItem = () =>
  worksSection.querySelector(".work-menu__item.active");
