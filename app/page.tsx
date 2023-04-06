import React from "react";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Bar from "@/components/Bar/Bar";
import Header from "@/components/Header/Header/Header";
import ItemList from "@/components/ItemList/ItemList";
import NewInvoice from "@/components/NewInvoice/NewInvoice";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <Bar />
      <Header />
      <ItemList />
    </main>
  );
}
