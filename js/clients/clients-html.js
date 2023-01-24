import {
  CAROUSEL_PREVIEW_IMAGE_CLASS_NAME,
  CAROUSEL_PREVIEW_WRAPPER_CLASS_NAME,
  CAROUSLE_ITEM_CLASS_NAME,
  CLIENTS_TAB_CITATION_CLASS_NAME,
  CLIENTS_TAB_IMAGE_CLASS_NAME,
  CLIENTS_TAB_IMAGE_WRAPPER_CLASS_NAME,
  CLIENTS_TAB_NAME_CLASS_NAME,
  CLIENTS_TAB_PROFESSION_CLASS_NAME,
} from "./clients-vars.js";

export const createClientPreviewCard = (
  clientId,
  clientName,
  clientProfession,
  clientCitation,
  clientPhotoUrl
) => {
  return `
  <a class="${CAROUSLE_ITEM_CLASS_NAME}" href="#" 
  	data-id="${clientId}" 
	data-name="${clientName}" 
	data-prof="${clientProfession}" 
	data-citat = "${clientCitation}" 
	data-photo="${encodeURI(clientPhotoUrl)}">
	<!--<div class="${CAROUSEL_PREVIEW_WRAPPER_CLASS_NAME}">-->
	  <img class="${CAROUSEL_PREVIEW_IMAGE_CLASS_NAME}" src="${encodeURI(
    clientPhotoUrl
  )}" alt="${clientName}, ${clientProfession}" />
	<!--</div>-->
  </a>
	`;
};

export const createClientCard = (
  clientId,
  clientName,
  clientProfession,
  clientCitation,
  clientPhotoUrl
) => {
  return `
	<p class="${CLIENTS_TAB_CITATION_CLASS_NAME}">
	${clientCitation}
	</p>
	<p class="${CLIENTS_TAB_NAME_CLASS_NAME}">${clientName}</p>
	<p class="${CLIENTS_TAB_PROFESSION_CLASS_NAME}">${clientProfession}</p>
	<!--<div class="${CLIENTS_TAB_IMAGE_WRAPPER_CLASS_NAME}">-->
  <img class="${CLIENTS_TAB_IMAGE_CLASS_NAME}" src="${encodeURI(
    clientPhotoUrl
  )}"
		alt="${clientName}, ${clientProfession}" /><!--</div>-->`;
};
