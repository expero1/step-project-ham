import { getImages } from "./works-load-images.js";
import { addImagesToPage } from "./works-add-to-page.js";
import { worksState } from "./works-state.js";
export function initialLoadImages() {
  getImages({
    filter: null,
    page: worksState.currentPage,
    per_page: 12,
    delay: 0,
  }).then((images) => {
    addImagesToPage(images);
    worksState.currentPage++;
  });
}
