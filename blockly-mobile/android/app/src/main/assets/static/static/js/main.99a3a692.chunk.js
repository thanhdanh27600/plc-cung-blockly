(this["webpackJsonpblockly-react-sample"]=this["webpackJsonpblockly-react-sample"]||[]).push([[0],{21:function(e,n,t){},33:function(e,n,t){"use strict";t.r(n);var l=t(0),a=t.n(l),o=t(13),i=t.n(o),c=(t(21),t(3)),d=t(2),m=t(1),r=t.n(m),u=t(14),s=t(12);var b=t(15);var f=function(e){var n=e.ref,t=e.initialXml,l=e.toolboxConfiguration,o=e.workspaceConfiguration,i=e.onWorkspaceChange,d=e.onImportXmlError,m=e.onInject,u=e.onDispose,f=a.a.useState(null),k=Object(c.a)(f,2),p=k[0],h=k[1],y=a.a.useState(t),v=Object(c.a)(y,2),_=v[0],T=v[1],E=a.a.useState(!1),w=Object(c.a)(E,2),g=w[0],x=w[1],O=a.a.useState(!1),R=Object(c.a)(O,2),N=R[0],A=R[1],S=a.a.useRef(o);a.a.useEffect((function(){S.current=o}),[o]);var I=a.a.useRef(l);a.a.useEffect((function(){I.current=l,l&&p&&p.updateToolbox(l)}),[l,p]);var M=a.a.useRef(m),U=a.a.useRef(u);a.a.useEffect((function(){M.current=m}),[m]),a.a.useEffect((function(){U.current=u}),[u]);var L=a.a.useCallback((function(e){i&&i(e)}),[i]);return a.a.useEffect((function(){var e=r.a.inject(n.current,Object(s.a)(Object(s.a)({},S.current),{},{toolbox:I.current,theme:b.a}));r.a.Flyout.prototype.MARGIN=20,h(e),x(!1),A(!1),M.current&&M.current(e);var t=U.current;return function(){e.dispose(),t&&t(e)}}),[n]),a.a.useEffect((function(){p&&!N&&L(p)}),[L,N,p]),a.a.useEffect((function(){if(null!=p){var e=function(){L(p)};return p.addChangeListener(e),function(){p.removeChangeListener(e)}}}),[p,L]),a.a.useEffect((function(){if(null!=p){var e=function(e,n){var t=null,l=null;return[function(){for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];l=function(){t=null,e.apply(void 0,o)},clearTimeout(t),t=setTimeout(l,n)},function(){null!==t&&(clearTimeout(t),l())}]}((function(){var e=r.a.Xml.domToText(r.a.Xml.workspaceToDom(p));e!==_&&T(e)}),200),n=Object(c.a)(e,2),t=n[0],l=n[1];return p.addChangeListener(t),function(){p.removeChangeListener(t),l()}}}),[p,_]),a.a.useEffect((function(){_&&p&&!g&&(function(e,n,t){try{return r.a.Xml.domToWorkspace(r.a.Xml.textToDom(e),n),!0}catch(l){return t&&t(l),!1}}(_,p,d)||T(null),x(!0))}),[_,p,g,d]),{workspace:p,xml:_}};function k(e){var n=e.initialXml,t=e.toolboxConfiguration,l=e.workspaceConfiguration,o=e.className,i=e.onWorkspaceChange,c=e.onXmlChange,m=e.onImportXmlError,r=e.onInject,u=e.onDispose,s=a.a.useRef(null),b=f({ref:s,initialXml:n,toolboxConfiguration:t,workspaceConfiguration:l,onWorkspaceChange:i,onImportXmlError:m,onInject:r,onDispose:u}).xml,k=a.a.useRef(c);return a.a.useEffect((function(){k.current=c}),[c]),a.a.useEffect((function(){k.current&&b&&k.current(b)}),[b]),Object(d.jsx)("div",{className:o,ref:s})}k.defaultProps={initialXml:null,toolboxConfiguration:null,workspaceConfiguration:null,className:null,onWorkspaceChange:null,onImportXmlError:null,onXmlChange:null,onInject:null,onDispose:null};var p=k,h={INITIAL_XML:'<xml xmlns="https://developers.google.com/blockly/xml"><block type="text_print" id="/.o;xPY6dEFHu6(|-Ny-" x="248" y="79"><value name="TEXT"><shadow type="text" id="At$Jca1#A-%cmtwX^lF("><field name="TEXT">Hello</field></shadow></value></block></xml>',INITIAL_TOOLBOX_XML:'<xml xmlns="http://www.w3.org/1999/xhtml" id="toolbox" style="display: none;">\n  <category name="Logic" colour="#5C81A6">\n    <block type="controls_if"></block>\n    <block type="logic_compare">\n      <field name="OP">EQ</field>\n    </block>\n    <block type="logic_operation">\n      <field name="OP">AND</field>\n    </block>\n    <block type="logic_negate"></block>\n    <block type="logic_boolean">\n      <field name="BOOL">TRUE</field>\n    </block>\n    <block type="logic_null"></block>\n    <block type="logic_ternary"></block>\n  </category>\n  <category name="Loops" colour="#5CA65C">\n    <block type="controls_repeat_ext">\n      <value name="TIMES">\n        <shadow type="math_number">\n          <field name="NUM">10</field>\n        </shadow>\n      </value>\n    </block>\n    <block type="controls_whileUntil">\n      <field name="MODE">WHILE</field>\n    </block>\n    <block type="controls_for">\n      <field name="VAR" id="C(8;cYCF}~vSgkxzJ+{O" variabletype="">i</field>\n      <value name="FROM">\n        <shadow type="math_number">\n          <field name="NUM">1</field>\n        </shadow>\n      </value>\n      <value name="TO">\n        <shadow type="math_number">\n          <field name="NUM">10</field>\n        </shadow>\n      </value>\n      <value name="BY">\n        <shadow type="math_number">\n          <field name="NUM">1</field>\n        </shadow>\n      </value>\n    </block>\n    <block type="controls_forEach">\n      <field name="VAR" id="Cg!CSk/ZJo2XQN3=VVrz" variabletype="">j</field>\n    </block>\n    <block type="controls_flow_statements">\n      <field name="FLOW">BREAK</field>\n    </block>\n  </category>\n  <category name="Math" colour="#5C68A6">\n    <block type="math_round">\n      <field name="OP">ROUND</field>\n      <value name="NUM">\n        <shadow type="math_number">\n          <field name="NUM">3.1</field>\n        </shadow>\n      </value>\n    </block>\n    <block type="math_number">\n      <field name="NUM">0</field>\n    </block>\n    <block type="math_single">\n      <field name="OP">ROOT</field>\n      <value name="NUM">\n        <shadow type="math_number">\n          <field name="NUM">9</field>\n        </shadow>\n      </value>\n    </block>\n    <block type="math_trig">\n      <field name="OP">SIN</field>\n      <value name="NUM">\n        <shadow type="math_number">\n          <field name="NUM">45</field>\n        </shadow>\n      </value>\n    </block>\n    <block type="math_constant">\n      <field name="CONSTANT">PI</field>\n    </block>\n    <block type="math_number_property">\n      <mutation divisor_input="false"></mutation>\n      <field name="PROPERTY">EVEN</field>\n      <value name="NUMBER_TO_CHECK">\n        <shadow type="math_number">\n          <field name="NUM">0</field>\n        </shadow>\n      </value>\n    </block>\n    <block type="math_arithmetic">\n      <field name="OP">ADD</field>\n      <value name="A">\n        <shadow type="math_number">\n          <field name="NUM">1</field>\n        </shadow>\n      </value>\n      <value name="B">\n        <shadow type="math_number">\n          <field name="NUM">1</field>\n        </shadow>\n      </value>\n    </block>\n    <block type="math_on_list">\n      <mutation op="SUM"></mutation>\n      <field name="OP">SUM</field>\n    </block>\n    <block type="math_modulo">\n      <value name="DIVIDEND">\n        <shadow type="math_number">\n          <field name="NUM">64</field>\n        </shadow>\n      </value>\n      <value name="DIVISOR">\n        <shadow type="math_number">\n          <field name="NUM">10</field>\n        </shadow>\n      </value>\n    </block>\n    <block type="math_constrain">\n      <value name="VALUE">\n        <shadow type="math_number">\n          <field name="NUM">50</field>\n        </shadow>\n      </value>\n      <value name="LOW">\n        <shadow type="math_number">\n          <field name="NUM">1</field>\n        </shadow>\n      </value>\n      <value name="HIGH">\n        <shadow type="math_number">\n          <field name="NUM">100</field>\n        </shadow>\n      </value>\n    </block>\n    <block type="math_random_int">\n      <value name="FROM">\n        <shadow type="math_number">\n          <field name="NUM">1</field>\n        </shadow>\n      </value>\n      <value name="TO">\n        <shadow type="math_number">\n          <field name="NUM">100</field>\n        </shadow>\n      </value>\n    </block>\n    <block type="math_random_float"></block>\n  </category>\n  <category name="Text" colour="#5CA68D">\n    <block type="text_charAt">\n      <mutation at="true"></mutation>\n      <field name="WHERE">FROM_START</field>\n      <value name="VALUE">\n        <block type="variables_get">\n          <field name="VAR" id="q@$ZF(L?Zo/z`d{o.Bp!" variabletype="">text</field>\n        </block>\n      </value>\n    </block>\n    <block type="text">\n      <field name="TEXT"></field>\n    </block>\n    <block type="text_append">\n      <field name="VAR" id=":};P,s[*|I8+L^-.EbRi" variabletype="">item</field>\n      <value name="TEXT">\n        <shadow type="text">\n          <field name="TEXT"></field>\n        </shadow>\n      </value>\n    </block>\n    <block type="text_length">\n      <value name="VALUE">\n        <shadow type="text">\n          <field name="TEXT">abc</field>\n        </shadow>\n      </value>\n    </block>\n    <block type="text_isEmpty">\n      <value name="VALUE">\n        <shadow type="text">\n          <field name="TEXT"></field>\n        </shadow>\n      </value>\n    </block>\n    <block type="text_indexOf">\n      <field name="END">FIRST</field>\n      <value name="VALUE">\n        <block type="variables_get">\n          <field name="VAR" id="q@$ZF(L?Zo/z`d{o.Bp!" variabletype="">text</field>\n        </block>\n      </value>\n      <value name="FIND">\n        <shadow type="text">\n          <field name="TEXT">abc</field>\n        </shadow>\n      </value>\n    </block>\n    <block type="text_join">\n      <mutation items="2"></mutation>\n    </block>\n    <block type="text_getSubstring">\n      <mutation at1="true" at2="true"></mutation>\n      <field name="WHERE1">FROM_START</field>\n      <field name="WHERE2">FROM_START</field>\n      <value name="STRING">\n        <block type="variables_get">\n          <field name="VAR" id="q@$ZF(L?Zo/z`d{o.Bp!" variabletype="">text</field>\n        </block>\n      </value>\n    </block>\n    <block type="text_changeCase">\n      <field name="CASE">UPPERCASE</field>\n      <value name="TEXT">\n        <shadow type="text">\n          <field name="TEXT">abc</field>\n        </shadow>\n      </value>\n    </block>\n    <block type="text_trim">\n      <field name="MODE">BOTH</field>\n      <value name="TEXT">\n        <shadow type="text">\n          <field name="TEXT">abc</field>\n        </shadow>\n      </value>\n    </block>\n    <block type="text_print">\n      <value name="TEXT">\n        <shadow type="text">\n          <field name="TEXT">abc</field>\n        </shadow>\n      </value>\n    </block>\n    <block type="text_prompt_ext">\n      <mutation type="TEXT"></mutation>\n      <field name="TYPE">TEXT</field>\n      <value name="TEXT">\n        <shadow type="text">\n          <field name="TEXT">abc</field>\n        </shadow>\n      </value>\n    </block>\n  </category>\n  <category name="Lists" colour="#745CA6">\n    <block type="lists_indexOf">\n      <field name="END">FIRST</field>\n      <value name="VALUE">\n        <block type="variables_get">\n          <field name="VAR" id="e`(L;x,.j[[XN`F33Q5." variabletype="">list</field>\n        </block>\n      </value>\n    </block>\n    <block type="lists_create_with">\n      <mutation items="0"></mutation>\n    </block>\n    <block type="lists_repeat">\n      <value name="NUM">\n        <shadow type="math_number">\n          <field name="NUM">5</field>\n        </shadow>\n      </value>\n    </block>\n    <block type="lists_length"></block>\n    <block type="lists_isEmpty"></block>\n    <block type="lists_create_with">\n      <mutation items="3"></mutation>\n    </block>\n    <block type="lists_getIndex">\n      <mutation statement="false" at="true"></mutation>\n      <field name="MODE">GET</field>\n      <field name="WHERE">FROM_START</field>\n      <value name="VALUE">\n        <block type="variables_get">\n          <field name="VAR" id="e`(L;x,.j[[XN`F33Q5." variabletype="">list</field>\n        </block>\n      </value>\n    </block>\n    <block type="lists_setIndex">\n      <mutation at="true"></mutation>\n      <field name="MODE">SET</field>\n      <field name="WHERE">FROM_START</field>\n      <value name="LIST">\n        <block type="variables_get">\n          <field name="VAR" id="e`(L;x,.j[[XN`F33Q5." variabletype="">list</field>\n        </block>\n      </value>\n    </block>\n    <block type="lists_getSublist">\n      <mutation at1="true" at2="true"></mutation>\n      <field name="WHERE1">FROM_START</field>\n      <field name="WHERE2">FROM_START</field>\n      <value name="LIST">\n        <block type="variables_get">\n          <field name="VAR" id="e`(L;x,.j[[XN`F33Q5." variabletype="">list</field>\n        </block>\n      </value>\n    </block>\n    <block type="lists_split">\n      <mutation mode="SPLIT"></mutation>\n      <field name="MODE">SPLIT</field>\n      <value name="DELIM">\n        <shadow type="text">\n          <field name="TEXT">,</field>\n        </shadow>\n      </value>\n    </block>\n    <block type="lists_sort">\n      <field name="TYPE">NUMERIC</field>\n      <field name="DIRECTION">1</field>\n    </block>\n  </category>\n  <category name="Colour" colour="#A6745C">\n    <block type="colour_picker">\n      <field name="COLOUR">#ff0000</field>\n    </block>\n    <block type="colour_random"></block>\n    <block type="colour_rgb">\n      <value name="RED">\n        <shadow type="math_number">\n          <field name="NUM">100</field>\n        </shadow>\n      </value>\n      <value name="GREEN">\n        <shadow type="math_number">\n          <field name="NUM">50</field>\n        </shadow>\n      </value>\n      <value name="BLUE">\n        <shadow type="math_number">\n          <field name="NUM">0</field>\n        </shadow>\n      </value>\n    </block>\n    <block type="colour_blend">\n      <value name="COLOUR1">\n        <shadow type="colour_picker">\n          <field name="COLOUR">#ff0000</field>\n        </shadow>\n      </value>\n      <value name="COLOUR2">\n        <shadow type="colour_picker">\n          <field name="COLOUR">#3333ff</field>\n        </shadow>\n      </value>\n      <value name="RATIO">\n        <shadow type="math_number">\n          <field name="NUM">0.5</field>\n        </shadow>\n      </value>\n    </block>\n  </category>\n  <sep></sep>\n  <category name="Custom Button" colour="#A6745C">\n    <button text="A button" callbackKey="myFirstButtonPressed"></button>\n  </category>\n  <category name="Variables" colour="#A65C81" custom="VARIABLE"></category>\n  <category name="Functions" colour="#9A5CA6" custom="PROCEDURE"></category>\n</xml>',INITIAL_TOOLBOX_JSON:{kind:"categoryToolbox",contents:[{kind:"category",name:"Qu\u1ea3n l\xfd t\u1ec7p",colour:160,contents:[{kind:"button",text:"L\u01b0u ch\u01b0\u01a1ng tr\xecnh",callbackKey:"saveFile"}]},{kind:"sep"},{kind:"category",name:"Logic",colour:210,contents:[{kind:"block",type:"controls_if"},{kind:"block",blockxml:'<block type="logic_compare"><field name="OP">EQ</field></block>'},{kind:"block",blockxml:'<block type="logic_operation"><field name="OP">AND</field></block>'},{kind:"block",type:"logic_negate"},{kind:"block",blockxml:'<block type="logic_boolean"><field name="BOOL">TRUE</field></block>'},{kind:"block",type:"logic_null"},{kind:"block",type:"logic_ternary"}]},{kind:"category",name:"V\xf2ng l\u1eb7p",colour:120,contents:[{kind:"block",blockxml:'<block type="controls_repeat_ext">\n      <value name="TIMES">\n        <shadow type="math_number">\n          <field name="NUM">10</field>\n        </shadow>\n      </value>\n    </block>'},{kind:"block",blockxml:'    <block type="controls_whileUntil">\n      <field name="MODE">WHILE</field>\n    </block>'},{kind:"block",blockxml:'    <block type="controls_for">\n      <field name="VAR" id="C(8;cYCF}~vSgkxzJ+{O" variabletype="">i</field>\n      <value name="FROM">\n        <shadow type="math_number">\n          <field name="NUM">1</field>\n        </shadow>\n      </value>\n      <value name="TO">\n        <shadow type="math_number">\n          <field name="NUM">10</field>\n        </shadow>\n      </value>\n      <value name="BY">\n        <shadow type="math_number">\n          <field name="NUM">1</field>\n        </shadow>\n      </value>\n    </block>\n'},{kind:"block",blockxml:'    <block type="controls_forEach">\n      <field name="VAR" id="Cg!CSk/ZJo2XQN3=VVrz" variabletype="">j</field>\n    </block>\n'},{kind:"block",blockxml:'    <block type="controls_flow_statements">\n      <field name="FLOW">BREAK</field>\n    </block>\n'}]},{kind:"category",name:"Ph\xe9p to\xe1n",colour:230,contents:[{kind:"block",blockxml:'    <block type="math_round">\n      <field name="OP">ROUND</field>\n      <value name="NUM">\n        <shadow type="math_number">\n          <field name="NUM">3.1</field>\n        </shadow>\n      </value>\n    </block>\n'},{kind:"block",blockxml:'    <block type="math_number">\n      <field name="NUM">0</field>\n    </block>\n'},{kind:"block",blockxml:'    <block type="math_single">\n      <field name="OP">ROOT</field>\n      <value name="NUM">\n        <shadow type="math_number">\n          <field name="NUM">9</field>\n        </shadow>\n      </value>\n    </block>\n'},{kind:"block",blockxml:'    <block type="math_trig">\n      <field name="OP">SIN</field>\n      <value name="NUM">\n        <shadow type="math_number">\n          <field name="NUM">45</field>\n        </shadow>\n      </value>\n    </block>\n'},{kind:"block",blockxml:'    <block type="math_constant">\n      <field name="CONSTANT">PI</field>\n    </block>\n'},{kind:"block",blockxml:'    <block type="math_number_property">\n      <mutation divisor_input="false"></mutation>\n      <field name="PROPERTY">EVEN</field>\n      <value name="NUMBER_TO_CHECK">\n        <shadow type="math_number">\n          <field name="NUM">0</field>\n        </shadow>\n      </value>\n    </block>\n'},{kind:"block",blockxml:'    <block type="math_arithmetic">\n      <field name="OP">ADD</field>\n      <value name="A">\n        <shadow type="math_number">\n          <field name="NUM">1</field>\n        </shadow>\n      </value>\n      <value name="B">\n        <shadow type="math_number">\n          <field name="NUM">1</field>\n        </shadow>\n      </value>\n    </block>\n'},{kind:"block",blockxml:'    <block type="math_on_list">\n      <mutation op="SUM"></mutation>\n      <field name="OP">SUM</field>\n    </block>\n'},{kind:"block",blockxml:'    <block type="math_modulo">\n      <value name="DIVIDEND">\n        <shadow type="math_number">\n          <field name="NUM">64</field>\n        </shadow>\n      </value>\n      <value name="DIVISOR">\n        <shadow type="math_number">\n          <field name="NUM">10</field>\n        </shadow>\n      </value>\n    </block>\n'},{kind:"block",blockxml:'    <block type="math_constrain">\n      <value name="VALUE">\n        <shadow type="math_number">\n          <field name="NUM">50</field>\n        </shadow>\n      </value>\n      <value name="LOW">\n        <shadow type="math_number">\n          <field name="NUM">1</field>\n        </shadow>\n      </value>\n      <value name="HIGH">\n        <shadow type="math_number">\n          <field name="NUM">100</field>\n        </shadow>\n      </value>\n    </block>\n'},{kind:"block",blockxml:'    <block type="math_random_int">\n      <value name="FROM">\n        <shadow type="math_number">\n          <field name="NUM">1</field>\n        </shadow>\n      </value>\n      <value name="TO">\n        <shadow type="math_number">\n          <field name="NUM">100</field>\n        </shadow>\n      </value>\n    </block>\n'},{kind:"block",type:"math_random_float"}]},{kind:"category",name:"V\u0103n b\u1ea3n",colour:160,contents:[{kind:"block",blockxml:'    <block type="text_charAt">\n      <mutation at="true"></mutation>\n      <field name="WHERE">FROM_START</field>\n      <value name="VALUE">\n        <block type="variables_get">\n          <field name="VAR" id="q@$ZF(L?Zo/z`d{o.Bp!" variabletype="">text</field>\n        </block>\n      </value>\n    </block>\n'},{kind:"block",blockxml:'    <block type="text">\n      <field name="TEXT"></field>\n    </block>\n'},{kind:"block",blockxml:'    <block type="text_append">\n      <field name="VAR" id=":};P,s[*|I8+L^-.EbRi" variabletype="">item</field>\n      <value name="TEXT">\n        <shadow type="text">\n          <field name="TEXT"></field>\n        </shadow>\n      </value>\n    </block>\n'},{kind:"block",blockxml:'    <block type="text_length">\n      <value name="VALUE">\n        <shadow type="text">\n          <field name="TEXT">abc</field>\n        </shadow>\n      </value>\n    </block>\n'},{kind:"block",blockxml:'    <block type="text_isEmpty">\n      <value name="VALUE">\n        <shadow type="text">\n          <field name="TEXT"></field>\n        </shadow>\n      </value>\n    </block>\n'},{kind:"block",blockxml:'    <block type="text_indexOf">\n      <field name="END">FIRST</field>\n      <value name="VALUE">\n        <block type="variables_get">\n          <field name="VAR" id="q@$ZF(L?Zo/z`d{o.Bp!" variabletype="">text</field>\n        </block>\n      </value>\n      <value name="FIND">\n        <shadow type="text">\n          <field name="TEXT">abc</field>\n        </shadow>\n      </value>\n    </block>\n'},{kind:"block",blockxml:'    <block type="text_join">\n      <mutation items="2"></mutation>\n    </block>\n'},{kind:"block",blockxml:'    <block type="text_getSubstring">\n      <mutation at1="true" at2="true"></mutation>\n      <field name="WHERE1">FROM_START</field>\n      <field name="WHERE2">FROM_START</field>\n      <value name="STRING">\n        <block type="variables_get">\n          <field name="VAR" id="q@$ZF(L?Zo/z`d{o.Bp!" variabletype="">text</field>\n        </block>\n      </value>\n    </block>\n'},{kind:"block",blockxml:'    <block type="text_changeCase">\n      <field name="CASE">UPPERCASE</field>\n      <value name="TEXT">\n        <shadow type="text">\n          <field name="TEXT">abc</field>\n        </shadow>\n      </value>\n    </block>\n'},{kind:"block",blockxml:'    <block type="text_trim">\n      <field name="MODE">BOTH</field>\n      <value name="TEXT">\n        <shadow type="text">\n          <field name="TEXT">abc</field>\n        </shadow>\n      </value>\n    </block>\n'},{kind:"block",blockxml:'    <block type="text_print">\n      <value name="TEXT">\n        <shadow type="text">\n          <field name="TEXT">abc</field>\n        </shadow>\n      </value>\n    </block>\n'},{kind:"block",blockxml:'    <block type="text_prompt_ext">\n      <mutation type="TEXT"></mutation>\n      <field name="TYPE">TEXT</field>\n      <value name="TEXT">\n        <shadow type="text">\n          <field name="TEXT">abc</field>\n        </shadow>\n      </value>\n    </block>\n'}]},{kind:"category",name:"Danh s\xe1ch",colour:259,contents:[{kind:"block",blockxml:'    <block type="lists_indexOf">\n      <field name="END">FIRST</field>\n      <value name="VALUE">\n        <block type="variables_get">\n          <field name="VAR" id="e`(L;x,.j[[XN`F33Q5." variabletype="">list</field>\n        </block>\n      </value>\n    </block>\n'},{kind:"block",blockxml:'    <block type="lists_create_with">\n      <mutation items="0"></mutation>\n    </block>\n'},{kind:"block",blockxml:'    <block type="lists_repeat">\n      <value name="NUM">\n        <shadow type="math_number">\n          <field name="NUM">5</field>\n        </shadow>\n      </value>\n    </block>\n'},{kind:"block",type:"lists_length"},{kind:"block",type:"lists_isEmpty"},{kind:"block",blockxml:'    <block type="lists_create_with">\n      <mutation items="3"></mutation>\n    </block>\n'},{kind:"block",blockxml:'    <block type="lists_getIndex">\n      <mutation statement="false" at="true"></mutation>\n      <field name="MODE">GET</field>\n      <field name="WHERE">FROM_START</field>\n      <value name="VALUE">\n        <block type="variables_get">\n          <field name="VAR" id="e`(L;x,.j[[XN`F33Q5." variabletype="">list</field>\n        </block>\n      </value>\n    </block>\n'},{kind:"block",blockxml:'    <block type="lists_setIndex">\n      <mutation at="true"></mutation>\n      <field name="MODE">SET</field>\n      <field name="WHERE">FROM_START</field>\n      <value name="LIST">\n        <block type="variables_get">\n          <field name="VAR" id="e`(L;x,.j[[XN`F33Q5." variabletype="">list</field>\n        </block>\n      </value>\n    </block>\n'},{kind:"block",blockxml:'    <block type="lists_getSublist">\n      <mutation at1="true" at2="true"></mutation>\n      <field name="WHERE1">FROM_START</field>\n      <field name="WHERE2">FROM_START</field>\n      <value name="LIST">\n        <block type="variables_get">\n          <field name="VAR" id="e`(L;x,.j[[XN`F33Q5." variabletype="">list</field>\n        </block>\n      </value>\n    </block>\n'},{kind:"block",blockxml:'    <block type="lists_split">\n      <mutation mode="SPLIT"></mutation>\n      <field name="MODE">SPLIT</field>\n      <value name="DELIM">\n        <shadow type="text">\n          <field name="TEXT">,</field>\n        </shadow>\n      </value>\n    </block>\n'},{kind:"block",blockxml:'    <block type="lists_sort">\n      <field name="TYPE">NUMERIC</field>\n      <field name="DIRECTION">1</field>\n    </block>\n'}]},{kind:"sep"},{kind:"category",name:"Bi\u1ebfn",custom:"VARIABLE",colour:330},{kind:"category",name:"H\xe0m",custom:"PROCEDURE",colour:290},{kind:"sep"},{kind:"category",name:"Nh\xf3m \u0110i\u1ec1u Khi\u1ec3n",colour:19,contents:[{kind:"block",blockxml:'<block type="thang"><field name="THANG">100</field></block>'},{kind:"block",blockxml:'<block type="trai"><field name="TRAI">90</field></block>'},{kind:"block",blockxml:'<block type="phai"><field name="PHAI">90</field></block>'},{kind:"block",blockxml:'<block type="doi"><field name="MILISECONDS">1000</field></block>'}]}]},INITIAL_TOOLBOX_CATEGORIES:[{name:"Controls",blocks:[{type:"controls_if"},{type:"controls_repeat_ext",values:{TIMES:{type:"math_number",shadow:!0,fields:{NUM:10}}},statements:{DO:{type:"text_print",shadow:!0,values:{TEXT:{type:"text",shadow:!0,fields:{TEXT:"abc"}}}}}}]},{name:"Text",blocks:[{type:"text"},{type:"text_print",values:{TEXT:{type:"text",shadow:!0,fields:{TEXT:"abc"}}}}]}]},y=t(11),v=t(16),_=t.n(v),T=t(35),E=function(){var e=a.a.useState(h.INITIAL_TOOLBOX_JSON),n=Object(c.a)(e,2),t=n[0],o=(n[1],Object(l.useRef)()),i=Object(l.useState)(),m=Object(c.a)(i,2),s=m[0],b=m[1],f=Object(l.useState)(),k=Object(c.a)(f,2),v=k[0],E=k[1],w=Object(l.useState)(!1),g=Object(c.a)(w,2),x=g[0],O=g[1],R=Object(l.useState)(),N=Object(c.a)(R,2),A=N[0],S=N[1],I=Object(l.useState)(!1),M=Object(c.a)(I,2),U=(M[0],M[1]);function L(e,n){r.a.JavaScript.addReservedWords("alert"),r.a.JavaScript.addReservedWords("log"),r.a.JavaScript.addReservedWords("prompt"),r.a.JavaScript.addReservedWords("highlightBlock"),r.a.JavaScript.addReservedWords("waitForSeconds");var t=function(e){return alert(arguments.length?e:"")};e.setProperty(n,"alert",e.createNativeFunction(t)),t=function(e){return console.log(arguments.length?e:"")},e.setProperty(n,"log",e.createNativeFunction(t)),t=function(e){return prompt(e)},e.setProperty(n,"prompt",e.createNativeFunction(t)),t=function(e){return U(!1),A.highlightBlock(e)},e.setProperty(n,"highlightBlock",e.createNativeFunction(t)),t=function(){return O(!1),o.current.disabled=!1,A.highlightBlock("null")},e.setProperty(n,"resetHighlight",e.createNativeFunction(t)),t=e.createAsyncFunction((function(e,n){console.log(n),setTimeout(n,e)})),e.setProperty(n,"waitForSeconds",t),t=function(e){try{window.ReactNativeWebView.postMessage(JSON.stringify({REQUEST:"UART",DATA:"f:"+e}))}catch(n){alert(n)}},e.setProperty(n,"thang",e.createNativeFunction(t)),t=function(e){try{window.ReactNativeWebView.postMessage(JSON.stringify({REQUEST:"UART",DATA:"l:"+e}))}catch(n){alert(n)}},e.setProperty(n,"trai",e.createNativeFunction(t)),t=function(e){try{window.ReactNativeWebView.postMessage(JSON.stringify({REQUEST:"UART",DATA:"r:"+e}))}catch(n){alert(n)}},e.setProperty(n,"phai",e.createNativeFunction(t))}r.a.setLocale(u),r.a.JavaScript.STATEMENT_PREFIX="highlightBlock(%1);\n",r.a.JavaScript.addReservedWords("highlightBlock"),r.a.JavaScript.INFINITE_LOOP_TRAP='if(--LoopTrap == 0) { window.alert("You have reached maximum loops (100 loops)"); \n throw "Infinite loop."};\n',window.addEventListener("android",(function(e){var n=JSON.parse(e.data);console.log("Received:",e.data),"XML"===n.REQUEST&&(window.alert("XML INJECT!"),E(n.DATA))})),window.setTimeout((function(){v||E(h.INITIAL_XML)}),2e3),a.a.useEffect((function(){var e={type:"thang",message0:"Gi\u1eef th\u1eb3ng %1 %2 mm",args0:[{type:"input_dummy"},{type:"field_number",name:"THANG",value:0,precision:1}],inputsInline:!0,previousStatement:null,nextStatement:null,colour:75,tooltip:"Gi\u1eef \u0111ai s\u1eaft th\u1eb3ng v\u1edbi trong ... gi\xe2y, \u0111\u1ed9 ch\xednh x\xe1c milim\xe9t",helpUrl:""};r.a.Blocks.thang={init:function(){this.jsonInit(e)}},r.a.JavaScript.thang=function(e){return"thang("+e.getFieldValue("THANG")+")\n"};var n={type:"trai",message0:"U\u1ed1n tr\xe1i %1 %2 \u0111\u1ed9",args0:[{type:"input_dummy"},{type:"field_number",name:"TRAI",value:0,precision:1}],inputsInline:!0,previousStatement:null,nextStatement:null,colour:0,tooltip:"U\u1ed1n tr\xe1i \u0111ai s\u1eaft trong ... gi\xe2y, \u0111\u1ed9 ch\xednh x\xe1c 1 \u0111\u1ed9",helpUrl:""};r.a.Blocks.trai={init:function(){this.jsonInit(n)}},r.a.JavaScript.trai=function(e){return"trai("+e.getFieldValue("TRAI")+")\n"};var t={type:"phai",message0:"U\u1ed1n ph\u1ea3i %1 %2 \u0111\u1ed9",args0:[{type:"input_dummy"},{type:"field_number",name:"PHAI",value:0,precision:1}],inputsInline:!0,previousStatement:null,nextStatement:null,colour:0,tooltip:"U\u1ed1n ph\u1ea3i \u0111ai s\u1eaft trong ... gi\xe2y, \u0111\u1ed9 ch\xednh x\xe1c 1 \u0111\u1ed9",helpUrl:""};r.a.Blocks.phai={init:function(){this.jsonInit(t)}},r.a.JavaScript.phai=function(e){return"phai("+e.getFieldValue("PHAI")+")\n"}}),[]);var C={type:"doi",message0:"\u0111\u1ee3i %1 mili-gi\xe2y",args0:[{type:"field_number",name:"MILISECONDS",min:0,max:6e5,value:1}],previousStatement:null,nextStatement:null,colour:120,tooltip:"D\u1eebng ho\u1ea1t \u0111\u1ed9ng trong ... mili-gi\xe2y, t\u1ed1i \u0111a 10 ph\xfat (60 *10 * 1000)",helpUrl:""};r.a.Blocks.doi={init:function(){this.jsonInit(C)}},r.a.JavaScript.doi=function(e){return"waitForSeconds("+Number(e.getFieldValue("MILISECONDS"))+");\n"};var X=a.a.useCallback((function(e){e.registerButtonCallback("saveFile",(function(){try{window.ReactNativeWebView.postMessage(JSON.stringify({REQUEST:"SAVE",DATA:s,OK:!0}))}catch(e){alert(e)}alert("Ch\u01b0\u01a1ng tr\xecnh \u0111\xe3 \u0111\u01b0\u1ee3c l\u01b0u")})),console.log(r.a.JavaScript.workspaceToCode(e)),S(e)}),[]),F=a.a.useCallback((function(e){console.log(e),b(e)}),[]);return Object(d.jsxs)(d.Fragment,{children:[v&&Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"btn-wrapper-view",children:Object(d.jsx)(y.a,{onClick:function(e){var n=document.getElementsByClassName("blocklyToolboxDiv")[0];"0"===n.style.opacity?(n.style.opacity="1",setTimeout((function(){n.style.display="block",window.dispatchEvent(new Event("resize"))}),300)):(n.style.opacity="0",setTimeout((function(){n.style.display="none",window.dispatchEvent(new Event("resize"))}),300))},variant:"outline-warning material-icons dodgerblue i-large",className:"btn-circle",children:"toll"})}),Object(d.jsx)("div",{className:"btn-wrapper",children:Object(d.jsx)(y.a,{ref:o,disabled:!1,onClick:function(e){O(!0),o.current.disabled=!0,console.log(o.current.disabled);var n=r.a.JavaScript.workspaceToCode(A);n="var LoopTrap = 100; \n"+n+"\n resetHighlight(); \n";var t=new _.a(n,L);!function e(){t.step()&&window.setTimeout(e,0)}()},variant:"outline-warning",className:"btn-circle material-icons dodgerblue i-large",children:x?"more_horiz":"flag"})})]}),v&&Object(d.jsx)(p,{toolboxConfiguration:t,workspaceConfiguration:{zoom:{controls:!0,wheel:!1,startScale:1,maxScale:2,minScale:.2,scaleSpeed:1.2,pinch:!0},horizontalLayout:!0,toolboxPosition:"end"},initialXml:v,className:"fill-height",onWorkspaceChange:X,onXmlChange:F,onImportXmlError:function(){return alert("Kh\xf4ng th\u1ec3 m\u1edf ch\u01b0\u01a1ng tr\xecnh.")},modalRef:[]}),Object(d.jsxs)("div",{className:"spin-container",children:[!v&&Object(d.jsx)(T.a,{animation:"border",variant:"warning"}),Object(d.jsx)("div",{style:{fontSize:"large"},children:"\u0110ang t\u1ea3i..."})]})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(31),t(32);window.addEventListener("load",(function(){var e=a.a.createElement(E);i.a.render(e,document.getElementById("root"))})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[33,1,2]]]);
//# sourceMappingURL=main.99a3a692.chunk.js.map