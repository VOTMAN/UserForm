import UserForm from "./UserForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    <BrowserRouter>
        <Routes>
            <Route path="/form" element={<UserForm />}></Route>
        </Routes>
    </BrowserRouter>;
    return <UserForm />;
}

export default App;
