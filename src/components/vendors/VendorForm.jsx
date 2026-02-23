"use client";
import { useState } from "react";
import api from "../../utils/axios";
import { toast } from "react-toastify";
export default function VendorForm({ onVendorCreated }) {
    const [form, setForm] = useState({
        name: "",
        type: "",
        city: "",
        price: "",
        contactNumber: "",
    });
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const res = await api.post(
                "/api/vendors/create-vendor",
                form
            );
            if (res.status === 201) {
                toast.success("Vendor Created Successfully ");
            }

            setForm({
                name: "",
                type: "",
                city: "",
                price: "",
                contactNumber: "",
            });
            if (onVendorCreated) onVendorCreated();

        } catch (error) {
            toast.error("Error creating vendor");
        }
    };

    return (
        <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-bold mb-4">Add Vendor</h2>

            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">

                <input
                    type="text"
                    name="name"
                    placeholder="Vendor Name"
                    value={form.name}
                    onChange={handleChange}
                    className="border p-2 rounded"
                    required
                />

                <select name="type" value={form.type} onChange={handleChange} required className="border p-2 rounded">
                    <option value="" disabled>Type</option>
                    <option value="Hotel">Hotel</option>
                    <option value="Transport">Transport</option>
                    <option value="Activity">Activity</option>
                </select>

                <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={form.city}
                    onChange={handleChange}
                    className="border p-2 rounded"
                    required
                />

                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={form.price}
                    onChange={handleChange}
                    className="border p-2 rounded"
                    required
                />

                <input
                    type="text"
                    name="contactNumber"
                    placeholder="Contact Number"
                    value={form.contactNumber}
                    onChange={handleChange}
                    className="border p-2 rounded col-span-2"
                    required
                />

                <button
                    type="submit"
                    className="col-span-2 bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 cursor-pointer"
                >
                    Create Vendor
                </button>
            </form>
        </div>
    );
}