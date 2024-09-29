"use client"

import HeaderNav from "@/components/elements/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useReducer, useState } from "react";

interface ReducerProps {
  type: string
  payload: string
}

export default function AboutPage() {


  return (
    <main>
      <HeaderNav
        activeNav={"About"}
      />


    </main >
  );
}
