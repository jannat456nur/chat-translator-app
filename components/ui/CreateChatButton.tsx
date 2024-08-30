"use client"
import React from 'react'
import { Button } from './button'
import { MessagesSquareIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'

const CreateChatButton = () => {
    const router = useRouter()
    const createnewChat = async () => {
        //All the logic here
        router.push('./chat/abc')
    }
    return (
        <Button onClick={createnewChat} variant={"ghost"}><MessagesSquareIcon /></Button>
    )
}

export default CreateChatButton