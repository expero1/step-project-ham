import { createClientCard, createClientPreviewCard } from "./clients-html.js";
import { clientsInformation } from "./clients-data.js";
import {
  carouselWrapper,
  clientCardContainer,
  getClientInformaton,
  getClientPreview,
} from "./clients-selectors.js";
export const addClientsInformationToCarousel = () => {
  let clientsFragment = "";
  clientsInformation.forEach((client, clientId) => {
    const clientHTML = createClientPreviewCard(
      clientId,
      client.name,
      client.profession,
      client.citation,
      client.photo_url
    );
    clientsFragment += clientHTML;
  });
  carouselWrapper.innerHTML = clientsFragment;
  const firstPreviewElement = getClientPreview(0);
  firstPreviewElement.classList.add("active");
  showClientCard(firstPreviewElement.dataset.id);
};

export const showClientCard = (clientId) => {
  const clientInformation = getClientInformaton(clientId);
  const clientCard = createClientCard(
    clientInformation.clientId,
    clientInformation.clientName,
    clientInformation.clientProf,
    clientInformation.clientCitation,
    clientInformation.clientPhoto
  );
  clientCardContainer.innerHTML = clientCard;
};
