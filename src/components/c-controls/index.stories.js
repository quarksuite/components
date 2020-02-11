import { define } from 'hybrids';
import Controls from './';

import Checkbox from '../b-checkbox';
import Radio from '../b-radio';

import Button from '../b-button';
import Color from '../b-color';
import Num from '../b-number';
import Range from '../b-range';
import Text from '../b-text';

define('c-controls', Controls);

define('b-checkbox', Checkbox);
define('b-radio', Radio);

define('b-button', Button);
define('b-color', Color);
define('b-number', Num);
define('b-range', Range);
define('b-text', Text);

export default {
  title: 'Knobs|Component/<c-controls>'
};

export const CanNestFieldsets = () => {
  return `
    <c-controls>
      <fieldset>
        <legend>Checkbox Collection</legend>
        <b-checkbox></b-checkbox>
      </fieldset>
      <fieldset>
        <legend>Radio Collection</legend>
        <b-radio></b-radio>
      </fieldset>
    </c-controls>
  `;
};
export const CanNestInputs = () => {
  return `
    <c-form>
    <div>
    <b-button></b-button>
    </div>
      <div>
        <label for="color">Color</label>
        <b-color id="color"></b-color>
      </div>
      <div>
        <label for="number">Number</label>
        <b-number id="number"></b-number>
      </div>
      <div>
        <label for="number"><b-range></b-range> Range</label>
      </div>
      <div>
        <label for="text">Text</label>
        <b-text id="text"></b-text>
      </div>
    </c-form>
  `;
};
