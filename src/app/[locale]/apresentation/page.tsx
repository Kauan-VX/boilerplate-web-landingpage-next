"use client";
import AutoComplete from "@/app/components/shared/autocomplete";
import SkeletonLoading from "@/app/components/shared/skeleton-loading";

export default function Apresentation() {
  const array = [
    {
      name: "Teste 1",
      value: 1,
    },
    {
      name: "Teste 2",
      value: 2,
    },
    {
      name: "Teste 3",
      value: 3,
    },
  ];

  return (
    <section className="p-8 flex flex-col gap-4">
      <SkeletonLoading />
      <AutoComplete label="Autocomplete" array={array} />
    </section>
  );
}
