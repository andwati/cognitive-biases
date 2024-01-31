import SkeletonCard from "@/components/SkeletonCard";
import React from "react";

export default function loading() {
  return (
    <div className="grid grid-cols-3 gap-8">
      {"abcdefghi".split("").map((i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}
