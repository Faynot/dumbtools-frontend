import { ConfigEditor } from "@/widgets/config-editor";

export default function ConfigsPage() {
  return (
    <main className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Config settings</h1>
      <ConfigEditor />
    </main>
  );
}
