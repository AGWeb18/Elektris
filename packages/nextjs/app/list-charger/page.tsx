// app/list-charger/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { CurrencyDollarIcon, MagnifyingGlassIcon, MapIcon } from "@heroicons/react/24/outline";
import { InputBase } from "~~/components/scaffold-eth";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

// app/list-charger/page.tsx

// app/list-charger/page.tsx

// app/list-charger/page.tsx

// app/list-charger/page.tsx

// app/list-charger/page.tsx

// app/list-charger/page.tsx

// app/list-charger/page.tsx

// app/list-charger/page.tsx

// app/list-charger/page.tsx

// app/list-charger/page.tsx

// app/list-charger/page.tsx

// app/list-charger/page.tsx
const ListCharger: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  const { writeAsync, isLoading, isMining } = useScaffoldContractWrite({
    contractName: "YourContract",
    functionName: "listCharger",
    args: ["Anthonys House", BigInt(50)],
    blockConfirmations: 1,
    onBlockConfirmation: txnReceipt => {
      console.log("Transaction blockHash", txnReceipt.blockHash);
    },
  });
  const [location, setLocation] = useState<string>();
  const [pricePerHour, setPricePerHour] = useState<string>();

  return (
    <>
      <div className="bg-primary">
        <div className="flex justify-center items-center w-full mt-10 py-8">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-12 rounded-3xl shadow-2xl bg-base-100 w-1/3 mx-auto">
            <div className="flex justify-center items-center">
              <div className="p-5 card ">
                <div className="pb-5 justify-center items-center">
                  <div className="flex flex-col justify-center items-center pb-5">
                    {" "}
                    {/* Adjusted for vertical centering */}
                    <h1 className="text-4xl font-bold pb-4">List your Charger</h1>
                  </div>
                  <InputBase name="location" placeholder="Location" value={location} onChange={setLocation} />
                </div>
                <div className="pb-5">
                  <InputBase
                    name="pricePerHour"
                    placeholder="~$/Hr 40"
                    value={pricePerHour}
                    onChange={setPricePerHour}
                  />
                </div>
                <button className="btn btn-primary mt-4 shadow-2xl" onClick={() => writeAsync()}>
                  List My Charger Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto pt-10 pb-20">
          <div className="flex flex-col sm:flex-row justify-center items-center rounded-3xl shadow-2xl bg-base-100 w-3/4 mx-auto py-10">
            <div className="flex flex-col py-10 text-center items-center w-3/4">
              <div className="tooltip border-black	" data-tip="Users can earn an income just by sharing their driveway">
                <CurrencyDollarIcon className="h-10 w-10 fill-secondary" />
              </div>
              <p>
                Transform your driveway into a profit center. List your EV charger and earn passive income while
                supporting EV Charging Infrastructure. Explore our network of EV chargers. Contribute to a greener
                planet by sharing your charger while offsetting your EV costs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListCharger;
