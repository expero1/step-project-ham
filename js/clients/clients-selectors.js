import {
  ACTIVE_ITEM_CLASS_NAME,
  CAROUSLE_ITEM_CLASS_NAME,
  CLIENTS_CAROUSEL_CLASS_NAME,
  CLIENTS_SECTION_CLASS_NAME,
} from "./clients-vars.js";

export const clients = document.querySelector(`.${CLIENTS_SECTION_CLASS_NAME}`);
export const clientsCarousel = clients.querySelector(
  `.${CLIENTS_CAROUSEL_CLASS_NAME}`
);
export const carouselWrapper =
  clientsCarousel.querySelector(".carousel-wrapper");
export const clientCardContainer = clients.querySelector(".clients-tab");
export const getClientInformaton = (clientId) => {
  const clientPreview = carouselWrapper.querySelector(
    `[data-id="${clientId}"]`
  );

  const clientName = clientPreview.dataset.name;
  const clientProf = clientPreview.dataset.prof;
  const clientCitation = clientPreview.dataset.citat;
  const clientPhoto = clientPreview.dataset.photo;
  return { clientId, clientName, clientProf, clientCitation, clientPhoto };
};
export const getClientPreview = (index) =>
  carouselWrapper.querySelectorAll(".carousel-link")[index] ?? null;

export const getActiveCarouselLink = () => {
  return (
    clientsCarousel.querySelector(
      `.${CAROUSLE_ITEM_CLASS_NAME}.${ACTIVE_ITEM_CLASS_NAME}`
    ) ?? clientsCarousel.querySelector(`.${CAROUSLE_ITEM_CLASS_NAME}`)
  );
};

export const getNextSiblingElement = (currentElement, className) => {
  let allSiblings = Array.from(currentElement.parentElement.children);
  if (!currentElement) return allSiblings[0];
  if (className)
    allSiblings = allSiblings.filter((element) => {
      element.classList.contains(className);
    });
  const currentElementIndex = allSiblings.indexOf(currentElement);
  return currentElementIndex >= allSiblings.length - 1
    ? allSiblings[0]
    : allSiblings[currentElementIndex + 1];
};
export const getPrevSiblingElement = (currentElement, className) => {
  let allSiblings = Array.from(currentElement.parentElement.children);
  if (!currentElement) return allSiblings[allSiblings.length - 1];
  if (className)
    allSiblings = allSiblings.filter((element) => {
      element.classList.contains(className);
    });
  const currentElementIndex = allSiblings.indexOf(currentElement);
  return currentElementIndex <= 0
    ? allSiblings[allSiblings.length - 1]
    : allSiblings[currentElementIndex - 1];
};
