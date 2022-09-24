import React from "react";
import styles from "./App.module.scss";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { MainPage } from "./pages/MainPage";
import { BreadСrumbs } from "./components/BreadСrumbs";

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <BreadСrumbs />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
