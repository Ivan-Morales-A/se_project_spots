const initialCards = [
{name: "Dark Alley", link: "https://images.unsplash.com/photo-1739192415587-f846fb6c731c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D"},
{name: "Flower Bay", link: "https://images.unsplash.com/photo-1739361043380-f75ae825aee0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"},
{name: "Penguin Town", link: "https://images.unsplash.com/photo-1739056656210-7c3cab6fff42?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D"},
{name: "Icy Mountain", link: "https://images.unsplash.com/photo-1739036462754-6e86520998a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D"},
{name: "Secret Owl", link: "https://images.unsplash.com/photo-1734907865880-6eb669831b9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0NHx8fGVufDB8fHx8fA%3D%3D"},
{name: "US Flag", link: "https://plus.unsplash.com/premium_photo-1738779001501-8a84fd12a449?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D"},
];



const profileEditButton = document.querySelector(".profile__edit-btn");
const profileName =document.querySelector(".profile__name");
const profileDesctription = document.querySelector(".profile__desctription");

const editModal = document.querySelector("#edit-modal");

const editModalCloseBtn = editModal.querySelector(".modal__close-btn")
const editModalNameInput = editModal.querySelector("#profile-name-input");
const editModalDesctription = editModal.querySelector("#profile-description-input")
const editFormElement = editModal.querySelector(".modal__form")
const cardTemplate = document.querySelector("#card-template");
const cardsList = document.querySelector(".cards__list")



function getCardElement (data){
 const cardElement = cardTemplate.content
 .querySelector(".card")
 .cloneNode(true);

 const cardNameEl = cardElement.querySelector(".card__tittle") ;
 const cardImgEl = cardElement.querySelector(".card__image")

 cardImgEl.alt = data.name;
 cardNameEl.textContent = data.name;
 cardImgEl.src = data.link;
 return cardElement;
}

function openModal (){
    editModalNameInput.value = profileName.textContent;
    editModalDesctription.value = profileDesctription.textContent;
    editModal.classList.add("modal_opened");

}

function closeModal(){
    editModal.classList.remove("modal_opened");
}
function handleEditFormSubmit(evt){
    evt.preventDefault();
    profileName.textContent = editModalNameInput.value;
    profileDesctription.textContent = editModalDesctription.value;
    closeModal();
}


profileEditButton.addEventListener("click", openModal);

editModalCloseBtn.addEventListener("click", closeModal);

editFormElement.addEventListener("submit", handleEditFormSubmit);

for (let i = 0; i < initialCards.length; i++) {
    const cardElement = getCardElement(initialCards[i]);
    cardsList.prepend(cardElement)

}

