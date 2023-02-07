type GraphType = Record<string, string[]>;

const bfs = (obj: GraphType | any) => {
  if (typeof obj === 'object' && !Array.isArray(obj) && obj !== null) {
    const visitList: string[] = [];
    const queue: string[] = [];

    const firstNode = Object.keys(obj)[0] as string;

    const innerBFS = (visited: string[], graph: GraphType, node: string) => {
      visited.push(node);
      queue.push(node);

      while (queue.length !== 0) {
        const s = queue.shift();
        if (s) {
          for (const neighbour of graph[s]) {
            if (!visited.includes(neighbour)) {
              visited.push(neighbour);
              queue.push(neighbour);
            }
          }
        }
      }
    };

    innerBFS(visitList, obj, firstNode);
    return visitList;
  } else {
    throw new Error('INVALID_ARGUMENT');
  }
};

export default bfs;
