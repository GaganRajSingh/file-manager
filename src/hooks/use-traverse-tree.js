const useTraverseTree = () => {

    var extensions = {
        "js": 'javascript',
        "ts": 'typescript',
        "py": 'python',
        "json": 'json',
        "txt": 'textfile'
    };

    var defaultContent = {
        "js": 'const a = [1, 2, 3]',
        "ts": 'function addNumbers(a: number, b: number): number { return a + b; }',
        "py": 'print(x for x in range(10))',
        "json": "{\"name\": \"John Doe\",\"age\": 30}",
        "txt": "This is just some random text."
    }

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
        if (payload.node) {
            var newNode = payload.node
        }
        else {
            const name = payload.name;
            const isFolder = payload.isFolder;

            var ext = ''
            const parts = name.split('.')
            if (parts.length > 1) {
                ext = parts[parts.length - 1]
            }

            var newNode = {
                "name": name,
                "id": JSON.stringify(Date.now()),
                "isRoot": false,
                "isFolder": isFolder,
                "items": isFolder ? [] : null,
                "content": isFolder ? null : (ext in extensions) ? defaultContent[ext] : null,
                "type": isFolder ? null : (ext in extensions) ? extensions[ext] : "other"
            }
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

    function updateID(fileTree) {
        let new_tree = []
        if (!fileTree.length) {
            return updateID([fileTree])[0]
        }
        for (let node of fileTree){
            node.id = node.id + '_' + JSON.stringify(Date.now())
            if (node.isFolder){                
                if (node.items && node.items.length > 0){
                    node.items = updateID(node.items)
                }                
            }            
            new_tree.push(node)
        }
        return new_tree
    }

    return { renameNode, deleteNode, addNode, updateID };
}

export default useTraverseTree