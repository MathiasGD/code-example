import { Button } from "@/components/Button";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center gap-8 p-8">
      <div className="h-44 w-full bg-background-dark-1 rounded p-8 shadow-inset overflow-auto">
        <div className="flex h-full justify-center items-center">
          <Button>Deletar item</Button>
        </div>
      </div>
    </div>
  );
}
