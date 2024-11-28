"use client";
import { useSession } from "@/lib/auth-client";
import React from "react";

const DashboardPage = () => {
  const session = useSession();

  return <div>{JSON.stringify(session.data?.user)}</div>;
};

export default DashboardPage;
