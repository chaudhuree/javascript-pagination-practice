// get references to the UI elements
const container = document.getElementById('container');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

// define the items per page
const itemsPerPage = 4;

// define the current page number
let currentPage = 1;

// define the array of items
const items = [
  { id: 1, name: 'Item 1', details:"lorem ipsum do it" },
  { id: 2, name: 'Item 2', details:"lorem ipsum" },
  { id: 3, name: 'Item 3' , details:"lorem"},
  { id: 4, name: 'Item 4', details:"lorem ipsum do it" },
  { id: 5, name: 'Item 5', details:"lorem ipsum do it" },
  { id: 6, name: 'Item 6', details:"lorem ipsum do it" },
  { id: 7, name: 'Item 7', details:"lorem ipsum do it" },
  { id: 8, name: 'Item 8' , details:"lorem ipsum do it"},
  { id: 9, name: 'Item 9', details:"lorem ipsum do it" },
  { id: 10, name: 'Item 10', details:"lorem ipsum do it" },
  { id: 11, name: 'Item 11', details:"lorem ipsum do it" },
  { id: 12, name: 'Item 12' , details:"lorem ipsum do it"},
  { id: 13, name: 'Item 13', details:"lorem ipsum do it" },
  { id: 14, name: 'Item 14', details:"lorem ipsum do it" },
  { id: 15, name: 'Item 15', details:"lorem ipsum do it" },
];

// render the items based on the current page number
function renderItems() {
  // calculate the starting index and ending index of the items for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  // extract the subset of items for the current page
  const pageItems = items.slice(startIndex, endIndex);
  // render the items in the UI
  container.innerHTML = '';
  for (const item of pageItems) {
    const itemElement = document.createElement('div');
    itemElement.innerHTML = `<h1>${ item.name}</h1><br/> <p> ${item?.details}</p>`;
    
    container.appendChild(itemElement);
  }
}

// update the UI and the current page number based on the navigation button clicked
function navigate(direction) {
  if (direction === 'prev' && currentPage > 1) {
    currentPage--;
  } else if (direction === 'next' && currentPage < Math.ceil(items.length / itemsPerPage)) {
    currentPage++;
  }
  // disable the prev button if we are on the first page
  prevButton.disabled = (currentPage === 1);
  // disable the next button if we are on the last page
  nextButton.disabled = (currentPage === Math.ceil(items.length / itemsPerPage));
  // render the items for the current page
  renderItems();
}

// add event listeners to the navigation buttons
prevButton.addEventListener('click', () => navigate('prev'));
nextButton.addEventListener('click', () => navigate('next'));

// render the items for the first page
renderItems();
