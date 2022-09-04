type wrapProp = {
	condition: boolean;
	wrapper: any;
	children: React.ReactNode;
};

export default function ConditionalWrapper({
	condition,
	wrapper,
	children,
}: wrapProp) {
	return condition ? children : wrapper(children);
}
