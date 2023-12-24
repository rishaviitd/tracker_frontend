export default function List({ listInfo }) {
  return (
    <>
      <div className="flex items-center justify-between px-6 py-5 font-semibold border-b border-gray-100">
        <span>{listInfo} </span>
      </div>
      <div className="overflow-y-auto" style={{ maxHeight: "24rem" }}>
        <ul className="p-6 space-y-6">
          <li>ekrfe</li>
          <li>kerr</li>
          <li>ekrfe</li>
          <li>kerr</li>
          <li>ekrfe</li>
        </ul>
      </div>
    </>
  );
}
