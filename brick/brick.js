// const wall = document.querySelector("#wall");
// if(!wall.getContect){
//     alert("Your browser dose'nt support canvas drawing!");
// }
// const ctx = wall.getContext("2d");
// const wallWidth = wall.wallWidth
// const wallhegiht = wall.wallheight

// function drawwall(canvasContext, wallWidth=0, wallhegiht=0){
//     const bh= 20, bw= 50, space= 5;
//     canvasContext.fillStyle = "#F6522F"
//     const numberWallColumn = wallWidth / (brickWidth + space);
//     const numberWallRow = wallhegiht / (brickheight + space);


//     // canvasContext.fillRect(0 * (bw+space),0 * (bh+space),bw,bh);
//     // canvasContext.fillRect(1 * (bw+space),0 * (bh+space),bw,bh);
//     // canvasContext.fillRect(2 * (bw+space),0 * (bh+space), bw,bh)
//     // canvasContext.fillRect(3 * (bw+space),0 * (bh+space), bw,bh)

//     // canvasContext.fillRect(0 * (bw+space),1 * (bh+space),bw,bh);
//     // canvasContext.fillRect(1 * (bw+space),1 * (bh+space),bw,bh);
//     // canvasContext.fillRect(2 * (bw+space),1 * (bh+space), bw,bh)
//     // canvasContext.fillRect(3 * (bw+space),1 * (bh+space), bw,bh)

// for(let  brickRow = 0; brickRow<10; brickRow++){
//     //Draw columns
//     for(let brickColumn = 0; brickColumn<9; brickColumn++){
//     //Draw rows 
//     if(brickRow % 2 ==0 ){
//         canvasContext.fillRect((brickColumn * (bw+space)) - ((brickWidth/2)+(space)),brickRow * (bh+space), bw, bh)
//     }
//     else{
//         canvasContext.fillRect(brickColumn * (bw+space), brickRow * (bh+space),bw,bh)
//     }
// }
// }
// }

// drawwall(ctx);
const wall = document.querySelector("#wall");
if (!wall.getContext) {
  alert('Your browser does\'nt support canvas drawing!');
}
const ctx = wall.getContext('2d');
const wallWidth = wall.width
const wallHeight = wall.height

function drawWall(canvasContext, wallWidth=0, wallHeight=0) {
  const brickHeight = 20;
  const brickWidth = 50;
  const space = 5;
  const numberWallColumn = Math.ceil(wallWidth / (brickWidth + space));
  const numberWallRow = Math.ceil(wallHeight / (brickHeight + space));

  console.log('numberWallColumn', numberWallColumn);
  console.log('numberWallRow', numberWallRow);
  canvasContext.fillStyle = "#F6522F"

  for (let brickRow = 0; brickRow<numberWallRow; brickRow++) {
    // Draw columns
    for (let brickColumn = 0; brickColumn < numberWallColumn; brickColumn++) {
      // Draw rows
      if (brickRow % 2 == 0) {
        canvasContext.fillRect((brickColumn * (brickWidth + space)) - ((brickWidth/2) + (space/2)), brickRow * (brickHeight + space), brickWidth, brickHeight);
      } else {
        canvasContext.fillRect(brickColumn * (brickWidth + space), brickRow * (brickHeight + space), brickWidth, brickHeight);
      }
    }
  }
}

drawWall(ctx, wallWidth, wallHeight);