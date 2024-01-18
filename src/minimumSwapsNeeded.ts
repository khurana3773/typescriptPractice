function minReorder(n: number, connections: number[][]): number {
    let seen = new Set();
    let adj: Map<number,Set<number>> = new Map();
    let count = 0;

    // populate adj
    for(let i =0; i < connections.length; i++) {
        let [x, y] = connections[i];
        if(!adj.has(x)) {
            adj.set(x, new Set());    
        } 
        adj.get(x)!.add(y);

        if(!adj.has(y)) {
            adj.set(y, new Set());    
        }
        adj.get(y)!.add(x);
    }

    console.log(adj);

    let dfs = (node: number) => {
        //for each neihbor, dfs
        let setOfNeighbors: Set<number> = adj.get(node)!;
        seen.add(node);

        const neigbors = Array.from(setOfNeighbors);

        for(let j=0;j<neigbors.length;j++) {
            if(!seen.has(neigbors[j])) {
                if(!!connections.find(([x,y])=> x===node && y===neigbors[j] )) {
                    count++;
                }
                dfs(neigbors[j]);
            }
        }
    }

    dfs(0);
    
    return count;
    
};

console.log(minReorder(6,[[0,1],[1,3],[2,3],[4,0],[4,5]]));
