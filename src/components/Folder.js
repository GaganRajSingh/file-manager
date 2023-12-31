import { useEffect, useState } from 'react'
import { Dropdown, DropdownItem, DropdownMenu } from 'semantic-ui-react'
import File from './File'

function Folder (props) {

    const [showInput, setShowInput] = useState(false);
    const [folderData, setFolderData] = useState(props.data);
    const [displayContent, setDisplayContent] = useState(false);
    const [isHovered, setHovered] = useState(false);
    const [addInput, setAddInput] = useState({
        visible: false,
        isFolder: false
    });
    const [clipboard, setClipboard] = useState({ isCopied: false, data: null});
    
    const handleRename = (e) => {
        if (e.keyCode == 13) {
            var payload = {
                id: folderData.id,
                name: e.target.value
            };            
            props.updateExplorer('rename', payload);
            setShowInput(false);               
        }
    }

    const handleDelete = () => {
        var payload = {
            id: folderData.id
        }
        props.updateExplorer('delete', payload);
    }

    const handleAdd = (e) => {
        if (e.keyCode == 13) {
            var payload = {
                parentID: folderData.id,
                name: e.target.value,
                isFolder: addInput.isFolder
            };            
            props.updateExplorer('add', payload);
            setAddInput({...addInput, visible: false})
        }
    }

    const handleAddInput = (isFolder) => {
        setAddInput({
            visible: true,
            isFolder: isFolder
        })
        setDisplayContent(true)
    }

    const handleCopy = () => {
        var payload = {
            node: folderData
        }
        props.updateExplorer("copy", payload)
    }

    const handleCut = () => {
        handleCopy()
        handleDelete()
    }

    const handlePaste = () => {        
        var payload = {
            parentID: folderData.id,
            node: clipboard.data
        }
        props.updateExplorer('paste', payload);        
    }

    useEffect(() => {
        setFolderData(props.data);
        setClipboard(props.clipboard);
    }, [props])

    return (
        <div className='folder'>
            {
                showInput ? (
                    <span>
                        📂 <input
                            type='text'
                            autoFocus
                            onKeyDown={handleRename}
                            onBlur={() => setShowInput(false)} 
                        />
                    </span>
                ) : (
                    
                    <div onClick={() => setDisplayContent(!displayContent)}
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                        className={isHovered ? 'hover f_name' : 'f_name'}
                    >
                        <span>
                            📂 {folderData.name}
                        </span>
                        <span style={{display: isHovered ? "block" : "none"}}>
                            <Dropdown>
                                <DropdownMenu direction='left'>
                                    <DropdownItem><span onClick={() => setShowInput(true)}>Rename</span></DropdownItem>
                                    {!folderData.isRoot && (
                                        <DropdownItem><span onClick={() => handleDelete()}>Delete</span></DropdownItem>
                                    )}
                                    <DropdownItem><span onClick={() => handleAddInput(false)}>Add File</span></DropdownItem>
                                    <DropdownItem><span onClick={() => handleAddInput(true)}>Add Folder</span></DropdownItem>
                                    {!folderData.isRoot && (
                                        <DropdownItem><span onClick={() => handleCut()}>Cut</span></DropdownItem>
                                    )}
                                    {!folderData.isRoot && (
                                        <DropdownItem><span onClick={() => handleCopy()}>Copy</span></DropdownItem>
                                    )}
                                    {clipboard.isCopied && (
                                        <DropdownItem><span onClick={() => handlePaste()}>Paste</span></DropdownItem>
                                    )}
                                </DropdownMenu>
                            </Dropdown>
                        </span>                        
                    </div>
                )
            }

            <div className="folderContent addInput" style={{display: addInput.visible ? "block" : "none"}}>
                <span>
                    {addInput.isFolder ? "📂 " : "📄 "} 
                    <input
                        type='text'
                        autoFocus
                        onKeyDown={handleAdd}
                        onBlur={() => setAddInput({...addInput, visible: false})} 
                    />
                </span>
            </div>
                               
            <div className="folderContent" style={{display: displayContent ? "block" : "none"}}>
                {
                    folderData.items.map((item, index) => {                        
                        if (item.isFolder) {
                            return (
                                <Folder data = {item} updateExplorer = {props.updateExplorer} clipboard = {props.clipboard} key = {item.id}/>
                            )
                        }
                        else {                                                  
                            return (
                                <File data = {item} updateExplorer = {props.updateExplorer} clipboard = {props.clipboard} key = {item.id}/>
                            )
                        }
                    })
                }
            </div> 
        </div>
    )
}

export default Folder