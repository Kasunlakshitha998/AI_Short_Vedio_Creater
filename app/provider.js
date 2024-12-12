"use client";
import { db } from "@/config/db";
import { Users } from "@/config/schema";
import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import React, { useEffect } from "react";

function Provider({ children }) {
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      isNewUser();
    }
  }, [user]);

  // Check if the user is new, and if so, add them to the database
  const isNewUser = async () => {
    try {
      // Check if the user already exists in the database
      const result = await db
        .select()
        .from(Users)
        .where(eq(Users.email, user?.primaryEmailAddress?.emailAddress));

      console.log("Query result:", result);

      // If the user doesn't exist, insert them into the database
      if (!result || result.length === 0) {
        await db.insert(Users).values({
          name: user.fullName,
          email: user?.primaryEmailAddress?.emailAddress,
          imageUrl: user?.imageUrl || "",
        });
        console.log("New user added to the database");
      } else {
        console.log("User already exists in the database");
      }
    } catch (error) {
      console.error("Error checking or inserting user:", error);
    }
  };

  return <div>{children}</div>;
}

export default Provider;
