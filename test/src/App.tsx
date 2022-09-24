import React from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { MainPage } from "./pages/MainPage";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
