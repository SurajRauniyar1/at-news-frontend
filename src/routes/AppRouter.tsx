import { BrowserRouter, Routes, Route } from "react-router-dom";
import HistoryPage from "@/pages/History/HistoryPage";
import LandingPage from "./../pages/Landing/LandingPage"
import LoginPage from "@/pages/Login/LoginPage";
import RegisterPage from "@/pages/Register/RegisterPage";
import DashboardPage from "@/pages/Dashboard/DashboardPage";
import ArticlePage from "@/pages/Article/ArticlePage";
import BookmarksPage from "@/pages/Bookmarks/BookmarksPage";
import ProtectedRoute from "./ProtectedRoutes";
import GuestRoute from "./GuestRoute";
import ProfilePage from "@/pages/Profile/ProfilePage";
import ChatPage from "@/pages/ChatPage/ChatPage";


export default function AppRouter() {

    return (

        <BrowserRouter>

            <Routes>

                <Route

                    path="/"

                    element={<LandingPage />}

                />
<Route
    path="/bookmarks"
    element={
        <ProtectedRoute>
            <BookmarksPage />
        </ProtectedRoute>
    }
/>
<Route
    path="/profile"
    element={
        <ProtectedRoute>
            <ProfilePage />
        </ProtectedRoute>
    }
/>
<Route
    path="/bookmarks"
    element={
        <ProtectedRoute>
            <BookmarksPage />
        </ProtectedRoute>
    }
/>
<Route
    path="/chat"
    element={<ChatPage />}
/>
                <Route

                    path="/login"

                    element={

                        <GuestRoute>

                            <LoginPage />

                        </GuestRoute>

                    }

                />

                <Route

                    path="/register"

                    element={

                        <GuestRoute>

                            <RegisterPage />

                        </GuestRoute>

                    }

                />

                <Route

                    path="/dashboard"

                    element={

                        <ProtectedRoute>

                            <DashboardPage />

                        </ProtectedRoute>

                    }

                />

                <Route

                    path="/article/:id"

                    element={

                        <ProtectedRoute>

                            <ArticlePage />

                        </ProtectedRoute>

                    }

                />
<Route
    path="/history"
    element={
        <ProtectedRoute>
            <HistoryPage />
        </ProtectedRoute>
    }
/>
            </Routes>

        </BrowserRouter>

    );

}