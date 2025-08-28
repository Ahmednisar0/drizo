// app/payment/page.tsx (Server Component, default)
import { Suspense } from "react";
import Payment from "../components/payment";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading payment...</div>}>
      <Payment />
    </Suspense>
  );
}
