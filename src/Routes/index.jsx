import { Routes as Rs, Route } from "react-router-dom";
import { Market } from "../components/Market";
import { Contact } from "../components/Contact";
import App from "../App";

export const Router = () => {
    return (
        <Rs>
            <Route path="/" element={<App />} />
            <Route path="/market" element={<Market />} />
            <Route path="/contact" element={<Contact />} />
        </Rs>
    );
}