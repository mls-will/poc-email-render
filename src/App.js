import { useState, useEffect } from "react";
import "./App.css";
import { basicSample, testDataTemplate1, testEvents } from "./sampleData";
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
  const [events, setEvents] = useState([]);
  const [event, setEvent] = useState({});

  const onChange = (newValue) => {
    console.log("typeof in onChange", typeof newValue);
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

  const handleSampleDataChange = (e) => {
    setSampleData(JSON.parse(e.target.value));
  };

  const handleTemplateChange = (e) => {
    console.log("change handler: ", JSON.stringify(e.target.value));
    setEvent(e.target.value);
  };

  const handleEventChange = (e) => {
    setEvent(e.target.value);
  };

  useEffect(() => {
    setSampleData(testDataTemplate1[0].values);
  }, []);

  useEffect(() => {
    setTemplate(basicSample[0].template);
    setEvents(testEvents);
  }, []);

  useEffect(() => {
    console.log("typeof events: ", typeof events);
    console.log("events:");
    console.log(events);
  }, [events]);

  useEffect(() => {
    console.log("event: ", event);
    console.log("typeof event: ", typeof event);
    if (isValidJsonString(event)) {
      console.log("valid:");
      console.log(JSON.parse(event));
    }
  }, [event]);

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
              <h3>Event</h3>
              <select onChange={(e) => handleEventChange(e)}>
                {events.map((i) => {
                  return (
                    <option
                      name={i.name}
                      id={i.eventId}
                      value={JSON.stringify(i)}
                    >
                      {i.name}
                    </option>
                  );
                })}
              </select>
              <h3>Template</h3>
              <select onChange={(e) => handleTemplateChange(e)}>
                {events.map((i) => {
                  console.log(i);
                  return (
                    <option
                      name={i.name}
                      id={i.eventId}
                      value={JSON.stringify(i)}
                    ></option>
                  );
                })}
              </select>
              <AceEditor
                mode="handlebars"
                theme="nord_dark"
                onChange={onChange}
                name="template"
                value={event}
                editorProps={{ $blockScrolling: true }}
                height="300px"
                wrapEnabled={true}
                enableBasicAutocompletion={true}
                setOptions={{
                  useWorker: false,
                }}
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
              <select onChange={(e) => handleSampleDataChange(e)}>
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
