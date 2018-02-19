import * as test from 'tape';
import { fetchProps } from '../src/props';

test('fetchProps', t => {
    t.plan(5);
    const props = fetchProps();
    t.true(!!props);
    t.true(!!props.listItems);
    t.equal(props.listItems.length, 5);
});
