// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IProps {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IState {}

export interface IContactFormState extends IState {
	name?: string
	email?: string
	message?: string
}

export interface TextLink {
    text: string;
    link: string;
}

export interface SocialLink extends TextLink {
    imageLocation: string;
}

export interface INavigationMenuProps extends IProps {
    isToggleOn?: boolean;
    onHandleMenuClick?: () => void;
    textLinks?: TextLink[];
    socialLinks?: SocialLink[];
}

export interface IMobileMenuState extends IState {
	isToggleOn?: boolean;
    handleMenuClick?: () => void;
}
