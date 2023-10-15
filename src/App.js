import './style/App.css'
import Explorer from "./components/Explorer"
import Code from "./components/Code"
import { useState } from 'react';

function App() {

	const [content, setContent] = useState(null)
	const [language, setLanguage] = useState("python")

	return (
		<div className="App">
			<Explorer setContent = {setContent} setLanguage = {setLanguage}/>
			<Code content = {content} language = {language}/>
		</div>
	);
}

export default App;
