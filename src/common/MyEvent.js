class myEvent {
    constructor() {
      this.events = {};
    }
  
    on(type, listener) {
      if (type in this.events) {
        this.events[type].push(listener);
      } else {
        this.events[type] = [listener];
      }
    }
  
    once(type, listener) {
      if (type in this.events) {
        this.events[type].push({ fn: listener });
      } else {
        this.events[type] = [{ fn: listener }];
      }
    }
  
    emit(type, ...args) {
      let index = 0;
      while (index < this.events[type] ?.length) {
        if (typeof this.events[type][index] === "object") {
          this.events[type][index].fn([...args]);
          this.events[type].splice(index, 1);
        } else {
          this.events[type][index]([...args]);
          index++;
        }
      }
    }
  }
  
  export default myEvent;
  