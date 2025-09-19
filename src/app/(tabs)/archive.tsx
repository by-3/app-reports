import BackGound from "@/src/components/BackGround";
import OldReportCard from "@/src/components/OldReportCard";
import React from "react";
import { ScrollView } from "react-native";

export default function Archive() {
  return (
    <BackGound>
      <ScrollView>
        <OldReportCard />
        <OldReportCard />
        <OldReportCard />
        <OldReportCard />
        <OldReportCard />
        <OldReportCard />
      </ScrollView>
    </BackGound>
  );
}
