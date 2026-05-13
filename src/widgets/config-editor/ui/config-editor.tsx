"use client";
import { useState } from "react";
import { ConfigSchema, ConfigCard } from "@/entities/config";
import { Button } from "@/shared/ui";

export const ConfigEditor = () => {
  const [config, setConfig] = useState<ConfigSchema[]>([
    {
      type: "niri",
      binds: [
        {
          keys: ["A", "B", "C"],
          action: "example-action",
          title: "example-title",
          entity: "example-entity",
        },
        {
          keys: ["C", "D", "F"],
          action: "example-action",
          title: "example-title",
        },
        {
          keys: ["G", "G", "G"],
          action: "example-action",
        },
      ],
    },
    {
      type: "hyprland",
      binds: [
        {
          keys: ["A", "B", "C"],
          action: "example-action",
          title: "example-title",
          entity: "example-entity",
        },
        {
          keys: ["C", "D", "F"],
          action: "example-action",
          title: "example-title",
        },
        {
          keys: ["G", "G", "G"],
          action: "example-action",
        },
      ],
    },
  ]);

  return (
    <div className="gap-4 grid">
      {config.map((item, index) => (
        <ConfigCard key={index} config={item} />
      ))}
      <Button href="/" variant="primary">
        go to home
      </Button>
    </div>
  );
};
