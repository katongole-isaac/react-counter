import React, { Component } from "react";

export default function ({totalCount}) {
  return (
    <div className="nav-bar">
      <h3>
        Cart <span>{totalCount}</span>
      </h3>
    </div>
  );
}
