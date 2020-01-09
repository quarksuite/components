import '@webcomponents/webcomponentsjs/webcomponents-bundle.js';
import { define } from 'hybrids';

// global tokens
import '@quarksuite/tokens/dist/tokens.css';

import * as components from './components';

define({ ...components });
