import { useUser } from "@clerk/nextjs";
import React from "react";

function Provider({ children }) {

  const {user} =useUser();

  const isNewUser= async()=>{
    const result = await db
  }


  return <div>{children}</div>;
}

export default Provider;
