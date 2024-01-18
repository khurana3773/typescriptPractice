function nearestExit(maze: string[][], entrance: number[]): number {
    let n = maze.length;
    let m = maze[0].length;
    let seen: boolean[][] = new Array(n);
     for(let i =0 ; i<n;i++) {
        seen[i] = Array(m).fill(false);
    }
    
   let distanceMax = Number.MAX_SAFE_INTEGER;
    
    let directions = [[1,0], [-1,0], [0,1], [0,-1]];
    
    let queue : number[][] = [];
    
    queue.push(entrance);
    let [entryX, entryY] = entrance;
    seen[entryX][entryY] = true;
    
    while(queue.length > 0) {
        let [x, y, distance] = queue.shift() ?? [];
        for(let i =0;i< directions.length; i++) {
            let newX = x + directions[i][0];
            let newY = y + directions[i][1];
            
            if(isValid(newX, newY, maze) && maze[newX][newY] === '.' && !seen[newX][newY] ) {
                seen[newX][newY] = true;
                queue.push([newX, newY, distance + 1]);
            }
            
            if(distance != 0 && !isValid(newX, newY, maze)) {
                distanceMax = Math.min(distance,distanceMax); 
            }
        }
    }
    
    return distanceMax;
};
    
function isValid(x: number, y: number, mat: any[][]) {
    if(x>=0 && x<mat.length && y>=0 && y<mat[0].length) {
        return true;
    }

    return false;
}

let maze =
[["+","+",".","+"],[".",".",".","+"],["+","+","+","."]];

nearestExit(maze,[1,2]);