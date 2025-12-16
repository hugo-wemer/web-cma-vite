import Highlight from "@tiptap/extension-highlight"
import Typography from "@tiptap/extension-typography"
import { EditorContent, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"

export function ReadOnlyHtml({ html }: { html: string }) {
  const editor = useEditor(
    {
      extensions: [StarterKit, Typography, Highlight],
      content: html,
      editable: false,
      editorProps: {
        attributes: {
          class: "prose prose-invert max-w-none",
        },
      },
    },
    [html] // importante: atualiza se o html mudar
  )

  if (!editor) {
    return null
  }
  return <EditorContent editor={editor} />
}
