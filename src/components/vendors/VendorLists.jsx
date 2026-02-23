"use client";
import { useEffect, useState } from "react";
import api from "../../utils/axios";
import useAuthStore from "@/store/useAuthStore";

export default function VendorList({ refresh }) {
    const [vendors, setVendors] = useState([]);
    const { token } = useAuthStore();

    const fetchVendors = async () => {
        try {
            const res = await api.get(
                "/api/vendors/get-vendors",
            );

            setVendors(res.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (token) {
            fetchVendors();
        }
    }, [refresh, token]);

    return (
        <div className="bg-white p-6 rounded-xl shadow-md mt-6">
            <h2 className="text-xl font-bold mb-4">Vendor List</h2>

            <table className="w-full border-collapse">
                <thead>
                    <tr className="bg-gray-400">
                        <th className="p-2 text-left">Name</th>
                        <th className="p-2 text-left">Type</th>
                        <th className="p-2 text-left">City</th>
                        <th className="p-2 text-left">Price</th>
                        <th className="p-2 text-left">Contact</th>
                    </tr>
                </thead>

                <tbody>
                    {vendors.map((vendor) => (
                        <tr key={vendor._id} className="border-b">
                            <td className="p-2">{vendor.name}</td>
                            <td className="p-2">{vendor.type}</td>
                            <td className="p-2">{vendor.city}</td>
                            <td className="p-2">₹ {vendor.price}</td>
                            <td className="p-2">{vendor.contactNumber ? vendor.contactNumber : "N/A"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}