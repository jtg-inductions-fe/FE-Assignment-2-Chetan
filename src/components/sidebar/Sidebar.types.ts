export interface SidebarProps {
    open: boolean;
    onClose: () => void;
}

export interface SidebarItem {
    label: string;
    path: string;
}
