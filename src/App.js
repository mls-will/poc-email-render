import logo from "./logo.svg";
import { useState, useEffect } from "react";
import "./App.css";
import AceEditor from "react-ace";
import handlebars from "handlebars/dist/handlebars.min.js";

import "ace-builds/src-noconflict/mode-handlebars";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-nord_dark";

function App() {
  const [template, setTemplate] = useState("");
  const [sampleData, setSampleData] = useState({});
  const [renderedTemplate, setRenderedTemplate] = useState("");

  function onChange(newValue) {
    setTemplate(newValue);
  }

  const sampleDataOnChange = (newValue) => {
    setSampleData(newValue);
  };

  const renderTemplate = () => {
    const str = handlebars.compile(template);
    const data = JSON.parse(sampleData);
    const rendered = str(data);
    console.log(rendered);
    console.log("clicked");
    setRenderedTemplate(rendered);
  };

  useEffect(() => {
    console.log("sample Data: ", sampleData);
    console.log(typeof sampleData);
    //const jsontry = JSON.parse(sampleData);
    //console.log("as Json: ", jsontry);
  }, [sampleData]);

  useEffect(() => {
    console.log(template);
    console.log(typeof template);
  }, [template]);

  return (
    <div className="App">
      <h1>POC for rendering and editing email templates</h1>
      <br></br>
      <div>
        <table>
          <tr>
            <td>
              <h3>Template</h3>
              <AceEditor
                mode="handlebars"
                theme="nord_dark"
                onChange={onChange}
                name="template"
                editorProps={{ $blockScrolling: true }}
              />
            </td>
            <td>
              <h3>Rendered</h3>
              <AceEditor
                mode="html"
                theme="nord_dark"
                name="rendered"
                value={renderedTemplate}
                editorProps={{ $blockScrolling: true }}
              />
            </td>
          </tr>
        </table>
      </div>
      <div>
        <table>
          <tr>
            <td>
              <h3>Sample Data</h3>
              <AceEditor
                mode="javascript"
                theme="nord_dark"
                name="sampleData"
                onChange={sampleDataOnChange}
                editorProps={{ $blockScrolling: true }}
              />
            </td>
          </tr>
        </table>
      </div>
      <div>
        <button onClick={() => renderTemplate()}>Do This</button>
      </div>
    </div>
  );
}

export default App;
