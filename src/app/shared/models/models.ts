export class ChildrenMenuItem {
    title: string;
    routerLink: string;
}

export class MenuItem {
    title: string;
    key?: string;
    routerLink?: string;
    children?: Array<ChildrenMenuItem>;
}
