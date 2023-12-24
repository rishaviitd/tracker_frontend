import React from "react";
import PageHeading from "../components/PageHeading.jsx";
import List from "../components/List.jsx";
import EditButton from "../components/EditButton.jsx";
import CreateButton from "../components/CreateButton.jsx";
import DataBlocks from "../components/DataBlocks.jsx";
export default function CollagePage({ tabName }) {
  const blockData = [
    { item1: "MLL213", item2: "value2a" },
    { item1: "value1b", item2: "value2b" },
    { item1: "value1c", item2: "value2c" },
    { item1: "value1c", item2: "value2c" },
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
            <EditButton title={"Edit Acads"}></EditButton>
            <CreateButton title={"Add Acads"}></CreateButton>
          </div>
        </div>
        <section class="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          <DataBlocks blockData={blockData}></DataBlocks>
        </section>
        <section className="grid md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-3 xl:grid-flow-col gap-6">
          <div className="flex flex-col md:col-span-2 md:row-span-3 bg-white shadow rounded-lg ">
            <List listInfo={"Assignment and Quizzes (schedule)"}></List>
          </div>
          <div className="flex flex-col md:col-span-2 md:row-span-3 bg-white shadow rounded-lg ">
            <List listInfo={"Academic Tasks"}></List>
          </div>
        </section>
      </main>
    </>
  );
}
