import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Mirror from './components/Mirror.jsx'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Mirror initialValue="Type here to change" />, document.getElementById('root'));
registerServiceWorker();
