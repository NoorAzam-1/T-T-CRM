"use client";
import { useState } from "react";
import VendorForm from "./VendorForm";
import VendorList from "./VendorLists";

export default function Vendors() {
  const [refresh, setRefresh] = useState(false);

  const handleRefresh = () => {
    setRefresh(!refresh);
  };

  return (
    <>
      <VendorForm onVendorCreated={handleRefresh} />
      <VendorList refresh={refresh} />
    </>
  );
}