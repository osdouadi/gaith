"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./Toolbar";
import Heading from "@tiptap/extension-heading"
import List from "@tiptap/extension-ordered-list";

const TextEditor = ({
  description,
  onChange,
}: {
  description: string;
  onChange: (richText: string) => void;
}) => {
  const editor = useEditor({
    extensions: [
        StarterKit.configure({}),
        Heading.configure({
            HTMLAttributes: {
                class: "text-xl font-bold",
                levels: [2]
            }
        }),
      List.configure({
        bulletList: true, // enable bullet lists
        orderedList: true, // enable ordered lists
      }),
    ],
    content: description,
    editorProps: {
      attributes: {
        class: "rounded-md border min-h-[150px] border-input bg-gray-200 w-full",
      },
    },
    onUpdate({ editor }) {
      onChange(editor.getText());
    },
  });

  return(
  <div className="flex flex-col justify-stretch min-h-[250px]">
    <Toolbar editor={editor} />
    <EditorContent editor={editor} />
  </div>)
};

export default TextEditor;
