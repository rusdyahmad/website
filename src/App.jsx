import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import GadgetOps from "./pages/GadgetOps.jsx";
import Sini from "./pages/Sini.jsx";
import BarakatMakkiyyah from "./pages/BarakatMakkiyyah.jsx";
import BarakatMakkiyyahPrivacy from "./pages/BarakatMakkiyyahPrivacy.jsx";
import BarakatMakkiyyahTerms from "./pages/BarakatMakkiyyahTerms.jsx";
import BarakatMakkiyyahSupport from "./pages/BarakatMakkiyyahSupport.jsx";
import WaktuSolat from "./pages/WaktuSolat.jsx";
import WaktuSolatPrivacy from "./pages/WaktuSolatPrivacy.jsx";
import WaktuSolatTerms from "./pages/WaktuSolatTerms.jsx";
import WaktuSolatSupport from "./pages/WaktuSolatSupport.jsx";
import RefundPolicy from "./pages/RefundPolicy.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import ShippingPolicy from "./pages/ShippingPolicy.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="gadget-ops" element={<GadgetOps />} />
        <Route path="sini" element={<Sini />} />
        <Route path="barakat-makkiyyah" element={<BarakatMakkiyyah />} />
        <Route path="barakat-makkiyyah/privacy" element={<BarakatMakkiyyahPrivacy />} />
        <Route path="barakat-makkiyyah/terms" element={<BarakatMakkiyyahTerms />} />
        <Route path="barakat-makkiyyah/support" element={<BarakatMakkiyyahSupport />} />
        <Route path="waktusolat" element={<WaktuSolat />} />
        <Route path="waktusolat/privacy" element={<WaktuSolatPrivacy />} />
        <Route path="waktusolat/terms" element={<WaktuSolatTerms />} />
        <Route path="waktusolat/support" element={<WaktuSolatSupport />} />
        <Route path="refund-policy" element={<RefundPolicy />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="shipping-policy" element={<ShippingPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
