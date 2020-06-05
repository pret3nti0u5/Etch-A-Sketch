function generateEtch(gridNumber){   
    let dimension = 400/gridNumber;
    let cells = document.querySelector("#etchContainer");
    cells.innerHTML = "";
    for (let i = 0; i < gridNumber; i++) {
        for (let j = 0; j < gridNumber; j++) {
            let div = document.createElement("div");
            div.style.width = `${dimension.toString()}px`;
            div.style.height = `${dimension.toString()}px`;
            div.classList.add("etch");
            document.getElementById("etchContainer").appendChild(div);
        }
        let jump = document.createElement("br");
        document.getElementById("etchContainer").appendChild(jump);
    }
    const etchs = document.querySelectorAll(".etch");
    etchs.forEach((etch) => {
        etch.addEventListener('mouseover', function(e){
            e.target.style.background="black";
        });
    });
}

let grid=16;

generateEtch(grid);

const newGrid = document.querySelector("#newGrid");
newGrid.onclick = function(e){
    grid = prompt("Enter Grid size");
    generateEtch(grid);
};

const reset = document.querySelector("#reset");
reset.addEventListener('click', function(e){
    generateEtch(grid);
});
