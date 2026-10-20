"use client";
import { useEffect } from "react";

export default function Redirector({ to }: { to: string }) {
  useEffect(() => {
    window.location.replace(to);
  }, [to]);
  return null;
}