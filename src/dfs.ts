const dfs = (obj) => {
  if (typeof obj === 'object' && !Array.isArray(obj) && obj !== null) {
    const visitSet: Set<string> = new Set();

    const firstNode = Object.keys(obj)[0] as string;

    const innerDFS = (
      visited: Set<string>,
      graph: { [key: string]: string[] },
      node: string
    ) => {
      if (!visited.has(node)) {
        visited.add(node);
        for (const neighbour of graph[node]) {
          innerDFS(visited, graph, neighbour);
        }
      }
    };

    innerDFS(visitSet, obj, firstNode);

    return Array.from(visitSet);
  } else {
    throw new Error('INVALID_ARGUMENT');
  }
};

export default dfs;
