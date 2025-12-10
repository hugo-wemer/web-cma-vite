import { zodResolver } from "@hookform/resolvers/zod"
import { CalendarClockIcon, Loader2, Plus } from "lucide-react"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
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
import { Textarea } from "./ui/textarea"

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
  } = useForm({
    resolver: zodResolver(newCommentFormSchema),
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
      <DialogContent>
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
          <div>
            <Textarea
              aria-invalid={!!errors.comment}
              className="h-48"
              placeholder="Comentário"
              {...register("comment")}
            />
            {errors.comment && (
              <span className="text-destructive text-xs">
                {errors.comment.message}
              </span>
            )}
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
