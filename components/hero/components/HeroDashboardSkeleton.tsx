import { dashboardSkeletonStyles } from "@/lib/styles/heroVisualStyles";

import { HeroSkeletonChart } from "./HeroSkeletonChart";
import { HeroSkeletonStatCards } from "./HeroSkeletonStatCards";

export function HeroDashboardSkeleton() {
  return (
    <div className={dashboardSkeletonStyles.wrapper}>
      <div className={dashboardSkeletonStyles.headerRow}>
        <span className={dashboardSkeletonStyles.titleBar} />
        <span className={dashboardSkeletonStyles.pill} />
      </div>
      <HeroSkeletonStatCards />
      <HeroSkeletonChart />
    </div>
  );
}
