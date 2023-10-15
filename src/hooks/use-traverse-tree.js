const useTraverseTree = () => {

    function renameNode(fileTree, payload) {
        const id = payload.id;
        const new_name = payload.name;
        let new_tree = [];

        for (let node of fileTree) {
            if (node.id === id) {
                node = { ...node, name: new_name}
            }
            if (node.items && node.items.length > 0){
                node.items = renameNode(node.items, payload)
            }
            new_tree.push(node);
        }
        return new_tree;
    }

    function deleteNode(fileTree, payload) {
        const id = payload.id;
        let new_tree = [];

        if (fileTree && fileTree.length > 0) {
            for (let node of fileTree) {
                if (node.id !== id) {
                    if (node.isFolder) {
                        node.items = deleteNode(node.items, payload)
                    }
                    new_tree.push(node)
                }
            }
        }
        return new_tree;
    }

    function addNode(fileTree, payload) {        
        const parentID = payload.parentID;
        const name = payload.name;
        const isFolder = payload.isFolder;

        const newNode = {
            "name": name,
            "id": JSON.stringify(Date.now()),
            "isRoot": false,
            "isFolder": isFolder,
            "items": isFolder ? [] : null,
            "content": isFolder ? null : "print('Hello world')",
            "type": isFolder ? null : "python"
        }

        let new_tree = []
        
        for (let node of fileTree){            
            if (node.isFolder) {
                if (node.id == parentID) {                    
                    node.items.unshift(newNode)
                    console.log(node.items)
                }
                else {
                    node.items = addNode(node.items, payload)                 
                }
            }            
            new_tree.push(node)
        }
        return new_tree
    }

    return { renameNode, deleteNode, addNode };
}

export default useTraverseTree