'use client'

import { useState } from 'react';
import Image from 'next/image';
import  { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation'


function PromptCard({ post, handleTagClick, handleEdit, handleDelete}) {
  const [copied, setcopied] = useState("");

  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex justify-start cursor-pointer items-center gap-3">
          <Image
            src={post.creator.image}
            alt="user_image"
            width={40}
            height={40}
            className="rounded-full object-contain"
          />
          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-900">{post.creator.username}</h3>
            <p className="font-inter text-sm text-gray-500">{post.creator.email}</p>
          </div>
        </div>
        <div className="copy_btn" onClick={() => {
          
        }}>
          <Image
            width={12}
            height={12}
            src={copied === post.prompt
            ? '/assets/icons/tick.svg'
            : '/assets/icons/copy.svg'
            }
          />

        </div>
      </div>
    </div>
  )
}

export default PromptCard
