// @flow

export type Lens<Obj, A> = {|
  get: Obj => A,
  set: (Obj, A) => Obj,
  modify: (Obj, (A) => A) => Obj
|};

export function mkLens<O, A>(get: O => A, set: (O, A) => O): Lens<O, A> {
  return {
    get: get,
    set: set,
    modify: (obj, f) => {
      return set(obj, f(get(obj)));
    }
  };
}
