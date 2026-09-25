import { DrawerMui } from "@/shared/ui";
import React from "react";

const DrawerStories = () => {
  return (
    <DrawerMui onClose={() => console.log("")} open={true} anchor="bottom">
      test
    </DrawerMui>
  );
};

export default DrawerStories;
