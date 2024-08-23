import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = { firstName: "Samuel", lastName: "Okrrr", email: "samuel@gmail.com" };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access & manage your account and transactions efficiently."
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={12001250.35}
          />
        </header>
        Recent Transactions
      </div>
      <RightSidebar user={loggedIn} transactions={[]} banks={[{ currentBalance: 123.5}, {currentBalance: 123.5}]} />
    </section>
  );
};

export default Home;
