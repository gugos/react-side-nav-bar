import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home/home";
import Page1 from "./pages/page1/Page1";
import Page2 from "./pages/page2/Page2";
import Page3 from "./pages/page3/Page3";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route index element={<Home />} />
                        <Route path="page1" element={<Page1 />} />
                        <Route path="page2" element={<Page2 />} />
                        <Route path="page3" element={<Page3 />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
