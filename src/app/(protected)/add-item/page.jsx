"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AddItemPage() {
  const router = useRouter();

  useEffect(() => {
    const cookies = document.cookie;

    const isAuth = cookies.includes("auth=true");

    if (!isAuth) {
      router.replace("/login");
    }
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100">
      <h1 className="text-3xl font-bold text-primary">
        Add Item (Protected Page)
      </h1>
    </div>
  );
}
