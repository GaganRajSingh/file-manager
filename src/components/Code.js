import Editor from "@monaco-editor/react";
import { useEffect, useState } from "react";
import Skeleton from '@mui/material/Skeleton';

function Code (props) {

    const [content, setContent] = useState(props.content)
    const [language, setLanguage] = useState(props.language)

    useEffect(() => {
        setContent(props.content)
        setLanguage(props.language)
    }, [props])

    return (
        <div className="editor">
            {
                content ? (
                    <Editor
                        language={language}
                        value={content}
                    />
                ) : (
                    <>
                        <Skeleton animation="wave" />
                        <Skeleton animation="wave" />
                        <Skeleton animation="wave" />
                    </>
                )
            }
            
        </div>
    );
}

export default Code