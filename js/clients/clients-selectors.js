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
export const getNextSiblingElement = (currentElement) => {
  let nextElement = currentElement.nextElementSibling;
  return nextElement ?? currentElement.parentElement.children[0];
};

export const getPrevSiblingElement = (currentElement) => {
  let prevElement = currentElement.previousElementSibling;
  if (!prevElement) {
    const index = currentElement.parentElement.children.length - 1;
    prevElement = currentElement.parentElement.children[index];
  }
  return prevElement;
};
