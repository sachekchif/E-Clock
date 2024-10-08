import Image from "next/image";
import Link from "next/link";
import React from "react";
import BankCard from "./BankCard";

const RightSidebar = ({ user, transactions, banks }: RightSidebarProps) => {
  return (
    <aside className="right-sidebar">
      <section className="flex flex-col pb-8">
        <div className="profile-banner" />
        <div className="profile">
          <div className="profile-img">
            <span className="text-5xl font-bold text-purple-900">
              {(user?.name)?.slice(0,1).toUpperCase()}
            </span>
          </div>

          <div className="profile-details">
            <h1 className="profile-name">
              {user?.name}
            </h1>
            <p className="profile-email">{user?.email}</p>
          </div>
        </div>
      </section>

      <section className="banks !pr-2">
        <div className="flex w-full justify-between">
          <h2 className="header-2">My Banks</h2>
          <Link href="./" className="flex gap-2">
            <Image src="/icons/plus.svg" width={20} height={20} alt="plus" />
            <h2 className="text-14 font-semibold text">Add Card</h2>
          </Link>
        </div>
        {banks?.length > 0 && (
          <div className="relative flex flex-1 flex-col items-center justify-center w-full gap-5">
            <div className="relative z-10 w-[93%]">
              <BankCard
                key={banks[0].$id}
                account={banks[0]}
                userName={`${user?.name}`}
                showBalance={false}
              />
            </div>
            {banks[1] && (
              <div className="absolute left-5 top-6 z-0 w-[93%]">
                <BankCard
                  key={banks[1].$id}
                  account={banks[1]}
                  userName={`${user?.name}`}
                  showBalance={false}
                />
              </div>
            )}
          </div>
        )}
      </section>
    </aside>
  );
};

export default RightSidebar;
