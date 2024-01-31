"use client";
import Herosection from "@/component/herosection";
import Images from "@/component/images";
import Realword from "@/component/realword";
import Text from "@/component/text";
import Vanlife from "@/component/vanlife";
import { Box } from "@mui/material";
export default function HomePage() {
  return (
    <Box>
      <Herosection />
      <Images />
      <Realword />
      <Vanlife />
      <Text />
    </Box>
  );
}
