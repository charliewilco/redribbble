import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import 'obsidian.css/dist/obsidian.css'
import './index.css'

const token = '52cd650e606e842d63ab9ebf8e595710a0b050eea7015514adfc99d6a0e3661a'

ReactDOM.render(<App source={token} />, document.getElementById('root'))
registerServiceWorker()
