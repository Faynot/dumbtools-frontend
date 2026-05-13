import { ConfigSchema } from "../model/types";

export const ConfigCard = ({ config }: { config: ConfigSchema }) => (
  <div className="border p-4 rounded-lg">
    <h3 className="text-xl font-bold border-b pb-2 mb-4 uppercase">
      {config.type}
    </h3>

    <ul className="space-y-2">
      {config.binds.map((b, i) => (
        <li key={i} className="flex items-center gap-2 p-2 rounded border">
          <span className="font-mono text-sm px-2 py-1 rounded">
            {b.keys.join(" + ")}
          </span>
          <span>→</span>
          <span className="font-medium">{[b.action, b.title].join(" ")}</span>
        </li>
      ))}
    </ul>

    {config.binds.length === 0 && (
      <p className="text-gray-400 italic text-sm">Биндов не найдено</p>
    )}
  </div>
);
