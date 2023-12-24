export default function PageHeading({ tabName, subtitle }) {
  return (
    <>
      <div className="mr-6">
        <h1 className="text-4xl font-semibold mb-2">{tabName}</h1>
        <h2 className="text-gray-600 ml-0.5">{subtitle}</h2>
      </div>
    </>
  );
}
