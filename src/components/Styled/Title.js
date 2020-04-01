import React from "react";

export default function Title({ title, subtitle }) {
  return (
    <div className="py-5">
      <h4 className="text-center">{title}</h4>
      {subtitle && <h6 className="pt-3 text-center text-muted">{subtitle}</h6>}
    </div>
  );
}
