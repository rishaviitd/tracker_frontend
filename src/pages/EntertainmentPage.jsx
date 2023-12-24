import React from "react";
import PageHeading from "../components/PageHeading.jsx";
import List from "../components/List.jsx";
import ProgressGraph from "../components/ProgressGraph.jsx";
import PieChart from "../components/PieChart.jsx";
import EditButton from "../components/EditButton.jsx";
import CreateButton from "../components/CreateButton.jsx";
import DataBlocks from "../components/DataBlocks.jsx";
export default function EntertainmentPage({ tabName }) {
  const blockData = [
    { item1: "value1a", item2: "value2a" },
    { item1: "value1b", item2: "value2b" },
    { item1: "value1c", item2: "value2c" },
    { item1: "value1c", item2: "value2c" },
  ];
  return (
    <>
      <main className="p-6 sm:p-10 space-y-6 mt-20">
        <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
          <PageHeading tabName={tabName}></PageHeading>
          <div className="flex flex-wrap items-start justify-end -mb-3">
            <EditButton></EditButton>
            <CreateButton></CreateButton>
          </div>
        </div>
        <section class="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          <DataBlocks blockData={blockData}></DataBlocks>
        </section>
        <section className="grid md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-3 xl:grid-flow-col gap-6">
          <ProgressGraph></ProgressGraph>
          <div className="flex items-center p-8 bg-white shadow rounded-lg">
            <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-yellow-600 bg-yellow-100 rounded-full mr-6">
              <svg
                aria-hidden="true"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                <path
                  fill="#fff"
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
            </div>
            <div>
              <span className="block text-2xl font-bold">value</span>
              <span className="block text-gray-500">courses</span>
            </div>
          </div>
          <div className="flex items-center p-8 bg-white shadow rounded-lg">
            <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-teal-600 bg-teal-100 rounded-full mr-6">
              <svg
                aria-hidden="true"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <span className="block text-2xl font-bold">value</span>
              <span className="block text-gray-500">Time</span>
            </div>
          </div>
          <div className="row-span-3 bg-white shadow rounded-lg">
            <List></List>
          </div>
          <PieChart></PieChart>
        </section>
      </main>
    </>
  );
}
