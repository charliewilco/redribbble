import React from 'react'
import DOM from 'react-dom'
import App from './components/App'

const token = '52cd650e606e842d63ab9ebf8e595710a0b050eea7015514adfc99d6a0e3661a'

DOM.render(<App source={token} />, document.getElementById('app'))
