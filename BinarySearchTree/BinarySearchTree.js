function Node(data, left, right){
    this.data = data;
    this.count = 1;
    this.left = left;
    this.right = right;
    this.show = show;
    this.insert = insert;
    this.getMin = getMin;
    this.getMax = getMax;
    this.find = find;
}
function show(){
    return this.data;
}
function BST(){
    this.root = null;
    this.insert = insert;
    this.inOrder = inOrder;
}
function insert(data){
    let n = new Node(data, null, null);
    if(this.root == null){
        this.root = n;
    }else{
        let current = this.root;
        let parent;
        while(true){
            parent = current;
            if(data < current.data){
                current = current.left;
                if(current == null){
                    parent.left = n;
                    break;
                }
            }else{
                current = current.right;
                if(current == null){
                    parent.right = n;
                    break;
                }
            }
        }
    }
}
function inOrder(node){
    if(!(node == null)){
        inOrder(node.left);
        console.log(node.show());
        inOrder(node.right);
    }
}
function preOrder(node){
    if(!(node == null)){
        console.log(node.show());
        preOrder(node.left);
        preOrder(node.right)
    }
}
function postOrder(node){
    if(!(node == null)){
        postOrder(node.left);
        postOrder(node.right);
        console.log(node.show());
    }
}
//find the minimum number
function getMin(){
    let current = this.root;
    while(!(current.left == null)){
        current = current.left;
    }
    return current.data
}
//find the maximum number

function getMax(){
    let current = this.root;
    while(!(current.right == null)){
        current = current.right;
    }
    return current.data;
}
//searching for a specific value
function find(data){
    let current = this.root;
    while(current.data != data){
        if(data < current.data){
            current = current.left;
        }else{
            current = current.right;
        }
        if(current == null){
            return null;
        }
    }
    return current
}
// removing a node in a bst
// we have to declare two function remove and removeNode
function removeNode(node, data){
    if(node == null){
        return null;
    }
    if(data == node.data){
        //node has no children
        if(node.left == null  && node.right == null){
            return null;
        }
        //node has no left child
        if(node.left == null){
            return node.right;
        }
        //node has no right child
        if(node.right == null){
            return node.left;
        } 
        //node has two children
        let tempNode = getMin(node.right);
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
    }else if(data < node.data){
        node.left = removeNode(node.right, tempNode.data);
        return node;
    }else{
        node.right = removeNode(node.right, data);
        return node;
    }
}
function remove(data){
    return root = removeNode(this.root, data)
}
//this function will update the 
function update(data){
    let grade = this.find();
    grade.count++;
    return grade;
}
function genArray(length){
    let arr = [];
    for(let i = 0; i < length; i++){
        arr[i] = Math.floor(Math.random() * 101);
    }
    return arr;
}
//exercise
