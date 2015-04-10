class LinkedList {
	/**
	 * Create a new linked linst
	 * @param  {LinkedList} base The previous link
	 * @return LinkedList
	 */
	constructor(base = undefined) {
		this.list = [base];
	}

	add(element) {
		this.list.push(element);

		return this;
	}

	/**
	 * Return a flat array of the linked list
	 * @return {Array}
	 */
	values() {
		let values = [];

		//First element of the list is another list or undefined
		if (this.list[0] !== undefined) {
			values = this.list[0].values();
		}
		values = values.concat(this.list.slice(1));

		return values;
	}
}

export default LinkedList;