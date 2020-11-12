import React from "react";
import dynamic from 'next/dynamic'
const EditorView = dynamic(import("../../components/editor/editor_view"), {
  ssr: false,
});

function index() {
  return (
    <div>
      <EditorView></EditorView>
    </div>
  );
}

export default index;
