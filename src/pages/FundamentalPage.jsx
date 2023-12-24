import React from "react";
import PageHeading from "../components/PageHeading.jsx";
import List from "../components/List.jsx";
import ProgressGraph from "../components/ProgressGraph.jsx";
import EditButton from "../components/EditButton.jsx";
import CreateButton from "../components/CreateButton.jsx";
import DataBlocks from "../components/DataBlocks.jsx";
export default function FundamentalPage({ tabName }) {
  const blockData = [
    { item1: "Health", item2: "info" },
    { item1: "DSA", item2: "number" },
    { item1: "English", item2: "info" },
    { item1: "Finance", item2: "info" },
  ];
  return (
    <>
      <main className="p-6 sm:p-10 space-y-6 mt-20">
        <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
          <PageHeading
            tabName={tabName}
            subtitle={"Health | Skills | Finance"}
          ></PageHeading>
          <div className="flex flex-wrap items-start justify-end -mb-3">
            <EditButton title={"Edit Fundamentals"}></EditButton>
            <CreateButton title={"Add Fundamentals"}></CreateButton>
          </div>
        </div>
        <section class="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          <DataBlocks blockData={blockData}></DataBlocks>
        </section>
        <section className="grid md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-3 xl:grid-flow-col gap-6">
          <div className="flex flex-col md:col-span-2 md:row-span-2 bg-white shadow rounded-lg">
            <ProgressGraph></ProgressGraph>
          </div>

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
              <span className="block text-2xl font-bold">React</span>
              <span className="block text-gray-500">Time</span>
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
              <span className="block text-2xl font-bold">Django</span>
              <span className="block text-gray-500">Time</span>
            </div>
          </div>
          <div className="row-span-3 bg-white shadow rounded-lg">
            <List listInfo={"Skills"}></List>
          </div>
          <div className="row-span-3 bg-white shadow rounded-lg">
            <div className="grid grid-cols-1 gap-4 ">
              {/* First list */}
              <div className="bg-white shadow rounded-lg">
                <List listInfo={"Health"}></List>
              </div>

              {/* Second list */}
              <div className="bg-white shadow rounded-lg">
                <List listInfo={"Finance"}></List>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
