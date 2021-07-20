/* eslint-disable import/no-extraneous-dependencies */

import React, { useRef, useState } from "react";
import Blockly from "blockly";
import * as Vi from 'blockly/msg/vi';

import { BlocklyWorkspace } from "./index-workspace";
import ConfigFiles from "./initContent/content";

import Button from 'react-bootstrap/Button';
import Interpreter from 'js-interpreter';
import { Spinner } from 'react-bootstrap'



const App = () => {
  const [toolboxConfiguration, setToolboxConfiguration] = React.useState(
    ConfigFiles.INITIAL_TOOLBOX_JSON
  );
  const btnRunRef = useRef()
  const [xmlInject, setXmlInject] = useState()
  const [run, setRun] = useState(false)
  const [workspace, setWorkspace] = useState()
  const [uartFeedback, setUartFeedback] = useState(false)


  /**
   * 
   * INIT API FOR CUSTOM FUNCTION
   * 
   */
  Blockly.setLocale(Vi)
  Blockly.JavaScript.STATEMENT_PREFIX = 'highlightBlock(%1);\n';

  Blockly.JavaScript.INFINITE_LOOP_TRAP = 'if(--LoopTrap == 0) { window.alert("Bạn đã đạt số vòng lặp tối đa (100 loops)"); \n throw "Infinite loop."};\n';

  function initApi(interpreter, globalObject) {
    Blockly.JavaScript.addReservedWords('alert');
    Blockly.JavaScript.addReservedWords('log');
    Blockly.JavaScript.addReservedWords('prompt');
    Blockly.JavaScript.addReservedWords('highlightBlock');
    Blockly.JavaScript.addReservedWords('waitForSeconds');
    Blockly.JavaScript.addReservedWords('resetHighLight');
    Blockly.JavaScript.addReservedWords('thang');
    Blockly.JavaScript.addReservedWords('trai');
    Blockly.JavaScript.addReservedWords('phai');
    Blockly.JavaScript.addReservedWords('print');

    var wrapper = function (text) {
      return alert(arguments.length ? text : '');
    };
    interpreter.setProperty(globalObject, 'alert',
      interpreter.createNativeFunction(wrapper));


    wrapper = function (text) {
      return console.log(arguments.length ? text : '');
    };
    interpreter.setProperty(globalObject, 'log',
      interpreter.createNativeFunction(wrapper));

    wrapper = function (text) {
      return prompt(text);
    };
    interpreter.setProperty(globalObject, 'prompt',
      interpreter.createNativeFunction(wrapper));

    wrapper = function (id) {
      setUartFeedback(false)
      return workspace.highlightBlock(id);
    };
    interpreter.setProperty(globalObject, 'highlightBlock',
      interpreter.createNativeFunction(wrapper));

    wrapper = function () {
      setRun(false)
      return workspace.highlightBlock("null");
    };
    interpreter.setProperty(globalObject, 'resetHighlight',
      interpreter.createNativeFunction(wrapper));

    wrapper = interpreter.createAsyncFunction(
      function (timeInSeconds, callback) {
        // Delay the call to the callback.
        setTimeout(callback, timeInSeconds);
      });
    interpreter.setProperty(globalObject, 'waitForSeconds', wrapper);

    /**
     * Bo chuyen dong
     */

    wrapper = function (num) {
      try {
        window.ReactNativeWebView.postMessage(
          JSON.stringify({
            REQUEST: 'UART',
            DATA: 'f:' + num,
          })
        )
      }
      catch (error) {
        alert(error)
      }
    };
    interpreter.setProperty(globalObject, 'thang',
      interpreter.createNativeFunction(wrapper));

    wrapper = function (num) {
      try {
        window.ReactNativeWebView.postMessage(
          JSON.stringify({
            REQUEST: 'UART',
            DATA: 'l:' + num,
          })
        )
      }
      catch (error) {
        alert(error)
      }
    };
    interpreter.setProperty(globalObject, 'trai',
      interpreter.createNativeFunction(wrapper));

    wrapper = function (num) {
      try {
        window.ReactNativeWebView.postMessage(
          JSON.stringify({
            REQUEST: 'UART',
            DATA: 'r:' + num,
          })
        )
      }
      catch (error) {
        alert(error)
      }
    };
    interpreter.setProperty(globalObject, 'phai',
      interpreter.createNativeFunction(wrapper));
    
    
    wrapper = function (text) {
      console.log('in:' + text)
      try {
        window.ReactNativeWebView.postMessage(
          JSON.stringify({
            REQUEST: 'UART',
            DATA: 'in:' + text,
          })
        )
      }
      catch (error) {
        alert(error)
      }
    };
    interpreter.setProperty(globalObject, 'print',
      interpreter.createNativeFunction(wrapper));

  }


  /**
   * Inject custion features when component loaded
   */


  React.useEffect(() => {

    if (!localStorage.getItem('initxml')) {
      try {
        window.ReactNativeWebView.postMessage("xml default...")
      } catch (e) { alert("Chưa kết nối với thiết bị webview") }
      setXmlInject(ConfigFiles.INITIAL_XML)
    } else {
      try {
        window.ReactNativeWebView.postMessage("xml injected!")
      } catch (e) { alert("Chưa kết nối với thiết bị webview") }
      var CryptoJS = require("crypto-js");
      var bytes = CryptoJS.AES.decrypt(localStorage.getItem('initxml'), 'thanhdanh');
      var originalText = bytes.toString(CryptoJS.enc.Utf8);
      setXmlInject(originalText)
    }

    //CUSTOM GIU THANG
    const thang = {
      "type": "thang",
      "message0": "Giữ thẳng %1 %2 mm",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "field_number",
          "name": "THANG",
          "value": 0,
          "precision": 1
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 75,
      "tooltip": "Giữ đai sắt thẳng với trong ... giây, độ chính xác milimét",
      "helpUrl": ""
    }
    Blockly.Blocks['thang'] = {
      init: function () {
        this.jsonInit(thang);
        // Assign 'this' to a variable for use in the tooltip closure below.
      }
    };

    Blockly.JavaScript['thang'] = function (block) {
      var number_thang = block.getFieldValue('THANG');
      // TODO: Assemble JavaScript into code variable.
      var code = 'thang(' + number_thang + ')\n';
      return code;
    };


    //CUSTOM UON TRAI
    const trai = {
      "type": "trai",
      "message0": "Uốn trái %1 %2 độ",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "field_number",
          "name": "TRAI",
          "value": 0,
          "precision": 1
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 0,
      "tooltip": "Uốn trái đai sắt trong ... giây, độ chính xác 1 độ",
      "helpUrl": ""
    }
    Blockly.Blocks['trai'] = {
      init: function () {
        this.jsonInit(trai);
        // Assign 'this' to a variable for use in the tooltip closure below.
      }
    };

    Blockly.JavaScript['trai'] = function (block) {
      var number_trai = block.getFieldValue('TRAI');
      // TODO: Assemble JavaScript into code variable.
      var code = 'trai(' + number_trai + ')\n';
      return code;
    };


    //CUSTOM UON PHAI
    const phai = {
      "type": "phai",
      "message0": "Uốn phải %1 %2 độ",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "field_number",
          "name": "PHAI",
          "value": 0,
          "precision": 1
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 0,
      "tooltip": "Uốn phải đai sắt trong ... giây, độ chính xác 1 độ",
      "helpUrl": ""
    }
    Blockly.Blocks['phai'] = {
      init: function () {
        this.jsonInit(phai);
        // Assign 'this' to a variable for use in the tooltip closure below.
      }
    };

    Blockly.JavaScript['phai'] = function (block) {
      var number_trai = block.getFieldValue('PHAI');
      // TODO: Assemble JavaScript into code variable.
      var code = 'phai(' + number_trai + ')\n';
      return code;
    };


  }, []);

  //CUSTOM DOI

  const doi = {
    "type": "doi",
    "message0": "đợi %1 mili-giây",
    "args0": [{
      type: "field_number",
      name: "MILISECONDS",
      min: 0,
      max: 600000,
      value: 1
    }],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 120,
    "tooltip": "Dừng hoạt động trong ... mili-giây, tối đa 10 phút (60 *10 * 1000)",
    "helpUrl": ""
  }
  Blockly.Blocks['doi'] = {
    init: function () {
      this.jsonInit(doi);
      // Assign 'this' to a variable for use in the tooltip closure below.
    }
  };

  Blockly.JavaScript['doi'] = function (block) {
    var seconds = Number(block.getFieldValue('MILISECONDS'));
    var code = 'waitForSeconds(' + seconds + ');\n';
    return code;
  };

  //CUSTOM MAN HINH
  const manhinh = {
    "type": "manhinh",
    "message0": "In lên màn hình thiết bị chữ %1",
    "args0": [{
      type: "field_input",
      name: "MANHINH",
      text: "Danh"
    }],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 90,
    "tooltip": "In lên màn hình thiết bị chữ ...",
    "helpUrl": ""
  }
  Blockly.Blocks['manhinh'] = {
    init: function () {
      this.jsonInit(manhinh);
      // Assign 'this' to a variable for use in the tooltip closure below.
    }
  };

  Blockly.JavaScript['manhinh'] = function (block) {
    var text = block.getFieldValue('MANHINH');
    var code = 'print("' + text + '");\n';
    return code;
  };


  const onWorkspaceChange = React.useCallback((workspace) => {


    workspace.registerButtonCallback("saveFile", () => {
      try {
        var CryptoJS = require("crypto-js");
        var ciphertext = CryptoJS.AES.encrypt(document.getElementById('debug-div').innerText, 'thanhdanh').toString();
        // console.log({ SAVE: ciphertext })

        window.ReactNativeWebView.postMessage(
          JSON.stringify({
            REQUEST: "SAVE",
            DATA: ciphertext,
            OK: true,
          })
        )
      }
      catch (error) {
        alert("Chưa kết nối với thiết bị webview")
      }
      // alert("Chương trình đã được lưu");
    });
    setWorkspace(workspace)
  }, []);

  const onXmlChange = React.useCallback((newXml) => {
    document.getElementById('debug-div').innerText = newXml;
  }, []);

  const handleView = (e) => {
    let element = document.getElementsByClassName("blocklyToolboxDiv")[0];
    if (element.style.opacity === '0') {

      element.style.opacity = '1';
      setTimeout(() => {
        element.style.display = 'block';
        window.dispatchEvent(new Event('resize'));
      }, 300)
    }
    else {
      element.style.opacity = '0'
      setTimeout(() => {
        element.style.display = 'none';
        window.dispatchEvent(new Event('resize'));
      }, 300)
    }
  }

  const handleRun = (e) => {
    if (run) {
      setRun(false);
      document.getElementById('isRunNow').innerText = '';
      workspace.highlightBlock("null");
      return;
    }
    else {
      document.getElementById('isRunNow').innerText = 'run';
      setRun(true)
    }
    let code = Blockly.JavaScript.workspaceToCode(workspace);
    code = 'var LoopTrap = 100; \n' + code + '\n resetHighlight(); \n';
    console.log(code)
    var myInterpreter = new Interpreter(code, initApi);
    function nextStep() {
      if (myInterpreter.step()) {

        if (document.getElementById('isRunNow').innerText) window.setTimeout(nextStep, 0);
      }
    }
    nextStep();
  }

  return (
    <>
      <div id="isRunNow" style={{ display: 'none'}}>
        
      </div>
      {xmlInject && <div>

        <div className="btn-wrapper-view">
          <Button onClick={handleView} variant="outline-warning material-icons dodgerblue i-large" className="btn-circle">unfold_more</Button>
        </div>
        <div className="btn-wrapper">
          <Button ref={btnRunRef} disabled={false} onClick={handleRun} variant="outline-warning" className="btn-circle material-icons dodgerblue i-large">{run ? "more_horiz" : "flag"}</Button>
        </div>
        <div className="btn-wrapper-uart">
          <Button onClick={() => {
            try {
              window.ReactNativeWebView.postMessage(
                JSON.stringify({
                  REQUEST: "CHECK",
                })
              )
            }
            catch (error) {
              alert("Chưa kết nối với thiết bị webview")
            }
          }} variant="outline-warning" className="btn-circle material-icons dodgerblue i-large">usb</Button>
        </div>
      </div>}

      <div style={{ display: 'none' }} id='debug-div'>

      </div>
      {xmlInject && <BlocklyWorkspace
        toolboxConfiguration={toolboxConfiguration}
        workspaceConfiguration={{
          zoom: {
            controls: true,
            startScale: 1.0,
            maxScale: 2,
            minScale: 0.2,
            scaleSpeed: 1.2,
            pinch: true
          },
          horizontalLayout: true,
          toolboxPosition: 'end',

        }}
        initialXml={xmlInject}
        className="fill-height"
        onWorkspaceChange={onWorkspaceChange}
        onXmlChange={onXmlChange}
        onImportXmlError={() => alert("Không thể mở chương trình.")}
      />
      }
      {!xmlInject &&
        <div className="spin-container">
          <Spinner animation="border" variant="warning" />

          <div style={{ fontSize: 'large' }}>Đang tải...</div>
        </div>}


    </>
  );
};

export default App;
