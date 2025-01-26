import ComponentCard from "@/components/component-card";
import ComponentDetails from "@/components/component-details";
import ComponentLoader from "@/components/component-loader-server";
import Cta from "@/components/cta";
import PageGrid from "@/components/page-grid";
import PageHeader from "@/components/page-header";
import { getComponentsByNames } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Input components - Origin UI",
  description:
    "A collection of beautiful and accessible input components built with Tailwind CSS and React.",
};

const componentsList = [
  { name: "comp-01" },
  { name: "comp-02" },
  { name: "comp-03" },
  { name: "comp-04" },
  { name: "comp-05" },
  { name: "comp-06" },
  { name: "comp-07" },
  { name: "comp-08" },
  { name: "comp-09" },
  { name: "comp-10" },
  { name: "comp-11" },
  { name: "comp-12" },
  { name: "comp-13" },
  { name: "comp-14" },
  { name: "comp-15" },
  { name: "comp-16" },
  { name: "comp-17" },
  { name: "comp-18" },
  { name: "comp-19" },
  { name: "comp-20" },
  { name: "comp-21" },
  { name: "comp-22" },
  { name: "comp-23" },
  { name: "comp-24" },
  { name: "comp-25" },
  { name: "comp-26" },
  { name: "comp-27" },
  { name: "comp-28" },
  { name: "comp-29" },
  { name: "comp-30" },
  { name: "comp-31" },
  { name: "comp-32" },
  { name: "comp-33" },
  { name: "comp-34" },
  { name: "comp-35" },
  { name: "comp-36" },
  { name: "comp-37" },
  { name: "comp-38" },
  { name: "comp-39" },
  { name: "comp-40" },
  { name: "comp-41" },
  { name: "comp-42" },
  { name: "comp-43" },
  { name: "comp-44" },
  { name: "comp-45" },
  { name: "comp-58" },
  { name: "comp-46" },
  { name: "comp-47" },
  { name: "comp-48" },
  { name: "comp-49" },
  { name: "comp-50" },
  { name: "comp-51" },
  { name: "comp-52" },
  { name: "comp-53" },
  { name: "comp-54" },
  { name: "comp-55" },
  { name: "comp-486" },
  { name: "comp-56" },
  { name: "comp-57" },
];

export default function Page() {
  const components = getComponentsByNames(componentsList.map(item => item.name));

  return (
    <main>
      <PageHeader title="Input">
        A growing collection of {components.length} input components built with Tailwind CSS and React.
      </PageHeader>

      <PageGrid>
        {components.map((component) => {
          return (
            <ComponentCard key={component.name} component={component}>
              <ComponentLoader component={component} />
              <ComponentDetails component={component} />
            </ComponentCard>
          );
        })}
      </PageGrid>

      <Cta />
    </main>
  );
}
