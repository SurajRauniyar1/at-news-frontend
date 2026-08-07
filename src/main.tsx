import React from "react";
import "aos/dist/aos.css";
import { AuthProvider } from "@/context/AuthContext";
import ReactDOM from "react-dom/client";
import{

    Toaster

}from"react-hot-toast";
import "./index.css";

import App from "./App";

import {

    QueryClient,

    QueryClientProvider

} from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(

    document.getElementById("root")!

).render(

    <React.StrictMode>
<AuthProvider>

<QueryClientProvider client={queryClient}>

<App/>

<Toaster position="top-right"/>

</QueryClientProvider>

</AuthProvider>
    </React.StrictMode>

);