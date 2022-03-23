import logo from "./logo.svg";
import { useState, useEffect } from "react";
import "./App.css";
import { basicSample, testDataTemplate1 } from "./sampleData";
import AceEditor from "react-ace";
import handlebars from "handlebars/dist/handlebars.min.js";

import "ace-builds/src-noconflict/mode-handlebars";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-nord_dark";
import "ace-builds/src-noconflict/mode-text";

function App() {
  const [template, setTemplate] = useState("");
  const [sampleData, setSampleData] = useState({});
  const [renderedTemplate, setRenderedTemplate] = useState("");

  const onChange = (newValue) => {
    setTemplate(newValue);
  };

  const sampleDataOnChange = (newValue) => {
    setSampleData(newValue);
  };

  const renderTemplate = () => {
    const str = handlebars.compile(template);
    const data = sampleData;
    const rendered = str(data);
    setRenderedTemplate(rendered);
  };

  const handleTemplateChange = (e) => {
    setSampleData(JSON.parse(e.target.value));
  };

  useEffect(() => {
    setSampleData(testDataTemplate1[0].values);
  }, []);

  useEffect(() => {
    setTemplate(basicSample[0].template);
  }, []);

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
                value={template}
                editorProps={{ $blockScrolling: true }}
              />
            </td>
            <td>
              <div style={{ marginLeft: "60px" }}>
                <h3>Preview</h3>
                <div>
                  <div dangerouslySetInnerHTML={{ __html: renderedTemplate }} />
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>
      <div>
        <table>
          <tr>
            <td>
              <h3>Sample Data</h3>
              <select onChange={(e) => handleTemplateChange(e)}>
                {testDataTemplate1.map((i) => {
                  return (
                    <option
                      name={i.name}
                      id={i.id}
                      value={JSON.stringify(i.values)}
                    >
                      {i.name}
                    </option>
                  );
                })}
              </select>
              <AceEditor
                mode="javascript"
                theme="nord_dark"
                name="sampleData"
                value={JSON.stringify(sampleData, null, 4)}
                onChange={sampleDataOnChange}
                editorProps={{ $blockScrolling: true }}
              />
            </td>
          </tr>
        </table>
      </div>
      <div>
        <button
          onClick={() => {
            console.log(renderedTemplate);
            renderTemplate();
          }}
        >
          See Preview of Rendered Template
        </button>
      </div>
    </div>
  );
}

export default App;
