import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import RootLayout from "../layouts/RootLayout";
import LoginPage from "../pages/LoginPage";
import MyPage from "../pages/MyPage";
import DashboardLayout from "../layouts/DashboardLayout";
import CommunityPage from "../pages/CommunityPage";
import ItemsPage from "../pages/ItemsPage";
import LocationsPage from "../pages/LocationsPage";
import RecentActivitiesPage from "../pages/RecentActivitiesPage";
import SettingsPage from "../pages/SettingsPage";
import SupportsPage from "../pages/SupportsPage";
import CategoriesPage from "../pages/CategoriesPage";
import NotFoundPage from "../pages/NotFoundPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />

        <Route element={<DashboardLayout />}>
          <Route path="mypage">
            <Route index element={<MyPage />} />
            <Route path="items" element={<ItemsPage />} />
            <Route path="categories" element={<CategoriesPage />} />
            <Route path="locations" element={<LocationsPage />} />
            <Route
              path="recent-activities"
              element={<RecentActivitiesPage />}
            />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="supports" element={<SupportsPage />} />
          </Route>

          <Route path="community">
            <Route index element={<CommunityPage />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
