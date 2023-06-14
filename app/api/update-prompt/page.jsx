'use client'

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import Form from '@components/Form'

function EditPrompt() {
    const router = useRouter();
    const { data: session } = useSession();
    const searchParams = useSearchParams();
    const promptId = searchParams.get('id');
    
    const [submitting, setSubmitting] = useState(false);
    const [post, setPost] = useState({
        prompt: '',
        tag: '',
    });

    useEffect(() => {
        const getPromptDetails = async () => {
            const response = await fetch(`/api/prompt/${promptId}`)
            const data = await response.json();
        }
       
    }, [promptId]);
    

    const EditPrompt = async (e) => {
        e.preventDefault();
        setSubmitting(true)

        try {
            const response = await fetch('/api/prompt/new',
            {
                method: 'POST',
                body: JSON.stringify({
                    prompt: post.prompt,
                    userId: session?.user.id,
                    tag: post.tag
                })
            })
            
            if(response.ok) {
                router.push('/');
            }
        } catch (error) {
            console.log(error);
        } finally {
            setSubmitting(false);
        }
    }

  return (
    <Form
        type="Create"
        post={post}
        setPost={setPost}
        submitting={submitting}
        handleSubmit={EditPrompt}
    />
  )
}

export default EditPrompt
