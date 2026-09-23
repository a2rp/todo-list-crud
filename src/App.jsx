import BackToTop from "./components/backToTop";
import Footer from "./components/footer";
import Header from "./components/header";
import TodoListCrud from "./components/todoListCrud";

const App = () => {
    return (
        <>
            <div id="top" />

            <Header />

            <TodoListCrud />

            <Footer />

            <BackToTop />
        </>
    );
};

export default App;
