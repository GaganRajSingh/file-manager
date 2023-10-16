import { useDebugValue, useEffect, useState } from 'react';
import fileData from '../data/explorerData'
import Folder from './Folder'
import File from './File'
import useTraverseTree from '../hooks/use-traverse-tree';
import { Search } from 'semantic-ui-react';

function Explorer (props) {

    const [data, setData] = useState(fileData);
    const [searchData, setSearchData] = useState([]);
    const [clipboard, setClipboard] = useState({ isCopied: false, data: null});
    
    useEffect(() => {
        const localData = localStorage.getItem('explorerData'); 
        if (localData){
            setData(JSON.parse(localData));
        }
    }, [])    
    
    const { renameNode, deleteNode, addNode, updateID, searchNodes } = useTraverseTree();

    const updateExplorer = (action, payload) => {
        if (action === 'rename') {                                    
            var newExplorerData = renameNode(data, payload)            
        }
        if (action === 'delete') {
            var newExplorerData = deleteNode(data, payload);            
        }
        if (action === 'add') {            
            var newExplorerData = addNode(data, payload);
        }
        if (action === 'copy') {            
            let updated_node = updateID(structuredClone(payload.node))
            setClipboard({isCopied: true, data: updated_node})
            var newExplorerData = data;
        }
        if (action === 'paste'){
            var newExplorerData = addNode(data, payload);
            setClipboard({ isCopied: false, data: null})
        }
        if (action === 'view') {
            props.setContent(payload.content);
            props.setLanguage(payload.language);
            var newExplorerData = data;
        }

        setData(newExplorerData);            
        updateLocalData(newExplorerData);
    }

    const updateLocalData = (updatedLocalData) => {   
        localStorage.setItem('explorerData', JSON.stringify(updatedLocalData));
    }

    const handleSearch = (e) => {
        const searchResult = searchNodes(data, e.target.value);
        setSearchData(searchResult)
    }
    
    return (
        <div className="explorer">
            <div className='dataTree'>
            {                            
                data.map((item, index) => {                    
                    if (item.isFolder) {                                                
                        return (
                            <Folder data = {item} updateExplorer = {updateExplorer} clipboard = {clipboard} key = {item.id}/>
                        )
                    }
                    else {                        
                        return (
                            <File data = {item} updateExplorer = {updateExplorer} clipboard = {clipboard} key = {item.id}/>
                        )
                    }
                })
            }
            </div>
            
            <div className='searchBox'>
                <Search
                    showNoResults={false}
                    onSearchChange={handleSearch}
                    placeholder='Search'
                />                
                {
                    searchData.map((item, index) => {                    
                        if (item.isFolder) {                                                
                            return (
                                <Folder data = {item} updateExplorer = {updateExplorer} clipboard = {clipboard} key = {item.id}/>
                            )
                        }
                        else {                        
                            return (
                                <File data = {item} updateExplorer = {updateExplorer} clipboard = {clipboard} key = {item.id}/>
                            )
                        }
                    })
                }                                     
            </div>
        </div>
    );
}

export default Explorer