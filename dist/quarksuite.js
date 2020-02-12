require("@webcomponents/webcomponentsjs/webcomponents-bundle.js");var n,e=(n=require("prismjs"))&&"object"==typeof n&&"default"in n?n.default:n,a=require("hybrids"),l=Object.freeze(["\n  <style>\n    :host {\n      display: block;\n    }\n    :host[hidden] {\n      display: none;\n    }\n  </style>\n"]),t=a.html(l),r=Object.freeze(["\n    ",'\n    <style>\n      :host {\n        --form-flow: column wrap;\n        --form-font: sans-serif;\n        --form-margins: 0 0 1.25em 0;\n      }\n\n      form {\n        display: flex;\n        flex-flow: var(--form-flow);\n        font-family: var(--form-font);\n        margin: var(--form-margins);\n      }\n    </style>\n    <form action="">\n      <slot></slot>\n    </form>\n  ']),o={render:function(){return a.html(r,t)}},i=Object.freeze(["\n    ","\n    <style>\n      :host {\n        --fieldset-border: 2px solid black;\n        --fieldset-font: sans-serif;\n\n        --legend-padding: 0 0.5em;\n        --legend-weight: 700;\n\n        font-family: var(--fieldset-font);\n      }\n\n      fieldset {\n        border: var(--fieldset-border);\n      }\n\n      legend {\n        font-weight: var(--legend-weight);\n        padding: var(--legend-padding);\n      }\n\n      ::slotted(qs-field) {\n        display: inline-block;\n      }\n    </style>\n    <fieldset>\n      <legend>","</legend>\n      <slot></slot>\n    </fieldset>\n  "]),d={group:"The Legend of Fieldset",render:function(n){return a.html(i,t,n.group)}},s=Object.freeze(["\n          <style>\n            :host {\n              --label-margins: 0 0 0 0.5em;\n            }\n\n            ::slotted(input) {\n              margin: var(--label-margins);\n            }\n          </style>\n          <label>","<slot></slot></label>\n        "]),b=Object.freeze(['\n          <style>\n            :host {\n              --label-margins: 0 0 0.5em 0;\n            }\n\n            ::slotted(input) {\n              margin: var(--label-margins);\n            }\n          </style>\n          <slot></slot>\n          <label for="','">',"</label>\n        "]),c=Object.freeze(["\n          <style>\n            :host {\n              --label-margins: 0 0.25em 0 0;\n            }\n\n            ::slotted(input) {\n              margin: var(--label-margins);\n            }\n          </style>\n          <label><slot></slot>","</label>\n        "]),f=Object.freeze(['\n          <style>\n            :host {\n              --label-margins: 0.5em 0 0 0;\n            }\n            ::slotted(input) {\n              margin: var(--label-margins);\n            }\n          </style>\n          <label for="','">',"</label>\n          <slot></slot>\n        "]),v=Object.freeze(["\n    ","\n    <style>\n      :host {\n        --field-font: sans-serif;\n        --label-weight: 700;\n\n        --input-border: 4px solid black;\n        --input-radius: 0.5em;\n        --input-padding: 0.75em;\n\n        --color-input-height: 3em;\n\n        font-family: var(--field-font);\n      }\n\n      label {\n        display: block;\n        font-weight: var(--label-weight);\n      }\n\n      ::slotted(input[type='text']),\n      ::slotted(input[type='number']) {\n        border: var(--input-border);\n        box-sizing: border-box;\n        border-radius: var(--input-radius);\n        padding: var(--input-padding);\n        width: 100%;\n      }\n\n      ::slotted(input[type='color']) {\n        background: transparent;\n        box-sizing: border-box;\n        border: none;\n        border-radius: 0;\n        padding: 0;\n        width: 100%;\n        height: var(--color-input-height);\n      }\n    </style>\n    <div>\n      ","\n      ","\n      ","\n      ","\n    </div>\n  "]),g={label:"Read the Label",labelPos:"top",id:"id",render:function(n){var e=n.label,l=n.labelPos,r=n.id;return a.html(v,t,"top"===l&&a.html(f,r,e),"right"===l&&a.html(c,e),"bottom"===l&&a.html(b,r,e),"left"===l&&a.html(s,e))}},m=Object.freeze(["\n      ",'\n      <style>\n        :host {\n          --label-bg: black;\n          --label-fg: white;\n          --label-padding: 1em;\n          --code-font: monospace;\n          --code-border: 4px solid black;\n          --font-size: 1.25em;\n\n          --theme-bg: white;\n          --theme-padding: var(--label-padding);\n          --theme-keyword-color: red;\n          --theme-string-color: lime;\n\n          font-family: var(--code-font);\n          font-size: var(--font-size);\n        }\n        .filename,\n        .output-code {\n          margin: 0;\n        }\n\n        .filename {\n          background: var(--label-bg);\n          color: var(--label-fg);\n          display: inline-block;\n          padding: var(--label-padding);\n        }\n        .output-code {\n          background: var(--theme-bg);\n          border: var(--code-border);\n          padding: var(--theme-padding);\n        }\n\n        /* prism theme */\n        .token.keyword {\n          color: var(--theme-keyword-color);\n          font-weight: 700;\n        }\n\n        .token.string {\n          color: var(--theme-string-color);\n        }\n      </style>\n      <div class="filename"><code>','</code></div>\n      <pre class="output-code"><code innerHTML="','"></code></pre>\n    ']),p={data:{},variable:"output",filename:"system.js",format:function(n){return JSON.stringify(n.data,null,2)},output:function(n){return e.highlight("const "+n.variable+" = "+n.format+";",e.languages.javascript,"javascript")},render:function(n){return a.html(m,t,n.filename,n.output)}},u=Object.freeze(["\n      ","\n      <style>\n        :host {\n          --color: black;\n          --margin: 0 0 0.5em 0;\n          --font-size: 1rem;\n          --flex-flow: column nowrap;\n          --align-items: center;\n          --width: 100%;\n        }\n\n        .element {\n          display: flex;\n          flex-flow: var(--flex-flow);\n          align-items: var(--align-items);\n        }\n\n        .element > div {\n          background: var(--color);\n          margin: var(--margin);\n          width: var(--width);\n          height: ",';\n        }\n\n        .element > code {\n          font-size: var(--font-size);\n        }\n      </style>\n      <div class="element">\n        <div></div>\n        <code>',": ","</code>\n      </div>\n    "]),h={label:"base",value:"1rem",render:function(n){var e=n.value;return a.html(u,t,e,n.label,e)}},y=Object.freeze(["\n    ",'\n    <style>\n      :host {\n        --label-bg: black;\n        --label-fg: white;\n        --label-padding: 1em;\n        --label-size: 1.25em;\n        --label-font: sans-serif;\n\n        --value-font: monospace;\n        --value-opacity: 0.8;\n\n        --content-border: 4px solid black;\n        --content-padding: calc(var(--label-padding) / 1.5);\n        --content-size: calc(var(--label-size) * 1.25);\n      }\n\n      .label {\n        background: var(--label-bg);\n        color: var(--label-fg);\n        padding: var(--label-padding);\n        font-family: var(--label-font);\n        font-size: var(--label-size);\n        font-weight: 700;\n      }\n\n      .label > code {\n        opacity: var(--value-opacity);\n        font-family: var(--value-font);\n        font-weight: 400;\n      }\n\n      .content {\n        border: var(--content-border);\n        padding: var(--content-padding);\n        font-size: var(--content-size);\n      }\n    </style>\n    <div class="stack">\n      <div class="label">',": <code>",'</code></div>\n      <div class="content">The quick brown fox jumps over the lazy dog.</div>\n    </div>\n  ']),w={name:"Sans",stack:"sans-serif",render:function(n){return a.html(y,t,n.name,n.stack)}},z=Object.freeze(["\n      ","\n      <style>\n        :host {\n          --bg: black;\n          --color: white;\n\n          --label-font: sans-serif;\n          --label-size: 1.25em;\n          --label-padding: 1em;\n\n          --value-font: monospace;\n          --value-opacity: 0.8;\n\n          --content-border: 4px solid black;\n          --content-padding: var(--label-padding);\n        }\n        .label {\n          background: var(--bg);\n          color: var(--color);\n          display: inline-block;\n          font-family: var(--label-font);\n          font-size: var(--label-size);\n          padding: var(--label-padding);\n        }\n\n        .label > code {\n          opacity: var(--value-opacity);\n          font-family: var(--value-font);\n        }\n\n        .content {\n          border: var(--content-border);\n          background: var(--color);\n          padding: var(--content-padding);\n          font-family: var(--font-system-serif);\n          font-size: ",';\n        }\n      </style>\n      <div class="value">\n        <div class="label">',": <code>",'</code></div>\n        <div class="content">',"</div>\n      </div>\n    "]),k={label:"base",value:"1rem",content:"The quick brown fox jumps over the lazy dog.",render:function(n){var e=n.value;return a.html(z,t,e,n.label,e,n.content)}},j=Object.freeze(["\n      ","\n      <style>\n        :host {\n          --border-color: black;\n          --border-width: 4px;\n          --border-radius: 0;\n\n          --swatch-padding: 1.5em;\n\n          --value-font: monospace;\n          --value-padding: calc(var(--swatch-padding) / 2);\n          --value-size: 1rem;\n        }\n\n        div {\n          background: ",";\n          border: var(--border-width) solid var(--border-color);\n          border-radius: var(--border-radius);\n          padding: var(--swatch-padding);\n        }\n\n        code {\n          background: rgba(255, 255, 255, 0.8);\n          border-radius: calc(var(--border-radius) / 2);\n          display: block;\n          font-family: var(--value-font);\n          font-size: var(--value-size);\n          padding: var(--value-padding);\n          text-align: center;\n        }\n      </style>\n      <div>\n        <code>","</code>\n      </div>\n    "]),x={value:"#aaaaaa",render:function(n){var e=n.value;return a.html(j,t,e,e)}};a.define(Object.assign({},{QSControls:o,QSFieldset:d,QSField:g,QSData:p,QSElement:h,QSFont:w,QSScale:k,QSSwatch:x}));
//# sourceMappingURL=quarksuite.js.map
