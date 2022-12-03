interface Item {
	id: string;
}

export function getById<P extends Item>(array: P[], id: string) {
	return array.find((item) => item.id === id);
}
