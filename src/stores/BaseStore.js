import EventEmitter from 'events';

export default class BaseStore extends EventEmitter {
	constructor() {
		super();
		const CHANGE_EVENT = 'change';
	}

	emitChange() {
    	this.emit(this.CHANGE_EVENT);
  	}

	addChangeListener(callback) {
		this.on(this.CHANGE_EVENT, callback);
	}

	removeChangeListener(callback) {
		this.removeListener(this.CHANGE_EVENT, callback);
	}
}