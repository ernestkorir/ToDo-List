import createMockDocument from '../mocks/documentMock.js';
import { getAddedTodos } from '../../src/modules/newtodo.js';
import { todo } from '../../src/modules/displayList.js';

function addInputDescription(value, input) {
  input.value = value;
}
