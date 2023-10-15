import { useEffect, useState } from 'react';
import fileData from '../data/explorerData'

import Folder from './Folder'
import File from './File'
import useTraverseTree from '../hooks/use-traverse-tree';

function Explorer () {

    const [data, setData] = useState(fileData);
    
    useEffect(() => {
        const localData = localStorage.getItem('explorerData'); 
        if (localData){
            setData(JSON.parse(localData));
        }
    }, [])    
    
    const { renameNode, deleteNode, addNode } = useTraverseTree();

    const updateExplorer = (action, payload) => {
        if (action === 'rename') {                                    
            var newExplorerData = renameNode(data, payload)            
        }
        if (action === 'delete') {
            var newExplorerData = deleteNode(data, payload);            
        }
        if (action === 'add') {            
            var newExplorerData = addNode(data, payload);
            console.log("the new data is: ", newExplorerData)
        }

        setData(newExplorerData);            
        updateLocalData(newExplorerData);
    }

    const updateLocalData = (updatedLocalData) => {   
        localStorage.setItem('explorerData', JSON.stringify(updatedLocalData));
    }
    
    return (
        <div className="explorer">
            {                            
                data.map((item, index) => {                    
                    if (item.isFolder) {                                                
                        return (
                            <Folder data = {item} updateExplorer = {updateExplorer} key = {item.id}/>
                        )
                    }
                    else {                        
                        return (
                            <File data = {item} updateExplorer = {updateExplorer} key = {item.id}/>
                        )
                    }
                })
            }
        </div>
    );
}

export default Explorer