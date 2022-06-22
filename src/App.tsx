import { Fragment } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Login from "./pages/Login";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Fragment>
                            <Sidebar />
                            <main className="overflow-y-auto flex-1 pt-12">
                                <Outlet />
                            </main>
                        </Fragment>
                    }
                >
                    <Route
                        index
                        element={
                            <div className="px-3">
                                <p className="text-red-500 mb-5">knock knock</p>
                            </div>
                        }
                    />

                    <Route path="*" element={<Login />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
