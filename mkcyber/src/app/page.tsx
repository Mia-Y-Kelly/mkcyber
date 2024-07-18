import Image from "next/image";
import Navbar from "../components/navbar";
import { ReactNode } from "react";
import Typography from "@mui/material/Typography";

export default function Home({
  children
}: {
  children: ReactNode
}) {
  return (
    <>
      <Typography sx={{position: 'absolute', right: '50%'}}>Portfolio testing</Typography>
    </>
  );
}
