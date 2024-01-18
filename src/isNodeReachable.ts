function validPath(n: number, connections: number[][], source: number, destination: number): boolean {
    let neighborsByVertex: Map<number, Set<number>> = new Map();
    let seen: Set<number> = new Set();
    
      for (let i = 0; i < connections.length; i++) {
        let [x, y] = connections[i];
        if (!neighborsByVertex.has(x)) {
            neighborsByVertex.set(x, new Set());
        }
        neighborsByVertex.get(x)!.add(y);

        if (!neighborsByVertex.has(y)) {
            neighborsByVertex.set(y, new Set());
        }
        neighborsByVertex.get(y)!.add(x);
    }
    
    let findNeighbor = (node: number): boolean => {
        seen.add(node);
        if(node === destination) {
            return true;
        }
        
        let setOfNeighbors = neighborsByVertex.get(node)!;
        const neigbors: number[] = Array.from(setOfNeighbors);
        
        let found = false;
        
        
        for (let j = 0; j < neigbors.length; j++) {
            if (!seen.has(neigbors[j])) {
                found = found || findNeighbor(neigbors[j]);
            }
        }
        
        return found;
    }
    
    
    return findNeighbor(source);

    
};