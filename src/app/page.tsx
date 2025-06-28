"use client";

import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";

const Page = () => {
  const trpc = useTRPC();
  const invoke = useMutation(trpc.invoke.mutationOptions({}));
  return (
    <div className="max-w-7xl mx-auto p-4">
      <Button onClick={() => invoke.mutate({ text: "test" })}>
        Invoke job
      </Button>
    </div>
  );
};

export default Page;
