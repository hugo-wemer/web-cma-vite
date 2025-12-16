import { zodResolver } from "@hookform/resolvers/zod"
import { Document } from "@tiptap/extension-document"
import { Highlight } from "@tiptap/extension-highlight"
import { Placeholder } from "@tiptap/extension-placeholder"
import { Typography } from "@tiptap/extension-typography"
import { EditorContent, useEditor } from "@tiptap/react"
import { StarterKit } from "@tiptap/starter-kit"
import {
  Bold,
  CalendarClockIcon,
  Code,
  Heading1,
  Heading2,
  Heading3,
  Italic,
  List,
  Loader2,
  Plus,
  Underline,
} from "lucide-react"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { ScrollArea } from "@/components/ui/scroll-area"
import type { CronologyRequestParams } from "@/http/types/get-comments-response"
import { useCreateComment } from "@/http/use-create-comment"
import { Button } from "./ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import { Input } from "./ui/input"

const newCommentFormSchema = z.object({
  author: z.string().min(1, { message: "O campo Autor é obrigatório" }),
  commentedAt: z
    .string()
    .min(15, { message: "O campo Data é obrigatório" })
    .transform((date) => new Date(date).toISOString()),
  comment: z.string().min(1, { message: "O campo Comentário é obrigatório" }),
})
type NewCommentFormType = z.infer<typeof newCommentFormSchema>

export function CreateCommentForm({
  companySlug,
  installationSlug,
  assetSlug,
}: CronologyRequestParams) {
  const [isOpen, setIsOpen] = useState(false)
  const { mutateAsync: createComment } = useCreateComment()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors, isSubmitSuccessful },
    reset,
    setValue,
  } = useForm({
    resolver: zodResolver(newCommentFormSchema),
  })

  const editor = useEditor({
    extensions: [
      Document.extend({
        content: "block*",
      }),
      StarterKit.configure({
        document: false,
      }),
      Highlight,
      Typography,
      Placeholder.configure({
        placeholder: "Digite seu comentário...",
        emptyEditorClass:
          "before:content-[attr(data-placeholder)] before:text-muted-foreground before:h-0 before:float-left before:pointer-events-none",
      }),
    ],
    autofocus: "end",
    editorProps: {
      attributes: {
        class:
          "focus:outline-none prose prose-invert prose-headings-mt-0  prose-sm prose-headings-text-lg text-foreground",
      },
    },
    onUpdate: ({ editor: tiptapEditor }) => {
      setValue("comment", tiptapEditor.getHTML())
    },
  })

  async function handleCreateNewComment({
    author,
    comment,
    commentedAt,
  }: NewCommentFormType) {
    await createComment({
      body: { author, comment, commentedAt },
      params: { companySlug, installationSlug, assetSlug },
    })
    reset()
    if (editor) {
      editor.commands.clearContent()
    }
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      setIsOpen(false)
    }
  }, [isSubmitSuccessful])

  return (
    <Dialog onOpenChange={setIsOpen} open={isOpen}>
      <DialogTrigger className="flex h-8 cursor-pointer items-center gap-1 rounded-md bg-primary px-4 font-semibold text-card text-sm hover:opacity-70">
        <Plus />
        <span>Adicionar comentário ao ativo</span>
      </DialogTrigger>
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle>Adicionar um comentário ao ativo</DialogTitle>
        </DialogHeader>
        <form
          className="space-y-2"
          onSubmit={handleSubmit(handleCreateNewComment)}
        >
          <div>
            <Input
              aria-invalid={!!errors.author}
              placeholder="Autor"
              {...register("author")}
            />
            {errors.author && (
              <span className="text-destructive text-xs">
                {errors.author.message}
              </span>
            )}
          </div>
          <div>
            <div className="relative">
              <Input
                aria-invalid={!!errors.commentedAt}
                className="text-muted-foreground"
                type="datetime-local"
                {...register("commentedAt")}
                defaultValue={new Date(Date.now() - 3 * 60 * 60 * 1000)
                  .toISOString()
                  .slice(0, 16)}
              />

              <CalendarClockIcon className="-translate-y-1/2 pointer-events-none absolute top-1/2 right-3 size-4 cursor-pointer text-muted-foreground" />
            </div>
            {errors.commentedAt && (
              <span className="text-destructive text-xs">
                {errors.commentedAt.message}
              </span>
            )}
          </div>
          <div className="space-x-1 space-y-1">
            <Button
              aria-label="Toggle heading"
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 1 }).run()
              }
              size="icon-sm"
              type="button"
              value="bold"
              variant={"outline"}
            >
              <Heading1 className="h-4 w-4" />
            </Button>
            <Button
              aria-label="Toggle heading"
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 2 }).run()
              }
              size="icon-sm"
              type="button"
              value="bold"
              variant={"outline"}
            >
              <Heading2 className="h-4 w-4" />
            </Button>
            <Button
              aria-label="Toggle heading"
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 3 }).run()
              }
              size="icon-sm"
              type="button"
              value="bold"
              variant={"outline"}
            >
              <Heading3 className="h-4 w-4" />
            </Button>
            <Button
              aria-label="Toggle bold"
              onClick={() => editor.chain().focus().toggleBold().run()}
              size="icon-sm"
              type="button"
              value="bold"
              variant={"outline"}
            >
              <Bold className="h-4 w-4" />
            </Button>
            <Button
              aria-label="Toggle italic"
              onClick={() => editor.chain().focus().toggleItalic().run()}
              size="icon-sm"
              type="button"
              value="italic"
              variant={"outline"}
            >
              <Italic className="h-4 w-4" />
            </Button>
            <Button
              aria-label="Toggle strikethrough"
              onClick={() => editor.chain().focus().toggleUnderline().run()}
              size={"icon-sm"}
              type="button"
              value="strikethrough"
              variant={"outline"}
            >
              <Underline className="h-4 w-4" />
            </Button>
            <Button
              aria-label="Toggle strikethrough"
              onClick={() => editor.chain().focus().toggleCodeBlock().run()}
              size={"icon-sm"}
              type="button"
              value="strikethrough"
              variant={"outline"}
            >
              <Code className="h-4 w-4" />
            </Button>
            <Button
              aria-label="Toggle strikethrough"
              onClick={() => editor.chain().focus().toggleBulletList().run()}
              size={"icon-sm"}
              type="button"
              value="strikethrough"
              variant={"outline"}
            >
              <List className="h-4 w-4" />
            </Button>

            <ScrollArea className="h-72 w-[54ch] rounded-md border border-input bg-card px-3 py-2">
              <EditorContent className="" editor={editor} />
              {errors.comment && (
                <span className="text-destructive text-xs">
                  {errors.comment.message}
                </span>
              )}
            </ScrollArea>
          </div>
          <Button className="w-full" disabled={isSubmitting}>
            {!isSubmitting && <span>Salvar</span>}
            {isSubmitting && <Loader2 className="animate-spin" />}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
