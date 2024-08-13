import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LandingPageNew from "./pages/LandingPageNew";
import AboutUsPage from "./pages/AboutUsPage";  
import ContactUsPage from "./pages/ContactUsPage";
import BlogPage from "./pages/BlogPage";
import DiscoverPage from "./pages/DiscoverPage";
import WebinarsPage from "./pages/WebinarsPage";
import UpcomingWebinarSinglePage from "./pages/UpcomingWebinarSinglePage";
import TopBar from "./components/TopBar";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;
  const showHeader = true;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/about-us-page":
        title = "";
        metaDescription = "";
        break;
      case "/blog-page":
        title = "";
        metaDescription = "";
        break;
      case "/contact-us-page":
        title = "";
        metaDescription = "";
        break;
      case "/blog-page1":
        title = "";
        metaDescription = "";
        break;
      case "/discover-page":
        title = "";
        metaDescription = "";
        break;
      case "/webinars-page":
        title = "";
        metaDescription = "";
        break;
      case "/upcoming-webinar-single-page":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <div className='antialiased overscroll-none'>
      {showHeader && <TopBar />}
      <Routes>
        <Route path="/" element={<LandingPageNew />} />
        <Route path="/about-us-page" element={<AboutUsPage />} />
        <Route path="/contact-us-page" element={<ContactUsPage />} />
        <Route path="/blog-page" element={<BlogPage />} />
        <Route path="/discover-page" element={<DiscoverPage />} />
        <Route path="/webinars-page" element={<WebinarsPage />} />
        <Route
          path="/upcoming-webinar-single-page"
          element={<UpcomingWebinarSinglePage />}
        />
      </Routes>
    </div>
  );
}
export default App;
