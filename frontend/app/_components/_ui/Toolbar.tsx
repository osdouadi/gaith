"use client";
import { type Editor } from "@tiptap/react";
import {
  Bold,
  Strikethrough,
  Italic,
  List,
  ListOrdered,
  Heading2,
  Heading1,
  Heading3,
  Heading4,
  Heading5,
} from "lucide-react";
import Toggle from "./Toggle";

type Props = {
  editor: Editor | null;
};

function Toolbar({ editor }: Props) {
  if (!editor) {
    return null;
  }

  return (
    <div className="border border-input bg-gray-100 w-full h-[70px] flex items-center gap-4">
      <Toggle
        size="sm"
        pressed={editor.isActive("heading1")}
        onPressedChanged={() =>
          editor.chain().focus().toggleHeading({ level: 1 }).run()
        }
      >
        <Heading1 className="h-6 w-6 text-black" color="#545454" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("heading2")}
        onPressedChanged={() =>
          editor.chain().focus().toggleHeading({ level: 2 }).run()
        }
      >
        <Heading2 className="h-6 w-6 text-black" color="#545454" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("heading3")}
        onPressedChanged={() =>
          editor.chain().focus().toggleHeading({ level: 3 }).run()
        }
      >
        <Heading3 className="h-6 w-6 text-black" color="#545454" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("heading4")}
        onPressedChanged={() =>
          editor.chain().focus().toggleHeading({ level: 4 }).run()
        }
      >
        <Heading4 className="h-6 w-6 text-black" color="#545454" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("heading5")}
        onPressedChanged={() =>
          editor.chain().focus().toggleHeading({ level: 5 }).run()
        }
      >
        <Heading5 className="h-6 w-6 text-black" color="#545454" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("bold")}
        onPressedChanged={() => editor.chain().focus().toggleBold().run()}
      >
        <Bold className="h-6 w-6 text-black" color="#545454" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("italic")}
        onPressedChanged={() => editor.chain().focus().toggleItalic().run()}
      >
        <Italic className="h-6 w-6 text-black" color="#545454" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("strike")}
        onPressedChanged={() => editor.chain().focus().toggleStrike().run()}
      >
        <Strikethrough className="h-6 w-6 text-black" color="#545454" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("list")}
        onPressedChanged={() =>
          editor.chain().focus().toggleList("bullet_list", "list_item").run()
        }
      >
        <List className="h-6 w-6 text-black" color="#545454" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("list")}
        onPressedChanged={() =>
          editor.chain().focus().toggleBulletList().run()
        }
      >
        <ListOrdered className="h-6 w-6 text-black" color="#545454" />
      </Toggle>
    </div>
  );
}

export default Toolbar;
