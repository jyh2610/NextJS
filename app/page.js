import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="navbar">
      <Link href="/">홈</Link>
      <Link href="/list">리스트</Link>
    </div>
  );
}
