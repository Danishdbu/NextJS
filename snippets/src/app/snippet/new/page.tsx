"use client"
import React, { useActionState } from "react";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import * as actions from "@/actions"


const CreateSnippetPage = () => {

  const [formStateData,xyz] = useActionState(actions.createSnippet,{message:""});



  return (
    <form action={xyz}>
      <div>
        <Label htmlFor="title">Title</Label>
        <Input type="text" name="title" id="title" />
      </div>

      <div>
        <Label htmlFor="code">Code</Label>
        <Textarea name="code" id="code" />
      </div>
      {formStateData.message && <div className="my-2 p-2 bg-red-300 border-2 border-red-600 rounded-md">{formStateData.message}</div>}

      <Button type="submit" className="my-4">
        New
      </Button>
    </form>
  );
};

export default CreateSnippetPage;
