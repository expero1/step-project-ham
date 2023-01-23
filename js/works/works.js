import { worksFilterEventListener } from "./works-filter.js";
import { initialLoadImages } from "./works-init-load.js";
import { worksLoadMoreEventListener } from "./works-load-more.js";
initialLoadImages();
worksLoadMoreEventListener();
worksFilterEventListener();
