// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IProps {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IState {}

export interface IContactFormState extends IState {
	name?: string
	email?: string
	message?: string
}

export interface IMobileMenuState extends IState {
	isToggleOn?: boolean
}
