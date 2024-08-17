export class EventEmitter {
  constructor() {
    this.callbacks = {
      base: {},
    };
  }

  on(_names, callback) {
    if (typeof _names === 'undefined' || _names === '') {
      console.warn('wrong names');
      return false;
    }

    if (typeof callback !== 'function') {
      console.warn('wrong callback');
      return false;
    }

    const names = this.resolveNames(_names);

    for (const _name of names) {
      const name = this.resolveName(_name);

      if (!this.callbacks[name.namespace]) {
        this.callbacks[name.namespace] = {};
      }

      if (!Array.isArray(this.callbacks[name.namespace][name.value])) {
        this.callbacks[name.namespace][name.value] = [];
      }

      this.callbacks[name.namespace][name.value].push(callback);
    }

    return this;
  }

  off(_names) {
    if (typeof _names === 'undefined' || _names === '') {
      console.warn('wrong name');
      return false;
    }

    const names = this.resolveNames(_names);

    for (const _name of names) {
      const name = this.resolveName(_name);

      if (name.namespace !== 'base' && name.value === '') {
        delete this.callbacks[name.namespace];
      } else {
        if (name.namespace === 'base') {
          for (const namespace of Object.keys(this.callbacks)) {
            if (
              this.callbacks[namespace] &&
              Array.isArray(this.callbacks[namespace][name.value])
            ) {
              delete this.callbacks[namespace][name.value];
              if (Object.keys(this.callbacks[namespace]).length === 0) {
                delete this.callbacks[namespace];
              }
            }
          }
        } else if (
          this.callbacks[name.namespace] &&
          Array.isArray(this.callbacks[name.namespace][name.value])
        ) {
          delete this.callbacks[name.namespace][name.value];
          if (Object.keys(this.callbacks[name.namespace]).length === 0) {
            delete this.callbacks[name.namespace];
          }
        }
      }
    }

    return this;
  }

  trigger(_name, _args = []) {
    if (typeof _name === 'undefined' || _name === '') {
      console.warn('wrong name');
      return false;
    }

    let finalResult = null;
    const args = Array.isArray(_args) ? _args : [];
    const names = this.resolveNames(_name);
    const name = this.resolveName(names[0]);

    if (name.namespace === 'base') {
      for (const namespace of Object.keys(this.callbacks)) {
        if (
          this.callbacks[namespace] &&
          Array.isArray(this.callbacks[namespace][name.value])
        ) {
          for (const callback of this.callbacks[namespace][name.value]) {
            const result = callback.apply(this, args);
            if (typeof finalResult === 'undefined') {
              finalResult = result;
            }
          }
        }
      }
    } else if (this.callbacks[name.namespace]) {
      if (name.value === '') {
        console.warn('wrong name');
        return this;
      }

      if (Array.isArray(this.callbacks[name.namespace][name.value])) {
        for (const callback of this.callbacks[name.namespace][name.value]) {
          const result = callback.apply(this, args);
          if (typeof finalResult === 'undefined') {
            finalResult = result;
          }
        }
      }
    }

    return finalResult;
  }

  resolveNames(_names) {
    let names = _names;
    names = names.replace(/[^a-zA-Z0-9 ,/.]/g, '');
    names = names.replace(/[,/]+/g, ' ');
    return names.split(' ');
  }

  resolveName(name) {
    const parts = name.split('.');
    return {
      original: name,
      value: parts[0],
      namespace: parts.length > 1 && parts[1] !== '' ? parts[1] : 'base',
    };
  }
}
