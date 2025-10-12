import AddTodo from './components/AddTodo'
import Todo from './components/Todo'
import { Provider } from 'react-redux'
import store from './app/Store'

import './App.css'

function App() {
  

  return (
   <Provider store={store}>
   <h1>This is react redux toolkit</h1>
   <AddTodo />
   <Todo />
   </Provider>
  )
}

export default App
