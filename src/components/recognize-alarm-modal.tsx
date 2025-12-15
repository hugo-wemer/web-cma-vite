import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import z from "zod"
import { useCreateRecognition } from "@/http/use-create-recognition"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Separator } from "./ui/separator"
import { Textarea } from "./ui/textarea"

const newRecognitionFormSchema = z.object({
  author: z.string().min(1, { message: "O campo Autor é obrigatório" }),
  comment: z.string().min(1, { message: "O campo Comentário é obrigatório" }),
})
type newRecognitionFormType = z.infer<typeof newRecognitionFormSchema>

export function RecognizeAlarmModal({
  companySlug,
  installationSlug,
  assetSlug,
  sensorSlug,
  sensorOwnerId,
  setIsOpen,
}: {
  companySlug: string
  installationSlug: string
  assetSlug: string
  sensorSlug: string
  sensorOwnerId: string
  setIsOpen: (isOpen: boolean) => void
}) {
  const { mutateAsync: createRecognition } = useCreateRecognition()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors, isSubmitSuccessful },
    reset,
  } = useForm({
    resolver: zodResolver(newRecognitionFormSchema),
  })

  if (isSubmitSuccessful) {
    setIsOpen(false)
  }

  async function handleCreateNewRecognition({
    author,
    comment,
  }: newRecognitionFormType) {
    await createRecognition({
      body: { author, comment },
      params: { companySlug, installationSlug, assetSlug, sensorOwnerId },
    })
    reset()
  }

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2 text-nowrap font-normal text-muted-foreground">
          <Badge className="rounded-sm" variant={"secondary"}>
            {companySlug.toUpperCase()}
          </Badge>
          <Badge className="rounded-sm" variant={"secondary"}>
            {installationSlug.toUpperCase()}
          </Badge>
          <Badge className="rounded-sm" variant={"secondary"}>
            {assetSlug.toUpperCase()}
          </Badge>
          <Badge className="rounded-sm" variant={"secondary"}>
            {sensorSlug.toUpperCase()}
          </Badge>
        </div>
        <Separator />
        <span className="text-muted-foreground text-sm italic">
          Crie um comentário no ativo e passe o alarme do sensor para "Em
          tratamento"
        </span>
      </div>
      <form
        className="space-y-2"
        onSubmit={handleSubmit(handleCreateNewRecognition)}
      >
        <div>
          <Input placeholder="Usuário" {...register("author")} />
          {errors.author && (
            <span className="text-destructive text-xs">
              {errors.author.message}
            </span>
          )}
        </div>
        <div>
          <Textarea
            className="h-56"
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
          Salvar
        </Button>
      </form>
    </div>
  )
}
