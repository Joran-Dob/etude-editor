import React, { Component } from "react";
import SplitPane from "react-split-pane";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-dart";
import "ace-builds/src-noconflict/theme-monokai";

function onChange(newValue) {
  console.log("change", newValue);
}

export default class EditorView extends Component {
  render() {
    return (
      <SplitPane split="vertical" minSize="50vw" defaultSize="50vw">
        <div className="bg-red-500 h-full">
          <AceEditor
            className="h-full"
            placeholder="Placeholder Text"
            mode="dart"
            theme="monokai"
            name="blah2"
            onChange={onChange}
            fontSize={14}
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            height="100vh"
            width="100vw"
            setOptions={{
              enableBasicAutocompletion: true,
              enableLiveAutocompletion: true,
              enableSnippets: true,
              showLineNumbers: true,
              tabSize: 2,
            }}
          />
        </div>
        <div className="bg-yellow-500 h-full"></div>
      </SplitPane>
    );
  }
}
