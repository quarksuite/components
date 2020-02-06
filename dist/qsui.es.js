import"@webcomponents/webcomponentsjs/webcomponents-bundle.js";import n from"prismjs";import{color as e,typography as a,scale as t}from"@quarksuite/core";import{html as r,define as o}from"hybrids";var l=Object.freeze(["\n  <style>\n    :host {\n      display: block;\n    }\n    :host[hidden] {\n      display: none;\n    }\n  </style>\n"]),i=r(l),s=Object.freeze(["\n      ","\n      <style>\n        :host {\n          --border-width: var(--ms-inline-4-x);\n          --swatch-padding: var(--ms-block-2-x);\n          --value-font: var(--font-system-mono);\n          --value-padding: calc(var(--swatch-padding) / 2);\n          --value-size: var(--ms-block-base);\n        }\n\n        div {\n          background: ",";\n          border: var(--border-width) solid;\n          border-color: ",";\n          padding: var(--swatch-padding);\n        }\n\n        code {\n          background: rgba(255, 255, 255, 0.8);\n          display: block;\n          font-family: var(--value-font);\n          font-size: var(--value-size);\n          padding: var(--value-padding);\n          text-align: center;\n        }\n      </style>\n      <div>\n        <code>","</code>\n      </div>\n    "]),c={value:"#aaaaaa",render:function(n){var a=n.value;return r(s,i,a,e.palette(a,{shades:{limit:1,contrast:24}})[0].shade,a)}},m=Object.freeze(['\n        <div class="range">\n          <label for="','">',": ","",'</label>\n          <input\n            id="','"\n            type="range"\n            value="','"\n            min="','"\n            max="','"\n            oninput="','"\n          />\n        </div>\n      ']),d=Object.freeze(['\n        <label class="range"\n          ><input\n            type="range"\n            value="','"\n            min="','"\n            max="','"\n            oninput=',"\n          />\n          ",": ",""," <small>","</small></label\n        >\n      "]),b=function(n,e,a,t){void 0===t&&(t={});var o=t.min;void 0===o&&(o=0);var l=t.max;void 0===l&&(l=100);var i=t.inline;void 0===i&&(i=!1);var s=t.desc,c=t.suffix;void 0===c&&(c="%");var b=n.toLowerCase().split(" ").join("-");return i?r(d,e,o,l,a,n,e,c,s):r(m,b,n,e,c,b,e,o,l,a)},f=Object.freeze(['\n          <label class="radio"\n            ><input\n              type="radio"\n              name="','"\n              value="','"\n              oninput="','"\n            />\n            ',"\n          </label>\n        "]),u=Object.freeze(['\n          <label class="radio"\n            ><input\n              type="radio"\n              name="','"\n              value="','"\n              oninput="','"\n              checked\n            />\n            ',"\n          </label>\n        "]),v=function(n,e,a){return Object.values(e).map(function(e,t){return r(0===t?u:f,n,e.value,a,e.label)})},p=Object.freeze(["\n  <style>\n    :host {\n      --form-flow: column wrap;\n      --form-font: var(--font-system-sans);\n      --form-margins: 0 0 var(--ms-block-base) 0;\n\n      --field-margins: 0 0 var(--ms-block-base) 0;\n\n      --fieldset-bg: var(--color-primary-tint-300);\n      --fieldset-border-width: var(--ms-inline-base);\n      --fieldset-border-style: solid;\n      --fieldset-border-color: var(--color-primary-base);\n      --fieldset-border: var(--fieldset-border-width)\n        var(--fieldset-border-style) var(--fieldset-border-color);\n\n      --label-font-size: var(--ms-block-base);\n\n      --button-main-bg: var(--color-primary-tint-300);\n      --button-main-border-color: var(--color-secondary-base);\n      --button-main-padding: var(--ms-block-base);\n      --button-main-font-size: var(--ms-block-2-x);\n\n      --button-sub-bg: var(--button-main-bg);\n      --button-sub-border-color: var(--color-tertiary-base);\n      --button-sub-font-size: calc(var(--button-main-font-size) / 2);\n      --button-sub-padding: calc(var(--button-main-padding) / 3);\n    }\n\n    form {\n      display: flex;\n      flex-flow: var(--form-flow);\n      font-family: var(--form-font);\n      margin: var(--form-margins);\n    }\n\n    label,\n    legend {\n      font-weight: 700;\n    }\n\n    fieldset {\n      border: var(--fieldset-border);\n    }\n\n    fieldset > label {\n      font-weight: 400;\n    }\n  </style>\n"]),g=r(p),y=Object.freeze(['\n                    <b-swatch class="variant" value="','"></b-swatch>\n                  ']),h=Object.freeze(['\n          <div class="category">\n            <button class="limit-ctrl" onclick="','">\n              -\n            </button>\n            <div class="palette">\n              ','\n            </div>\n            <button class="limit-ctrl" onclick="','">+</button>\n          </div>\n        ']),w=Object.freeze(["\n      "," ",'\n      <style>\n        :host {\n          --field-margins: calc(var(--ms-block-base) / 3);\n        }\n\n        b-swatch {\n          --border-width: var(--ms-inline-base);\n          --swatch-padding: var(--ms-block-base);\n          --value-size: calc(var(--ms-block-base) / 1.2);\n        }\n        .range {\n          margin-bottom: var(--field-margins);\n        }\n\n        .category,\n        .palette {\n          display: flex;\n          flex-flow: row wrap;\n        }\n\n        .palette {\n          flex: 64;\n        }\n\n        .variant {\n          flex: 1;\n        }\n\n        .limit-ctrl {\n          background: transparent;\n          border: none;\n          flex-grow: 1;\n          font-size: var(--ms-block-3-x);\n        }\n      </style>\n      <form action="">\n        '," ","\n        <fieldset>\n          <legend>Blend Mode</legend>\n          ","\n        </fieldset>\n      </form>\n      ","\n    "]),x=function(n){return++n.limit},k=function(n){1!==n.limit&&--n.limit},z=function(n,e){return n.mode=e.target.value},j={swatch:"#aaaaaa",type:"tints",limit:3,contrast:95,mode:"logarithmic",format:"hex",output:function(n){var a,t=n.format;return e.palette(n.swatch,((a={})[n.type]={limit:n.limit,contrast:n.contrast,mode:n.mode},a.format=t,a))},render:function(n){var e=n.type,a=n.output;return r(w,i,g,b("Contrast",n.contrast,r.set("contrast")),v,v("mode",[{label:"complex",value:"logarithmic"},{label:"simple",value:"linear"}],z),Object.values(a).map(function(n){return r(h,k,n[e.replace(/s$/g,"")].map(function(n){return r(y,n)}),x)}))}},O=Object.freeze(['\n      <label class="checkbox"\n        ><input\n          type="checkbox"\n          name="','"\n          value="','"\n          onchange="','"\n        />\n        ',"</label\n      >\n    "]),S=function(n,e,a){return Object.values(e).map(function(e){return r(O,n,e.value,a,e.label)})},C=Object.freeze(['\n            <c-variant\n              swatch="','"\n              type="shades"\n              limit="2"\n              format="','"\n            ></c-variant>\n          ']),B=Object.freeze(['\n            <c-variant\n              swatch="','"\n              type="tones"\n              limit="2"\n              format=',"\n            ></c-variant>\n          "]),U=Object.freeze(['\n            <c-variant swatch="','" format="','"></c-variant>\n          ']),I=Object.freeze(["\n      "," ",'\n      <style>\n        fieldset {\n          display: flex;\n          flex-flow: row wrap;\n        }\n\n        .checkbox {\n          flex-grow: 1;\n          text-align: center;\n        }\n\n        b-swatch {\n          margin-bottom: calc(var(--ms-block-base) / 2);\n        }\n\n        c-variant {\n          flex-grow: 1;\n          flex-basis: 50%;\n          margin-bottom: var(--ms-block-base);\n        }\n\n        .variants {\n          display: flex;\n          flex-flow: row wrap;\n        }\n      </style>\n      <b-swatch class="base" value="','"></b-swatch>\n      <form action="">\n        <fieldset>\n          <legend>Variants</legend>\n          ','\n        </fieldset>\n      </form>\n      <div class="variants">\n        ',"\n        ","\n        ","\n      </div>\n    "]),L=function(n,e){"tints"===e.target.value&&(n.tints=e.target.checked),"tones"===e.target.value&&(n.tones=e.target.checked),"shades"===e.target.value&&(n.shades=e.target.checked)},V={base:"#348ec9",tints:!1,tones:!1,shades:!1,format:"hex",render:function(n){var e=n.base,a=n.tints,t=n.tones,o=n.shades,l=n.format;return r(I,i,g,e,S("variants",[{label:"tints",value:"tints"},{label:"tones",value:"tones"},{label:"shades",value:"shades"}],L),a&&r(U,e,l),t&&r(B,e,l),o&&r(C,e,l)).define({BSwatch:c,CVariant:j})}},Q=Object.freeze(['\n    <style>\n      .color > label {\n        display: block;\n        margin-bottom: var(--ms-inline-base);\n      }\n\n      input[type=\'color\'] {\n        background: transparent;\n        border: none;\n        padding: 0;\n        display: block;\n        width: 100%;\n        height: var(--ms-block-7-x);\n      }\n    </style>\n    <div class="color">\n      <label for="','">','</label>\n      <input\n        id="','"\n        name="','"\n        type="color"\n        value="','"\n        oninput="','"\n      />\n    </div>\n  ']),T=function(n,a,t,o){void 0===o&&(o="hex");var l=n.toLowerCase().split(" ").join("-");return r(Q,l,n,l,l,e.format(a,"hex"),t)},q=Object.freeze(['\n  <button\n    class="button ','"\n    type="button"\n    value="','"\n    onclick="','"\n  >\n    ',"\n  </button>\n"]),D=function(n,e,a,t){return void 0===a&&(a=""),void 0===t&&(t=""),r(q,t,a,e,n)},A=Object.freeze(['\n              <div class="swatch">\n                ','\n                <ui-variants base="','"></ui-variants>\n              </div>\n            ']),H=Object.freeze(["\n      "," ",'\n      <style>\n        .color {\n          margin: var(--field-margins);\n        }\n\n        .button {\n          background: var(--button-main-bg);\n          border-radius: 0.25em;\n          border: 4px solid var(--button-main-border-color);\n          font-size: var(--button-main-font-size);\n          padding: var(--button-main-padding);\n        }\n\n        .palette {\n          display: flex;\n          flex-flow: row wrap;\n        }\n\n        .swatch {\n          position: relative;\n          flex: 1;\n        }\n\n        .button.remove {\n          border-radius: 0 0 0 0.5em;\n          position: absolute;\n          right: 0;\n          background: var(--color-primary-tint-300);\n          border: none;\n          font-size: 1em;\n          opacity: 0.8;\n          padding: 0.25em;\n          width: 1.5em;\n        }\n      </style>\n      <form action="">\n        ',"\n        ",'\n      </form>\n      <div class="palette">\n        ',"\n      </div>\n    "]),M=function(n,e){e.preventDefault(),n.palette=n.palette.concat([n.currentValue]).filter(function(n,e,a){return a.indexOf(n)===e})},R=function(n,e){e.preventDefault(),n.palette=n.palette.filter(function(n){return n!==e.target.value})},E={palette:[],currentValue:"#f00000",output:function(n){return n.palette},render:function(n){var e=n.output;return r(H,i,g,T("Color",n.currentValue,r.set("currentValue")),D("Add to Palette",M),e.map(function(n){return r(A,D("x",R,n,"remove"),n)})).define({UIVariants:V})}},F=Object.freeze(["\n      ",'\n      <style>\n        .filename,\n        .output-code {\n          font-family: var(--font-system-mono);\n          font-size: var(--ms-block-base);\n          margin: 0;\n        }\n\n        .filename {\n          background: var(--color-primary-base);\n          color: var(--color-primary-tint-300);\n          display: inline-block;\n          font-size: var(--ms-block-base);\n          padding: var(--ms-inline-3-x);\n        }\n\n        .output-code {\n          background: var(--color-primary-tint-300);\n          border: var(--ms-inline-base) solid var(--color-primary-base);\n          padding: var(--ms-inline-4-x);\n        }\n\n        /* prism theme */\n        .token.keyword {\n          color: var(--color-primary-base);\n          font-weight: 700;\n        }\n\n        .token.string {\n          color: var(--color-secondary-base);\n        }\n      </style>\n      <div class="filename"><code>','</code></div>\n      <pre class="output-code"><code innerHTML="','"></code></pre>\n    ']),P={data:{},variable:"output",filename:"system.js",output:function(e){return n.highlight("const "+e.variable+" = "+JSON.stringify(e.data,null,2)+";",n.languages.javascript,"javascript")},render:function(n){return r(F,i,n.filename,n.output)}},G=Object.freeze(["\n      "," ",'\n      <style>\n        :host {\n          --form-flow: row wrap;\n        }\n        form {\n          display: flex;\n          flex-flow: var(--form-flow);\n          justify-content: space-between;\n        }\n\n        .color {\n          margin: var(--field-margins);\n          flex-basis: 49.5%;\n        }\n\n        .range {\n          flex: 1;\n        }\n\n        .range > input {\n          width: 100%;\n        }\n      </style>\n      <form action="">\n        ',"\n        ","\n        ",'\n      </form>\n      <b-swatch value="','"></b-swatch>\n    ']),J={base:"dodgerblue",blend:"hotpink",amount:50,format:"hex",output:function(n){return e.mix(n.base,n.blend,n.amount)},render:function(n){var e=n.blend,a=n.amount,t=n.output;return r(G,i,g,T("Base Color",n.base,r.set("base")),T("Blend Target",e,r.set("blend")),b("Blend Amount",a,r.set("amount")),t).define({BSwatch:c})}},N=Object.freeze(['\n              <ui-variants\n                base="','"\n                format="','"\n              ></ui-variants>\n            ']),$=Object.freeze(["\n      "," ",'\n      <style>\n        form {\n          display: flex;\n          flex-flow: var(--form-flow);\n        }\n\n        @media (min-width: 32em) {\n          form {\n            flex-flow: row wrap;\n          }\n        }\n\n        .color,\n        fieldset {\n          margin: var(--field-margins);\n        }\n\n        @media (min-width: 32em) {\n          .color {\n            flex: 1;\n            margin-right: var(--ms-block-base);\n          }\n\n          .scheme {\n            flex: 3;\n          }\n        }\n\n        .format {\n          flex: 1;\n          flex-basis: 100%;\n          margin-bottom: var(--ms-block-base);\n        }\n\n        .type > .radio {\n          display: inline-block;\n        }\n\n        .format > .radio {\n          display: inline-block;\n        }\n\n        .palette {\n          display: flex;\n          flex-flow: row wrap;\n        }\n\n        ui-variants {\n          flex-grow: 1;\n        }\n\n        .options > label {\n          font-weight: 400;\n        }\n      </style>\n      <form action="">\n        ','\n        <div class="scheme">\n          <fieldset class="type">\n            <legend>\n              Scheme Type\n            </legend>\n            ','\n          </fieldset>\n          <fieldset>\n            <legend>Options</legend>\n            <div class="options">\n              ',"\n              ",'\n            </div>\n          </fieldset>\n        </div>\n        <fieldset class="format">\n          <legend>Output Format</legend>\n          ','\n        </fieldset>\n      </form>\n      <div class="palette">\n        ',"\n      </div>\n    "]),K=function(n,e){return n.type=e.target.value},W=function(n,e){return n.format=e.target.value},X=function(n,e){return n.accented=e.target.checked},Y={base:"#348ec9",type:"monochromatic",distance:30,accented:!1,format:"hex",output:function(n){return e.palette(n.base,{scheme:{type:n.type,distance:n.distance,accented:n.accented},format:n.format})},render:function(n){var e=n.distance,a=n.format,t=n.output;return r($,i,g,T("Base Color",n.base,r.set("base"),a),v("scheme-type",[{label:"mono",value:"monochromatic"},{label:"complement",value:"complementary"},{label:"analogous",value:"analogous"},{label:"split",value:"split complementary"},{label:"triadic",value:"triadic"},{label:"dual",value:"dual color"},{label:"tetradic",value:"tetradic"}],K),b("Distance",e,r.set("distance"),{min:15,max:45,inline:!0,desc:"(analogous, split, dual)",suffix:"°"}),S("option-accented",[{label:"Accented?",value:"accented"}],X),v("format",[{label:"Hex",value:"hex"},{label:"RGB",value:"rgb"},{label:"HSL",value:"hsl"}],W),Object.values(t).map(function(n,e){return r(N,n.base,a)})).define({UIVariants:V})}},Z=Object.freeze(["\n    ","\n    <style>\n      :host {\n        --sample-size: var(--ms-block-2-x);\n      }\n      .stack {\n        font-family: var(--font-system-sans);\n        font-size: var(--ms-block-base);\n      }\n\n      .stack > span {\n        background: var(--color-primary-base);\n        color: var(--color-primary-tint-300);\n        display: block;\n        padding: var(--ms-inline-4-x);\n        font-weight: 700;\n      }\n\n      .stack > span code {\n        color: var(--color-primary-tint-200);\n        font-weight: 400;\n      }\n\n      .stack > div {\n        border: var(--ms-inline-2-x) solid var(--color-primary-base);\n        padding: var(--ms-block-base);\n        font-family: ",';\n        font-size: var(--sample-size);\n      }\n    </style>\n    <div class="stack">\n      <span\n        >System ',":\n        <code>","</code></span\n      >\n      <div>The quick brown fox jumps over the lazy dog.</div>\n    </div>\n  "]),_={id:"sans",render:function(n){var e=n.id;return r(Z,i,a.system(e),[e[0].toUpperCase(),e.slice(1,e.length)].join(""),a.system(e))}},nn=Object.freeze(['\n            <b-font id="monospace"></b-font>\n          ']),en=Object.freeze(['\n            <b-font id="serif"></b-font>\n          ']),an=Object.freeze(["\n            <b-font></b-font>\n          "]),tn=Object.freeze(["\n      "," ",'\n      <style>\n        .system {\n          display: flex;\n          flex-flow: column wrap;\n        }\n\n        .system > b-font {\n          flex: 1;\n          margin-bottom: var(--ms-block-base);\n        }\n\n        @media (min-width: 32em) {\n          b-font {\n            --sample-size: var(--ms-block-3-x);\n          }\n        }\n      </style>\n      <form action="">\n        <fieldset>\n          <legend>Choose Stacks</legend>\n          ','\n        </fieldset>\n      </form>\n      <div class="system">\n        ',"\n        ","\n        ","\n      </div>\n    "]),rn=function(n,e){"sans"===e.target.value&&(n.sans=e.target.checked),"serif"===e.target.value&&(n.serif=e.target.checked),"monospace"===e.target.value&&(n.monospace=e.target.checked)},on={sans:!1,serif:!1,monospace:!1,output:function(n){var e=n.serif,t=n.monospace,r={};return n.sans&&(r.sans=a.system("sans")),e&&(r.serif=a.system("serif")),t&&(r.monospace=a.system("monospace")),r},render:function(n){var e=n.sans,a=n.serif,t=n.monospace;return r(tn,i,g,S("system",[{label:"sans",value:"sans"},{label:"serif",value:"serif"},{label:"monospace",value:"monospace"}],rn),e&&r(an),a&&r(en),t&&r(nn)).define({BFont:_})}},ln=Object.freeze(["\n      ","\n      <style>\n        :host {\n          --color: var(--color-primary-base);\n        }\n\n        .element {\n          display: flex;\n          flex-flow: column nowrap;\n          align-items: center;\n        }\n\n        .element > div {\n          background: var(--color);\n          margin-bottom: var(--ms-inline-base);\n          width: 100%;\n          height: ",';\n        }\n\n        .element > code {\n          font-size: var(--ms-block-base);\n        }\n      </style>\n      <div class="element">\n        <div></div>\n        <code>',": ","</code>\n      </div>\n    "]),sn={label:"base",value:"1rem",render:function(n){var e=n.value;return r(ln,i,e,n.label,e)}},cn=Object.freeze(['\n    <style>\n      .number > label {\n        display: block;\n        margin-bottom: var(--ms-inline-base);\n      }\n      input[type=\'number\'] {\n        background: var(--color-primary-tint-300);\n        border: var(--ms-inline-base) solid var(--color-primary-base);\n        box-sizing: border-box;\n        display: block;\n        padding: 0.75em;\n        width: 100%;\n      }\n    </style>\n    <div class="number">\n      <label for="','">','</label>\n      <input\n        id="','"\n        type="number"\n        value="','"\n        min="','"\n        step="','"\n        oninput="','"\n      />\n    </div>\n  ']),mn=function(n,e,a,t){void 0===t&&(t={});var o=t.min;void 0===o&&(o=1);var l=t.step;void 0===l&&(l=.001);var i=n.toLowerCase().split(" ").join("-");return r(cn,i,n,i,e||1,o,l,a)},dn=Object.freeze(['\n              <b-element\n                label="','"\n                value="','"\n              ></b-element>\n            ']),bn=Object.freeze(['\n              <b-element value="','"></b-element>\n            ']),fn=Object.freeze(["\n      "," ",'\n      <style>\n        form {\n          display: flex;\n          flex-flow: var(--form-flow);\n          margin: var(--form-margins);\n        }\n\n        @media (min-width: 32em) {\n          form {\n            flex-flow: row wrap;\n          }\n        }\n\n        b-element {\n          margin-bottom: var(--ms-block-2-x);\n        }\n\n        .scale,\n        .unit {\n          flex: 1;\n        }\n\n        .scale {\n          display: flex;\n          flex-flow: row nowrap;\n        }\n\n        .number {\n          margin: var(--field-margins);\n        }\n\n        @media (min-width: 32em) {\n          .scale {\n            margin-right: var(--ms-block-base);\n          }\n\n          .number {\n            flex: 1;\n            margin: 0;\n          }\n        }\n\n        .unit {\n          display: flex;\n          flex-flow: row wrap;\n        }\n\n        .radio {\n          display: block;\n        }\n      </style>\n      <form action="">\n        <div class="scale">\n          ',"\n          ","\n          ",'\n        </div>\n        <fieldset class="unit">\n          <legend>Output Unit</legend>\n          ',"\n        </fieldset>\n      </form>\n      ","\n    "]),un=function(n,e){return n.unit=e.target.value},vn={base:1,ratio:1.25,limit:4,unit:"rem",output:function(n){var e=n.unit;return t.output(t.create(n.base,n.ratio,n.limit),e)},render:function(n){var e=n.ratio,a=n.limit,t=n.output;return r(fn,i,g,mn("Base",n.base,r.set("base")),mn("Ratio",e,r.set("ratio")),mn("Limit",a,r.set("limit"),{step:1}),v("output-unit",[{label:"rem",value:"rem"},{label:"em",value:"em"},{label:"px",value:"px"},{label:"vw",value:"vw"},{label:"vh",value:"vh"},{label:"vmin",value:"vmin"},{label:"vmax",value:"vmax"}],un),t.map(function(n,e){return 0===e?r(bn,n):r(dn,[++e,"x"].join(""),n)})).define({BElement:sn})}},pn=Object.freeze(["\n      ","\n      <style>\n        .label {\n          background: var(--color-primary-base);\n          color: var(--color-primary-tint-300);\n          display: inline-block;\n          font-family: var(--font-system-sans);\n          font-size: var(--ms-block-2-x);\n          padding: var(--ms-block-base);\n        }\n\n        .label > code {\n          color: var(--color-primary-tint-200);\n          font-family: var(--font-system-mono);\n        }\n\n        .content {\n          border: 4px solid var(--color-primary-base);\n          background: var(--color-primary-tint-300);\n          padding: var(--ms-block-base);\n          font-family: var(--font-system-serif);\n          font-size: ",';\n        }\n      </style>\n      <div class="value">\n        <div class="label">',": <code>",'</code></div>\n        <div class="content">',"</div>\n      </div>\n    "]),gn={label:"base",value:"1rem",content:"The quick brown fox jumps over the lazy dog.",render:function(n){var e=n.value;return r(pn,i,e,n.label,e,n.content)}},yn=Object.freeze(['\n    <style>\n      .input > label {\n        display: block;\n        margin-bottom: var(--ms-inline-base);\n      }\n      input[type=\'text\'] {\n        background: var(--color-primary-tint-300);\n        border: var(--ms-inline-base) solid var(--color-primary-base);\n        box-sizing: border-box;\n        display: block;\n        padding: 0.5em;\n        width: 100%;\n      }\n    </style>\n    <div class="input">\n      <label for="','">','</label>\n      <input\n        id="','"\n        type="text"\n        placeholder="','"\n        value="','"\n        oninput="','"\n      />\n    </div>\n  ']),hn=Object.freeze(['\n              <b-scale\n                label="','"\n                value="','"\n                content="','"\n              ></b-scale>\n            ']),wn=Object.freeze(['\n              <b-scale value="','" content="','"></b-scale>\n            ']),xn=Object.freeze(["\n      "," ",'\n      <style>\n        form {\n          display: flex;\n          flex-flow: var(--form-flow);\n          margin: var(--form-margins);\n        }\n\n        @media (min-width: 32em) {\n          form {\n            flex-flow: row wrap;\n          }\n        }\n\n        b-scale {\n          margin-bottom: var(--ms-block-2-x);\n        }\n\n        .input {\n          flex-basis: 100%;\n          margin: var(--field-margins);\n        }\n\n        .scale,\n        .unit {\n          flex: 1;\n        }\n\n        .scale {\n          display: flex;\n          flex-flow: row nowrap;\n        }\n\n        .number {\n          margin: var(--field-margins);\n        }\n\n        @media (min-width: 32em) {\n          .scale {\n            margin-right: var(--ms-block-base);\n          }\n\n          .number {\n            flex: 1;\n            margin: 0;\n          }\n        }\n\n        .unit {\n          display: flex;\n          flex-flow: row wrap;\n        }\n\n        .radio {\n          display: block;\n        }\n      </style>\n      <form action="">\n        ','\n        <div class="scale">\n          ',"\n          ","\n          ",'\n        </div>\n        <fieldset class="unit">\n          <legend>Output Unit</legend>\n          ',"\n        </fieldset>\n      </form>\n      ","\n    "]),kn=function(n,e){return n.unit=e.target.value};o(Object.assign({},{QSUICustom:E,QSUIDataview:P,QSUIMix:J,QSUIScheme:Y,QSUISysfonts:on,QSUIProportion:vn,QSUIContent:{base:1,ratio:1.25,limit:4,unit:"rem",content:"The quick brown fox jumps over the lazy dog.",output:function(n){var e=n.unit;return t.output(t.create(n.base,n.ratio,n.limit),e)},render:function(n){var e=n.base,a=n.ratio,t=n.limit,o=n.content,l=n.output;return r(xn,i,g,function(n,e,a,t){var o="Enter some sample text";void 0===o&&(o="description of input");var l="Sample Content".toLowerCase().split(" ").join("-");return r(yn,l,"Sample Content",l,o,e||"",a)}(0,o,r.set("content")),mn("Base",e,r.set("base")),mn("Ratio",a,r.set("ratio")),mn("Limit",t,r.set("limit"),{step:1}),v("output-unit",[{label:"rem",value:"rem"},{label:"em",value:"em"},{label:"px",value:"px"},{label:"ch",value:"ch"},{label:"ex",value:"ex"}],kn),l.map(function(n,e){return 0===e?r(wn,n,o):r(hn,[++e,"x"].join(""),n,o)})).define({BScale:gn})}}}));
//# sourceMappingURL=qsui.es.js.map
