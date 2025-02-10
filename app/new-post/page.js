'use client';
import { createPost } from '@/actions/posts';
import FormActionSubmit from '@/components/formActionSubmit';
export default function NewPostPage() {

  return(
    <FormActionSubmit action={createPost}/>
  )
  
}
