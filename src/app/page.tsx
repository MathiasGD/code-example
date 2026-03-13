import { Button } from "@/components/buttons/Button";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex gap-2">
        <Button>Deletar item</Button>
        <Button variant="secondary">Deletar item</Button>
        <Button variant="outline">Deletar item</Button>
      </div>
    </div>
  );
}
