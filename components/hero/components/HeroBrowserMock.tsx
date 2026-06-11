import { browserMockStyles } from "@/lib/styles/heroVisualStyles";

import { HeroDashboardSkeleton } from "./HeroDashboardSkeleton";
import { HeroSkeletonSidebar } from "./HeroSkeletonSidebar";

const windowControls = ["bg-red-400/70", "bg-amber-400/70", "bg-emerald-400/70"];

export function HeroBrowserMock() {
  return (
    <div className={browserMockStyles.frame}>
      <div className={browserMockStyles.toolbar}>
        <div className={browserMockStyles.controls}>
          {windowControls.map((color) => (
            <span
              key={color}
              className={`${browserMockStyles.control} ${color}`}
            />
          ))}
        </div>
        <div className={browserMockStyles.urlBar}>derekdrill.dev</div>
      </div>

      <div className={browserMockStyles.body}>
        <HeroSkeletonSidebar />
        <HeroDashboardSkeleton />
      </div>
    </div>
  );
}
