const tabbedItemsContainerClass = ".tabbed-items-container";
// const tabLabelContainerClass = ".tab-label-container";
const tabLabelClass = ".tab-label";
const tabContentClass = ".tab-content";
const contentId = "label";

const allServicesTabLabelContainers = document.querySelectorAll(
  tabbedItemsContainerClass
);
const changeActiveTab = (event) => {
  event.preventDefault();
  const tabLabel = event.target.closest(tabLabelClass);
  if (!tabLabel) return;
  const tabbedItemsContainer = tabLabel.closest(tabbedItemsContainerClass);
  const allTabLabel = tabbedItemsContainer.querySelectorAll(tabLabelClass);
  const allTabbedContent =
    tabbedItemsContainer.querySelectorAll(tabContentClass);

  const tabContentId = tabLabel.dataset[contentId];
  const toggleActiveState = (element) => {
    if (element.dataset[contentId] === tabContentId) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  };

  allTabLabel.forEach((tabLabel) => {
    toggleActiveState(tabLabel);
  });
  allTabbedContent.forEach((tabContent) => {
    toggleActiveState(tabContent);
  });
};
allServicesTabLabelContainers.forEach((serviceTabLabel) => {
  serviceTabLabel.addEventListener("click", changeActiveTab);
});
