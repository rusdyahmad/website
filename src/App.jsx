import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Sini from "./pages/Sini.jsx";
import WaktuSolat from "./pages/WaktuSolat.jsx";
import WaktuSolatPrivacy from "./pages/WaktuSolatPrivacy.jsx";
import WaktuSolatTerms from "./pages/WaktuSolatTerms.jsx";
import WaktuSolatSupport from "./pages/WaktuSolatSupport.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="sini" element={<Sini />} />
        <Route path="waktusolat" element={<WaktuSolat />} />
        <Route path="waktusolat/privacy" element={<WaktuSolatPrivacy />} />
        <Route path="waktusolat/terms" element={<WaktuSolatTerms />} />
        <Route path="waktusolat/support" element={<WaktuSolatSupport />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
