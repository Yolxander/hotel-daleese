'use client';

import { useEffect, useCallback } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import { cn } from '@/lib/utils';

type RichTextEditorProps = {
  value: string;
  onChange: (html: string) => void;
  placeholder?: string;
  minHeight?: string;
  className?: string;
};

function normalizeEmptyHtml(html: string): string {
  const trimmed = html.trim();
  if (!trimmed || trimmed === '<p></p>' || trimmed === '<p><br></p>') {
    return '';
  }
  return html;
}

function toEditorContent(value: string): string {
  const trimmed = (value || '').trim();
  if (!trimmed) return '';
  if (/<[a-z][\s\S]*>/i.test(trimmed)) return value;
  return trimmed
    .split(/\n\n+/)
    .filter((p) => p.trim())
    .map((p) => `<p>${p.trim().replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>`)
    .join('');
}

export function RichTextEditor({
  value,
  onChange,
  placeholder = 'Write your content here…',
  minHeight = '200px',
  className,
}: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({ placeholder }),
    ],
    content: toEditorContent(value) || '',
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class:
          'min-h-[120px] px-3 py-2 text-sm focus:outline-none [&_h2]:text-xl [&_h2]:font-semibold [&_h3]:text-lg [&_h3]:font-semibold [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:my-0.5 [&_blockquote]:border-l-4 [&_blockquote]:border-gray-300 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-gray-600',
      },
    },
    onUpdate: ({ editor }) => {
      onChange(normalizeEmptyHtml(editor.getHTML()));
    },
  });

  useEffect(() => {
    if (!editor) return;
    const currentHtml = normalizeEmptyHtml(editor.getHTML());
    const incoming = normalizeEmptyHtml(value);
    if (incoming !== currentHtml) {
      editor.commands.setContent(toEditorContent(value) || '<p></p>', { emitUpdate: false });
    }
  }, [value, editor]);

  const setBold = useCallback(() => editor?.chain().focus().toggleBold().run(), [editor]);
  const setItalic = useCallback(() => editor?.chain().focus().toggleItalic().run(), [editor]);
  const setStrike = useCallback(() => editor?.chain().focus().toggleStrike().run(), [editor]);
  const setBulletList = useCallback(() => editor?.chain().focus().toggleBulletList().run(), [editor]);
  const setOrderedList = useCallback(() => editor?.chain().focus().toggleOrderedList().run(), [editor]);
  const setHeading2 = useCallback(() => editor?.chain().focus().toggleHeading({ level: 2 }).run(), [editor]);
  const setHeading3 = useCallback(() => editor?.chain().focus().toggleHeading({ level: 3 }).run(), [editor]);
  const setBlockquote = useCallback(() => editor?.chain().focus().toggleBlockquote().run(), [editor]);

  if (!editor) {
    return (
      <div
        className={cn(
          'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm',
          className
        )}
        style={{ minHeight }}
      >
        <span className="text-muted-foreground">Loading editor…</span>
      </div>
    );
  }

  return (
    <div
      className={cn(
        'rounded-md border border-input bg-background ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2',
        className
      )}
      style={{ minHeight }}
    >
      <div className="flex flex-wrap gap-1 border-b border-input px-2 py-1.5 bg-muted/30">
        <ToolbarButton
          onClick={setBold}
          isActive={editor.isActive('bold')}
          title="Bold"
        >
          <strong>B</strong>
        </ToolbarButton>
        <ToolbarButton
          onClick={setItalic}
          isActive={editor.isActive('italic')}
          title="Italic"
        >
          <em>I</em>
        </ToolbarButton>
        <ToolbarButton
          onClick={setStrike}
          isActive={editor.isActive('strike')}
          title="Strikethrough"
        >
          <s>S</s>
        </ToolbarButton>
        <span className="w-px h-5 bg-border mx-0.5" aria-hidden />
        <ToolbarButton
          onClick={setHeading2}
          isActive={editor.isActive('heading', { level: 2 })}
          title="Heading 2"
        >
          H2
        </ToolbarButton>
        <ToolbarButton
          onClick={setHeading3}
          isActive={editor.isActive('heading', { level: 3 })}
          title="Heading 3"
        >
          H3
        </ToolbarButton>
        <span className="w-px h-5 bg-border mx-0.5" aria-hidden />
        <ToolbarButton
          onClick={setBulletList}
          isActive={editor.isActive('bulletList')}
          title="Bullet list"
        >
          •
        </ToolbarButton>
        <ToolbarButton
          onClick={setOrderedList}
          isActive={editor.isActive('orderedList')}
          title="Numbered list"
        >
          1.
        </ToolbarButton>
        <ToolbarButton
          onClick={setBlockquote}
          isActive={editor.isActive('blockquote')}
          title="Quote"
        >
          &ldquo;
        </ToolbarButton>
      </div>
      <EditorContent editor={editor} />
    </div>
  );
}

function ToolbarButton({
  onClick,
  isActive,
  title,
  children,
}: {
  onClick: () => void;
  isActive: boolean;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={title}
      className={`rounded px-2 py-1 text-sm font-medium transition-colors hover:bg-accent ${
        isActive ? 'bg-accent text-accent-foreground' : 'text-foreground'
      }`}
    >
      {children}
    </button>
  );
}
