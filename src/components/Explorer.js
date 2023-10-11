import { useState } from 'react';
import fileData from '../data/explorerData'
import Folder from './Folder'
import File from './File'

function Explorer () {

    const [data, setData] = useState(fileData);

    return (
        <div className="explorer">
            {
                data.map((item) => {
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
    );
}

export default Explorer