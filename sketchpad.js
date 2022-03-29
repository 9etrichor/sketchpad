let size = 16; /*number of box each side */
let sideLength = 512 / size; /* size of a single box */
let colDiv; /* store column element just create */
let rowDiv; /* store row element just create */
const container = document.getElementById('container');

/* create elements start */
for(let i = 0;i < size;i++) //make column elements
{
    colDiv = document.createElement('div');
    colDiv.classList.add('a_row');
    colDiv.style.height = `${sideLength}px`; //set every column elements' height to fill height of container
    container.appendChild(colDiv);

    for(let r = 0; r < size; r++) //make row elements, paraent is column element
    {
        rowDiv = document.createElement('div');
        colDiv.appendChild(rowDiv);
        rowDiv.textContent = "1";
        rowDiv.style.width = `${sideLength}px`; //set every row elements' width to fill width of container
    };
};
/* create elements end */
console.log();