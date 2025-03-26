function Graph(v){
    this.vertices = v;
    this.vertexList = [];
    this.edges = 0;
    this.adj = [];
    for(let i = 0; i < this.vertices; ++i){
        this.adj[i] = [];
        this.adj[i].push("");
    }
    this.addEdge = addEdge;
    this.showGraph = showGraph;
    this.edgeTo = [];
    this.pathTo = pathTo;
    this.hasPathTo = hasPathTo;
    this.dfs = dfs;
    this.bfs = bfs;
    this.marked = [];
    for(let i = 0; i < this.vertices; ++i){
        this.marked[i] = false;
    }
    this.topSort = topSort;
    this.topSortHelper = topSortHelper;
}
function addEdge(v,w){
    this.adj[v].push(w);
    this.adj[w].push[v];
    this.edges++;
}
// function showGraph(){
//     for(let i = 0; i < this.vertices; ++i){
//         // console.log(i + " -> ");
//         for(let j = 0; j < this.vertices; ++j){
//             if(this.adj[i][j] != undefined){
//                 console.log(this.adj[i][j] + "");
//             }
//         }
//     }
// } 
function showGraph() {
    var visited = [];
    for (var i = 0; i < this.vertices; ++i) {
        console.log(this.vertexList[i] + " -> ");
        visited.push(this.vertexList[i]);
        for (var j = 0; j < this.vertices; ++j) {
            if (this.adj[i][j] != undefined) {
                if (visited.indexOf(this.vertexList[j]) < 0) {
                    console.log(this.vertexList[j] + ' ');
                }
            }
        }
        // print();
        visited.pop();
    }
}
function dfs(v){
    this.marked[v] = true;
    if(this.adj[v] != undefined){
        console.log("Visited: " + v);
    }
    for(let w in this.adj[v]){
        if(!this.marked[w]){
            this.dfs(w);
        }
    }
}
function bfs(s){
    let queue = [];
    this.marked[s] = true;
    queue.push(s);
    while(queue.length > 0){
        let v = queue.shift();
        if(v != undefined){
            console.log("Visited vertexb: ", v);
        }
        for(let w in this.adj[v]){
            if(!this.marked[w]){
                this.edgeTo[w] = v;
                this.marked[w] = true;
                queue.push(w);
            }
        }
    }
    
}
function pathTo(v){
    let source = 0;
    if(!this.hasPathTo(v)){
        return undefined;
    }
    let path = [];
    for(let i = v; i != source; i = this.edgeTo[i]){
        path.push(i);
    }
    path.push(s);
    return path;
}
function hasPathTo(v){
    return this.marked[v];
}
//topological sorting
function topSort(){
    let stack = [];
    let visited = [];
    for(let i = 0;  i < this.vertices; i++){
        visited[i] = false;
    }
    for(let i = 0; i < stack.length; i++){
        if(visited[i] == false){
            this.topSortHelper(i, visited, stack);
        }
    }
    for(let i = 0; i < stack.length; i++){
        if(stack[i] != undefined && stack[i] != false){
            console.log(this.vertexList[stack[i]]);
        }
    }
}

function topSortHelper(v, visited, stack){
    visited[v] = true;
    for(let w in this.adj[v]){
        if(!visited[w]){
            this.topSortHelper(visited[w], visited, )
        }
    }
    stack.push(v);
}



let graph = new Graph(6);
graph.addEdge(1,2);
graph.addEdge(2,5);
graph.addEdge(1,3);
graph.addEdge(1,4);
graph.addEdge(0,1);
graph.vertexList = ["CS1", "CS2", "Data Structures",
"Assembly Language", "Operating Systems",
"Algorithms"];
graph.showGraph();
graph.topSort();

// graph.dfs(0);
// graph.bfs(0);
// let vertex = 2;
// let paths = graph.pathTo(vertex);
// if(!paths){
//     console.log("No path");
// }else{
//     while(paths.length > 0){
//         if(paths.length > 1){
//             console.log(paths.pop()+ "-");
//         }else{
//             console.log(paths.pop());
//         }
//     }
// }
