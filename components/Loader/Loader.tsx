"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ScaleLoader } from "react-spinners";
import css from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={css.backdrop}>
      <ScaleLoader color="#1ad05d" />
    </div>
  );
}
