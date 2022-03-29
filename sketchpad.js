let size = 16; /*number of box each side */
let sideLength = 512 / size; /* size of a single box */
let colDiv; /* store column element just create */
let rowDiv; /* store row element just create */
const container = document.getElementById('container');

/* create elements start */
function makeElements(){
for(let i = 0;i < size;i++) //make column elements
{
    colDiv = document.createElement('div');
    colDiv.classList.add('a_row');
    colDiv.style.height = `${sideLength}px`; //set every column elements' height to fill height of container
    container.appendChild(colDiv);

    for(let r = 0; r < size; r++) //make row elements, paraent is column element
    {
        rowDiv = document.createElement('div');
        //console.log(rowDiv.id)
        colDiv.appendChild(rowDiv);
        rowDiv.textContent = "";
        rowDiv.style.width = `${sideLength}px`; //set every row elements' width to fill width of container
    };
};
}
/* create elements end */

/* when mouse is hover, that area will change color, start*/
function whenHover()
{
let columns = container.children;
for(let i = 0;i < columns.length; i++)
{
    let rows = columns[i].children;
    for(let r = 0;r < rows.length;r++)
    {
        rows[r].addEventListener('mouseover', function(){
            rows[r].style.backgroundColor = "blue";
        });
    };
};
};
/* when mouse is hover, that area will change color, end*/

makeElements();
whenHover();