import { worksImages } from "./works-data.js";
const _delay = async (ms, message = "") => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(message);
    }, ms);
  });
};
export async function getImages({
  filter = null,
  page = 0,
  per_page = 10,
  delay = 0,
}) {
  const filteredImages = worksImages.filter(
    (workItemData) => workItemData.filter === filter || filter === null
  );
  await _delay(delay);
  return filteredImages.slice(page * per_page, (page + 1) * per_page);
}
