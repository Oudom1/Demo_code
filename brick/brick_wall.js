 const wall = document.querySelector("#wall");
 if(!wall.getContect){
     alert("Your browser dose'nt support canvas drawing!");
 }
 const ctx = wall.getContext("2d");
 const wallWidth = wall.wallWidth
 const wallhegiht = wall.wallheight

 function drawwall(canvasContext, wallWidth=0, wallhegiht=0){
     const bh= 20, bw= 50, space= 5;
     canvasContext.fillStyle = "#F6522F"
     const numberWallColumn = wallWidth / (brickWidth + space);
     const numberWallRow = wallhegiht / (brickheight + space);


     canvasContext.fillRect(0 * (bw+space),0 * (bh+space),bw,bh);
      canvasContext.fillRect(1 * (bw+space),0 * (bh+space),bw,bh);
     canvasContext.fillRect(2 * (bw+space),0 * (bh+space), bw,bh)
     canvasContext.fillRect(3 * (bw+space),0 * (bh+space), bw,bh)

     canvasContext.fillRect(0 * (bw+space),1 * (bh+space),bw,bh);
     canvasContext.fillRect(1 * (bw+space),1 * (bh+space),bw,bh);
      canvasContext.fillRect(2 * (bw+space),1 * (bh+space), bw,bh)
      canvasContext.fillRect(3 * (bw+space),1 * (bh+space), bw,bh)

//  for(let  brickRow = 0; brickRow<4; brickRow++){
//      //Draw columns
//      for(let brickColumn = 0; brickColumn<6; brickColumn++){
//      //Draw rows 
//     if(brickRow % 2 ==0 ){
//          canvasContext.fillRect(brickColumn ,brickRow * (bh+space), bw, bh)
//     }
//     else{
//         canvasContext.fillRect(brickColumn * (bw+space), brickRow * (bh+space),bw,bh)
//      }
//     }
//  }
 }

// drawwall(ctx);