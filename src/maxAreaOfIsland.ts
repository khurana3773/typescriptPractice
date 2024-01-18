function maxAreaOfIsland(grid: number[][]): number {
    
    let directions = [[-1,0],[1,0],[0,-1],[0,1]];
    let seen: boolean[][] = new Array(grid.length);

    for(let i =0;i< grid.length; i++) {
        seen[i] = new Array(grid[i].length).fill(false);
    }
    
    console.log(seen);
    
    let dfs = (x: number, y: number): number => {
        seen[x][y] = true;
        let count = 1;
        
        for(let j =0; j< directions.length; j++) {
            let newDirectionX: number = directions[j][0] + x;
            let newDirectionY: number = directions[j][1] + y;
            console.log('newX', newDirectionX, 'newY', newDirectionY);
            
            
            if(isWithinBounds(newDirectionX,newDirectionY, grid) 
               && grid[newDirectionX][newDirectionY] === 1 
               && !seen[newDirectionX][newDirectionY]){
                console.log('accessing now','newX', newDirectionX, 'newY', newDirectionY);
                count = count + dfs(newDirectionX,newDirectionY);
            }
        }
        return count;
    };
    
    let maxArea = -1;
    
    for(let i =0;i< grid.length;i++) {
        for(let j =0; j<grid[i].length; j++) {
            if(!seen[i][j] && grid[i][j] === 1 ) {
                let area = dfs(i,j);
                console.log('i',i, 'j', j);
                console.log(area);
                maxArea = Math.max(area, maxArea);
            }
        } 
    }
        
    return maxArea;
};
    

function isWithinBounds(x: number, y: number, grid: number[][]): boolean {
    if(x<0 || x>=grid.length || y<0 || y>=grid[0].length) {
        return false;
    }
    
    return true;
}

maxAreaOfIsland([[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]);