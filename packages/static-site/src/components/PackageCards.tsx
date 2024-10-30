import { useResolvedPath } from "react-router-dom";
import Card, { CardProps } from "./Card";

interface PackageJson {
  name: string;
  description: string;
  private: boolean;
}

const packages: Record<string, { default: PackageJson }> = import.meta.glob(
  "../../../../packages/*/package.json",
  { eager: true }
);

const PackageCards = () => {

  const cards: CardProps[] = [];

  for (const key in packages) {
    const p = packages[key].default;
    if (p.private !== true) {
      cards.push({
        title: p.name,
        description: p.description,
        href: useResolvedPath(`../${p.name}/index.html`).pathname,
        linkLabel: "Launch",
      });
    }
  }

  return (
    <>
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </>
  );
};

export default PackageCards;
