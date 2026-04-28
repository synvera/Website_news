import { Routes, Route } from 'react-router-dom'
import { AppShell } from './components/layout/AppShell'
import HomePage from './pages/HomePage'
import DiscoverPage from './pages/DiscoverPage'
import BookmarkPage from './pages/BookmarkPage'
import SettingsPage from './pages/SettingsPage'
import ArticlePage from './pages/ArticlePage'

export default function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/discover" element={<DiscoverPage />} />
        <Route path="/bookmark" element={<BookmarkPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Route>
      <Route path="/article/:id" element={<ArticlePage />} />
    </Routes>
  )
}
