import { skeletonSidebarStyles } from "@/lib/styles/heroVisualStyles";

const navItemWidths = [80, 60, 70, 50, 65];

export function HeroSkeletonSidebar() {
  return (
    <aside className={skeletonSidebarStyles.wrapper}>
      <div className={skeletonSidebarStyles.logo} />
      {navItemWidths.map((width) => (
        <div
          key={width}
          className={skeletonSidebarStyles.item}
          style={{ width: `${width}%` }}
        />
      ))}
    </aside>
  );
}
