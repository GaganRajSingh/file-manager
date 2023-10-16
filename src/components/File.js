import { useEffect, useState } from 'react'
import { Dropdown, DropdownItem, DropdownMenu } from 'semantic-ui-react'

function File (props) {
    
    const [isHovered, setHovered] = useState(false);
    const [fileData, setFileDate] = useState(props.data);
    const [showInput, setShowInput] = useState(false);    

    const handleRename = (e) => {
        if (e.keyCode == 13) {
            var payload = {
                id: fileData.id,
                name: e.target.value
            };            
            props.updateExplorer('rename', payload);
            setShowInput(false);            
        }
    }

    const handleDelete = () => {
        var payload = {
            id: fileData.id
        }
        props.updateExplorer('delete', payload);
    }

    const handleCopy = () => {
        var payload = {
            node: fileData
        }
        props.updateExplorer("copy", payload)
    }

    const handleCut = () => {
        handleCopy()
        handleDelete()
    }

    const handleView = () => {
        props.updateExplorer("view", {content: fileData.content, language: fileData.type})
    }

    useEffect(() => {
        setFileDate(props.data);
    }, [props])

    return (
        <div className='file'>
            {
                showInput ? (
                    <span>
                        📄 <input
                            type='text'
                            autoFocus
                            onKeyDown={handleRename}
                            onBlur={() => setShowInput(false)} 
                        />
                    </span>
                ) : (
                    <div className = {isHovered ? "hover f_name" : "f_name"}
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}        
                    >
                        <span onClick={handleView}>
                            📄 {fileData.name}
                        </span>
                        <span style={{display: isHovered ? 'block' : 'none'}}>
                            <Dropdown>
                                <DropdownMenu direction='left'>
                                    <DropdownItem><span onClick={() => setShowInput(true)}>Rename</span></DropdownItem>
                                    <DropdownItem><span onClick={() => handleDelete()}>Delete</span></DropdownItem>
                                    <DropdownItem><span onClick={() => handleCut()}>Cut</span></DropdownItem>
                                    <DropdownItem><span onClick={() => handleCopy()}>Copy</span></DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </span>
                    </div>
                )
            }
        </div>
    )
}

export default File