### What's in it?

A simple react component for select time in format HH:mm [timeInput.jsx](./src/timeInput.jsx) Its used webpack for building and es6 syntax

[Demo page] (http://dima-bu.github.io/react-time-input-example/index.html)

### Basic Usage

```
 npm install react-time-input --save

```


 ```javascript

import React from 'react';
import ReactDOM from 'react-dom';
import TimeInput from 'react-time-input';

var TimeWrapper = React.createClass({


	onTimeChangeHandler: function (val) {
		
		// do something with this value
		
	},

	render: function() {
		return (
			<TimeInput
				initTime='11:12'
				ref="TimeInputWrapper"
				className='form-control'
				mountFocus='true'
				onTimeChange={this.onTimeChangeHandler}
			/>
		);
	}
});


export class App extends React.Component {
	render() {
		return (
				<TimeWrapper/>
		);
	}
}

ReactDOM.render(<App/>, document.querySelector("#myApp"));

```


### To run

* You'll need to have [git](https://git-scm.com/) and [node](https://nodejs.org/en/) installed in your system.
* Fork and clone the project:

```
> $ git clone https://github.com/dima-bu/react-time-input.git
```

Then install the dependencies:

```
 npm install
```

You can simply run webpack example build using this command: 

```
npm run example
```
Open in the web browser file ./example/index.html



Create build
```
npm run build
```

Please contribute to the project if you think this can be done better in anyway even for this README :)
