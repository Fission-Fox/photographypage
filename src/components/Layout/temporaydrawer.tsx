import logo from "@/assets/Image/designpartnerlogo1.png";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Anchor = "right";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ "& .MuiDrawer-paper": { width: 240 } }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List style={{ backgroundColor: "#f4f4f4" }}>
        <div className="w-[90%] sm:w-[700px] md:hidden ml-3 ">
          <div className="flex justify-between">
            <Image className="w-[100px] " src={logo} alt="" />
            <button className="mr-4">CLOSE</button>
          </div>

          <div className="">
            <ul className="text-[12px]  m-10 flex flex-col gap-6 ">
              <Link href={"/"}>Home</Link>
              <hr className="border-gray-500 w-48" />
              <Link href={"/mystory"} className="flex justify-between">
                About Us
              </Link>

              {/* <hr className="border-gray-500 w-48" />
              <li className="flex justify-between">
                JOURNAL <ArrowRightIcon />
              </li> */}
              {/* <hr className="border-gray-500 w-48" />
              <li className="flex justify-between">
                TINTYPES <ArrowRightIcon />{" "}
              </li> */}
              <hr className="border-gray-500 w-48" />
              <Link href="/pricing" className="flex justify-between">
                Packages
              </Link>
            </ul>
          </div>
          <div className="flex gap-6 px-8 p-10">
            <FacebookTwoToneIcon />
            <InstagramIcon />
            <TwitterIcon />
          </div>
          <div>
            <p className="text-[12px] px-8 p-6 flex ">
              ©2024 Dream Filmers <br /> <br /> Photography Inc.
              <br /> <br />
            </p>
          </div>
        </div>
      </List>
    </Box>
  );

  return (
    <div>
      {(["right"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            onClick={toggleDrawer(anchor, true)}
            sx={{ color: "black", marginTop: "2px", fontSize: "12px" }}
          >
            MENU
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
