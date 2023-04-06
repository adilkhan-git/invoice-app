import styles from "./page.module.css";
import Bar from "@/components/Bar/Bar";
import Display from "@/components/Display/Display";
import Header from "@/components/Header/Header/Header";

export default function Home() {
  // const [invoices, setInvoices] = useState<string[]>([]);
  return (
    <main className={styles.main}>
      <Bar />
      <Header />
      <Display />
    </main>
  );
}
