With out using Radium node module,
we can directly update webpack config css-loader, need to have the following
use: getStyleLoaders({
     importLoaders: 1,
     modules: true,
     localIdentName: '[name]__[local]__[hash:base64:5]'
 })

All elements we have in react are all JSX elements which were created into React.createElement under the hood

Class Component Life cycle Methods:

Methods for creating a component
Constructor(props) -> setup initia state
getDerivedStateFromProps(props,state) -> sync state
render() -> returns jsx
Render child Componenst
ComponentDidMount() -> To Cause side effects and dont call setState asynchronously

Updating a component based on changes:
getDerivedStateFromProps(props,state)
shouldComponentUpdate(nextProps,nextState) -> evaluate whether to Re-render a component or not
render
updates Child Components
getSnapShotBeforeUpdate(prevProps,prevState) -> Last minute DOM ops
componentDidUpdate -> used to cause side effects


React Hooks:
UseState
UseEffect -> gets rendered for every render cycle(its like combined componentDidMount and ComponentDidUpdate) 
React.memo -> Can be used as shouldComponentUpdate for functional components
useRef -> Used to have a reference of an element in functional components

HOC:
They dont have specific functionality of their own,but wraps other components inside it


Context API:
Inorder make a value available for all components we can use context
Create a context.Provider on a component and pass values to the provider
Inorder to consume the context in another component use context.consumer which returns a function 

In order to not use Consumer syntax we can use static ContextType for class Component and useContext for functional components
