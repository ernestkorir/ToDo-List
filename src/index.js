import './index.css';

import inject from './modules/inject.js';
import { getAddedTodos, form } from './modules/newtodo.js';

inject();

form.addEventListener('submit', getAddedTodos);