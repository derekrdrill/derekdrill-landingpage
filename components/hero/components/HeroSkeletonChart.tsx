import { skeletonChartStyles } from "@/lib/styles/heroVisualStyles";

const barHeights = [45, 70, 38, 82, 56, 64, 92, 50];

export function HeroSkeletonChart() {
  return (
    <div className={skeletonChartStyles.wrapper}>
      <span className={skeletonChartStyles.legend} />
      <div className={skeletonChartStyles.bars}>
        {barHeights.map((height, index) => (
          <span
            key={`${height}-${index}`}
            className={skeletonChartStyles.bar}
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
    </div>
  );
}
