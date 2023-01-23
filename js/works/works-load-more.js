import { addImagesToPage } from "./works-add-to-page.js";
import { filterWorkItems } from "./works-filter.js";
import { getImages } from "./works-load-images.js";
import {
  getActiveWorkMenuItem,
  loadSpinner,
  workLoadMoreBtn,
} from "./works-selectors.js";
import { worksState } from "./works-state.js";

const loadMoreImages = async (event) => {
  const currentPage = worksState.currentPage;
  const currentFilter = getActiveWorkMenuItem().dataset.filter;
  workLoadMoreBtn.disabled = "disabled";
  loadSpinner.classList.add("show");
  const images = await getImages({
    filter: null,
    page: currentPage,
    per_page: worksState.itemsPerPage,
    delay: 2000,
  });
  addImagesToPage(images);
  filterWorkItems(currentFilter);
  worksState.currentPage++;
  workLoadMoreBtn.disabled = "";
  loadSpinner.classList.remove("show");
  if (worksState.currentPage > worksState.maxPageToShow)
    workLoadMoreBtn.classList.add("hide");
};
export const worksLoadMoreEventListener = () => {
  workLoadMoreBtn.addEventListener("click", loadMoreImages);
};
