import { skeletonStatCardsStyles } from "@/lib/styles/heroVisualStyles";

const statCardIds = ["visitors", "revenue", "conversion"];

export function HeroSkeletonStatCards() {
  return (
    <div className={skeletonStatCardsStyles.grid}>
      {statCardIds.map((id) => (
        <div key={id} className={skeletonStatCardsStyles.card}>
          <span className={skeletonStatCardsStyles.label} />
          <span className={skeletonStatCardsStyles.value} />
        </div>
      ))}
    </div>
  );
}
