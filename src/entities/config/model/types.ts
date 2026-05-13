export interface ConfigSchema {
  type: "niri" | "hyprland";
  binds: ConfigPayload[];
}

export interface ConfigPayload {
  keys: string[];
  action: string;
  title?: string;
  entity?: string;
}
