import { AnimatedCursor } from "@/components/ui/animated-cursor";
import { Toaster } from "@/components/ui/toaster";
import { useEffect } from "react";
// import Layout from "@/components/layout/Layout";

import ScrollToTop from "@/components/ui/scroll-to-top";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppRouter from "./AppRouter";
import Layout from "./components/layout/Layout";
import WhatsUp from "./components/ui/whats-up";
import { AuthWrapper } from "./hooks/Auth";

function App() {
  const queryClient = new QueryClient();
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const fadeElements = document.querySelectorAll(".fade-up");
    fadeElements.forEach((el) => observer.observe(el));

    return () => {
      fadeElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <AnimatedCursor />
      <Layout>
        <AuthWrapper>
          <AppRouter />
        </AuthWrapper>
      </Layout>
      <WhatsUp />
      <ScrollToTop />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
