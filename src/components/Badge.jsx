export default function Badge({ status }) {
  const styles = {
    Hot: "bg-red-100 text-red-700 border-red-200",
    Closed: "bg-green-100 text-green-700 border-green-200",
    "Follow-up": "bg-orange-100 text-orange-700 border-orange-200",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border ${
        styles[status] || "bg-gray-100 text-gray-700 border-gray-200"
      }`}
    >
      {status}
    </span>
  );
}
