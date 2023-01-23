export const itemClassName = "work-item";
const itemImageClassName = "work-item__image";
const itemDescriptionClassName = "work-item__description";
// const createElement = (
//   tagName,
//   className = "",
//   attrList = {},
//   content = ""
// ) => {
//   const element = document.createElement(tagName);
//   if (Array.isArray(className)) className = className.join(" ");
//   element.className = className;
//   for (const attr in attrList) {
//     element.setAttribute(attr, attrList[attr]);
//   }
//   if (content) element.append(content);
//   return element;
// };
// export const createWorkItem = (
//   imageUrl,
//   filter,
//   link,
//   altLink,
//   itemHeader,
//   itemParagraphs
// ) => {
//   const workItem = createElement("div", itemClassName, {
//     "data-filter": filter,
//   });
//   const image = createElement("img", itemImageClassName, { src: imageUrl });
//   const description = createElement("div", itemDescriptionClassName);
//   const mainLink = createElement("a", "work-item__link work-item__main-link", {
//     href: link,
//   });
//   const additionalLink = createElement(
//     "a",
//     "work-item__link work-item__alt-link",
//     { href: altLink }
//   );
//   const header = createElement("h3", "work-item__header", {}, itemHeader);
//   let paragraphs = [];
//   if (Array.isArray(itemParagraphs)) {
//     paragraphs = itemParagraphs.map((parContent) =>
//       createElement("p", "work-item__par", {}, parContent)
//     );
//   } else {
//     paragraphs = [createElement("p", "work-item__par", {}, itemParagraphs)];
//   }
//   description.append(mainLink);
//   description.append(additionalLink);
//   description.append(header);
//   paragraphs.forEach((p) => {
//     description.append(p);
//   });
//   workItem.append(image);
//   workItem.append(description);
//   return workItem;
// };

export const createWorkItem = (
  imageUrl,
  filter,
  mainLink,
  altLink,
  header,
  description
) => {
  return `<div class="work-item" data-filter="${filter}">
    <img class="work-item__image" src="${imageUrl}" />
    <div class="work-item__description">
      <a class="work-item__link work-item__main-link" href="${mainLink}"></a>
      <a class="work-item__link work-item__alt-link" href="${altLink}"></a>
      <h3 class="work-item__header">${header}</h3>
      <p class="work-item__par">${description}</p>
    </div>`;
};
