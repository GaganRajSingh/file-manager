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
                        <span>
                            📄 {fileData.name}
                        </span>
                        <span style={{display: isHovered ? 'block' : 'none'}}>
                            <Dropdown>
                                <DropdownMenu>
                                    <DropdownItem><span onClick={() => setShowInput(true)}>Rename</span></DropdownItem>
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