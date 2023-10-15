const useTraverseTree = () => {

    function rename(fileTree, payload) {
        const id = payload.id;
        const new_name = payload.name;
        let new_tree = [];

        for (let node of fileTree) {
            if (node.id === id) {
                node = { ...node, name: new_name}
            }
            if (node.items && node.items.length > 0){
                node.items = rename(node.items, payload)
            }
            new_tree.push(node);
        }
        return new_tree;
    }

    return { rename };
}

export default useTraverseTree