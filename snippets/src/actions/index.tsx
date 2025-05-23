"use server"
import { prisma } from '@/lib/prisma'
import React from 'react'
import { redirect } from 'next/navigation'

export const saveSnippet = async (id:number,code:string) =>{ await prisma.snippet.update({
    where:{
        id
    },
    data:{
        code
    }
    
});

 redirect(`/snippet/${id}`);
}

export const deleteSnippet = async (id:number) =>{ await prisma.snippet.delete({
    where:{id}   
});
redirect("/");
}


export const createSnippet = async (message:string,formData: FormData) => {

    const title = formData.get("title");
    const code = formData.get("code");

    if(typeof title != "string" || title.length < 4){
        return {message:"Title is require and must be longer"}
    }
    if(typeof code != "string" || code.length < 8){
        return {code:"Code is require"}
    }

    const snippet = await prisma.snippet.create({
      data: {
        title,
        code,
      },
    });
    console.log("created snippet", snippet);
    redirect("/");
  }