"use client";
import { useParams } from "next/navigation";
import css from "./layout.module.css";
import CamperDetailsClient from "./CamperDetails.client";
import Tabs from "@/components/Tabs/Tabs";

export default function CamperLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const params = useParams();
  const camperId = params.id as string;

  return (
    <div className={css.CamperLayout}>
      <CamperDetailsClient />
      <Tabs camperId={camperId}>{children}</Tabs>
    </div>
  );
}
