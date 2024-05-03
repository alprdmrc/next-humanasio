import BackToTop from "./backToTop";
import HomePage from "./home/page";

export const metadata = {
  title: "Home - Humanas",
  description: "Home - Humanas",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Home() {
  return (
    <main>
      <HomePage />

      <BackToTop />
    </main>
  );
}
