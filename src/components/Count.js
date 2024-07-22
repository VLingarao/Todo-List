import React from "react";

export default function Count({ itemsCount }) {
  return (
    <div style={{ marginBottom: "10px" }}>
      <i>Pending Items Count</i> - {itemsCount}
    </div>
  );
}
