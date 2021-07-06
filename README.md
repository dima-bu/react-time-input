Contributor: Dima Bukhal - dimabuhal@gmail.com
Collaborators: Dima Bukhal - dimabuhal@gmail.com, arthurvi (https://github.com/arthurvi, https://www.npmjs.com/~arthurvi)

If you want be contributors or collaborators - write me on dimabuhal@gmail.com with the theme 'react-time-input IMPORTANT'

### What's in it?

A simple react component for select time in format HH:mm [timeInput.jsx](./src/timeInput.jsx) Its used webpack for building and es6 syntax

[Demo page](//dima-bu.github.io/react-time-input-example/index.html)

### Basic Usage

```
 npm install react-time-input --save

```

 ```javascript

const TimeWrapper = () => {

    const onFocusHandler = (event) => {
        console.log("hello there you entered :  my name is ", event.target.name);
    }

    const onBlurHandler = (event) => {
        console.log("you left ");
    }

    const onTimeChangeHandler = (val) => {
        if (val.length === 5) {
            // do something with this value
        }
    }

    return (
        <TimeInput
            name="example"
            initTime='11:12'
            className='s-input -time'
            mountFocus='true'
            onTimeChange={onTimeChangeHandler}
            onFocusHandler={onFocusHandler}
            onBlurHandler={onBlurHandler}
        />
    );

}

function App() {
    return (
        <TimeWrapper/>
    );

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

Please contribute to the project if you think this can be done better in any way even for this README :)
