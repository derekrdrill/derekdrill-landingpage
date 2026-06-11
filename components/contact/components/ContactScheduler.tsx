"use client";

import type { ComponentProps } from "react";
import Cal from "@calcom/embed-react";

import { contactSection } from "@/lib/constants/contact";
import { contactSchedulerStyles } from "@/lib/styles/contactStyles";

type CalConfig = ComponentProps<typeof Cal>["config"];
type CalStyle = ComponentProps<typeof Cal>["style"];

const schedulerStyle: CalStyle = {
  width: "100%",
  height: contactSection.schedulerHeight,
  overflow: "scroll",
};

const schedulerConfig: CalConfig = {
  theme: contactSection.schedulerTheme,
};

export function ContactScheduler() {
  return (
    <div className={contactSchedulerStyles.wrapper}>
      <Cal
        calLink={contactSection.calLink}
        style={schedulerStyle}
        config={schedulerConfig}
      />
    </div>
  );
}
