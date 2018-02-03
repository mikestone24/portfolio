export function getListItems(): string[] {
    // This dummy data is used to demonstrate
    // all data is sanitized safely, however
    // you could imagine this would be data from a
    // database in a real app
    return [
        'Item 0',
        'Item 1',
        'Item <script>alert(hack);</script>',
        'Item <!--injected!-->',
        'Just click to add more <b>bold</b>',
    ];
}

export function getMenuItems(): MenuItemProps[] {
    // These menu items represent each <li>
    // in the top menu bar, typically static data
    return [
        {
            id: 'home',
            href: '#',
            text: 'Home',
        },
      
    ];
}
