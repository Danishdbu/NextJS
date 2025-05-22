import { prisma } from "@/lib/prisma";
import React from "react";
import { Button } from "@/components/ui/button";
const SnippetDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const id = parseInt((await params).id);
  const snippet = await prisma.snippet.findUnique({
    where:{
        id,
    },
  });
if(!snippet) return <h1>Snippet not found</h1>

  return (
  <div className="flex flex-col gap-5">
  <div className="flex items-center justify-between">
    <h1 className="font-bold text-xl">{snippet.title}</h1>
    <div className="flex items-center gap-2">
      <Button>Edit</Button>
      <Button variant={"destructive"}>Delete</Button>
    </div>
  </div>
  <pre className="p-3 bg-gray-200 rounded border border-gray-300">
    <code>{snippet.code}</code>
  </pre>
</div>

);
};

export default SnippetDetailPage;
