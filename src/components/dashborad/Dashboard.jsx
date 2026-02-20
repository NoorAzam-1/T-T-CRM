import { Icons } from "../UI/Icons";
import StatCard from "./StatCard";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-3 gap-6">
      <StatCard label="Total Enquiries" count="42" icon={Icons.Users} colorClass="bg-blue-300 text-blue-600" />
      <StatCard label="Booked Tours" count="18" icon={Icons.Check} colorClass="bg-green-300 text-green-600" />
      <StatCard label="Pending Quotes" count="11" icon={Icons.Clock} colorClass="bg-orange-300 text-orange-600" />
      <StatCard label="Total Revenue" count="5 LAKH" icon={Icons.Rupee} colorClass="bg-gray-300 text-orange-600" />
    </div>
  );
}
