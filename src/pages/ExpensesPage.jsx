import React from "react";
import PageHeading from "../components/PageHeading.jsx";
import List from "../components/List.jsx";
import ProgressGraph from "../components/ProgressGraph.jsx";
import PieChart from "../components/PieChart.jsx";
import EditButton from "../components/EditButton.jsx";
import CreateButton from "../components/CreateButton.jsx";
import DataBlocks from "../components/DataBlocks.jsx";
export default function ExpensesPage({ tabName }) {
  const blockData = [
    { item1: "Food", item2: "Amount" },
    { item1: "Travel", item2: "Amount" },
    { item1: "Statationary", item2: "Amount" },
    { item1: "Essentaials", item2: "Amount" },
  ];
  return (
    <>
      <main className="p-6 sm:p-10 space-y-6 mt-20">
        <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
          <PageHeading tabName={tabName}></PageHeading>
          <div className="flex flex-wrap items-start justify-end -mb-3">
            <EditButton title={"Edit Expense"}></EditButton>
            <CreateButton title={"Add Expense"}></CreateButton>
          </div>
        </div>
        <section class="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          <DataBlocks blockData={blockData}></DataBlocks>
        </section>
        <section className="grid md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-3 xl:grid-flow-col gap-6">
          <ProgressGraph rowValue={5}></ProgressGraph>
          <div className="row-span-5 bg-white shadow rounded-lg">
            <List listInfo={"Expenses"}></List>
          </div>
          <PieChart></PieChart>
        </section>
      </main>
    </>
  );
}
