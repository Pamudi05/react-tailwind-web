import "./App.css";
import Header from "./component/navbar";
import Top from "./component/top";
import Middle from "./component/middle";
import Footer from "./component/footer";

function App() {
  return (
    <>
      <div className="overflow-hidden">
        <Header />
        <Top />
        <Middle />
        <Footer />
      </div>
    </>
  );
}

export default App;
