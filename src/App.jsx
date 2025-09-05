import React from 'react'
import About from './components/about'
import ScrollToTopButton from './components/scrollToTopButton'
import TodoListCrud from './components/todoListCrud'

const App = () => {
    return (
        <>
            <TodoListCrud />
            <About />
            <ScrollToTopButton />
        </>
    )
}

export default App