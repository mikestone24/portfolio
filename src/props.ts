import { getListItems} from './db';

export function fetchProps(): AppProps {
    return { listItems: getListItems() };
}
