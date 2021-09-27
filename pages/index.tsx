import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

const Home: NextPage = () => {
  const onChange = () => {};

  const menu = (
    <Menu>
      <Menu.Item>Mainnet</Menu.Item>
      <Menu.Item>Devnet</Menu.Item>
      <Menu.Item>Testnet</Menu.Item>
    </Menu>
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>Wallet Tutorial</title>
        <meta name="description" content="Solana wallet tutorial by Figment Learn" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <header className={styles.header}>
          <div className={`${styles.top} ${styles.logo}`}>MyWallet</div>
          <Dropdown className={styles.top} overlay={menu}>
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              Network <DownOutlined />
            </a>
          </Dropdown>
        </header>

        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>
    </div>
  );
};

export default Home;
