import {
  headingsPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  MDXEditor,
  quotePlugin,
} from "@mdxeditor/editor";

const MarkdownEditor = () => {
  return (
    <MDXEditor
      markdown="## Hello, world!"
      plugins={[
        headingsPlugin(),
        listsPlugin(),
        quotePlugin(),
        markdownShortcutPlugin(),
      ]}
      contentEditableClassName="outline-none min-h-screen max-w-none text-lg px-5 py-5 caret-yellow-500 prose prose-invert prose-p:mx-3 prose-p:leading-relaxed prose-headings:my-4 prose-blockquote:py-4 prose-ul:my-2 prose-li:my-0 prose-code:px-1 prose-code:text-red-500 prose-code:before:content-[''] prose-code:after:content-['']"
    />
  );
};

export default MarkdownEditor;
