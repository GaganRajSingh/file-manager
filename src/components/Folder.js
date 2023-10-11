import { useState } from 'react'
import File from './File'

function Folder (props) {

    const [displayContent, setDisplayContent] = useState(false);

    return (
        <div className='folder'>
            <div onClick={() => setDisplayContent(!displayContent)}>
                <span>
                    📂 {props.data.name}
                </span>
            </div>
            <div className="folderContent" style={{display: displayContent ? "block" : "none"}}>
                {
                    props.data.items.map((item) => {
                        if (item.isFolder) {
                            return (
                                <Folder data = {item}/>
                            )
                        }
                        else {
                            return (
                                <File data = {item}/>
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}

export default Folder