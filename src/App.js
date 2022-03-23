import { useState, useEffect } from "react";
import "./App.css";
import { basicSample, testDataTemplate1 } from "./sampleData";
import AceEditor from "react-ace";
import handlebars from "handlebars/dist/handlebars.min.js";

import "ace-builds/src-noconflict/mode-handlebars";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-json";
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
    if (isValidJsonString(newValue)) {
      const json = JSON.parse(newValue);
      setSampleData(json);
    }
  };

  const renderTemplate = () => {
    const str = handlebars.compile(template);
    const rendered = str(sampleData);
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

  const isValidJsonString = (str) => {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  };

  return (
    <div className="App">
      <h1>POC for rendering and editing email templates</h1>
      <br></br>
      <div style={{ alignItems: "center", marginLeft: "10%" }}>
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
                height="300px"
                wrapEnabled={true}
                enableBasicAutocompletion={true}
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
            <td>
              <button
                onClick={() => renderTemplate()}
                style={{ marginLeft: "200px" }}
              >
                See Preview of Rendered Template
              </button>
            </td>
          </tr>
        </table>
      </div>
      <div style={{ marginLeft: "10%" }}>
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
                mode="json"
                theme="nord_dark"
                name="sampleData"
                value={JSON.stringify(sampleData, null, 4)}
                onChange={sampleDataOnChange}
                editorProps={{ $blockScrolling: true }}
                height="300px"
                setOptions={{
                  useWorker: false,
                }}
              />
            </td>
          </tr>
        </table>
      </div>
      <div></div>
    </div>
  );
}

export default App;
