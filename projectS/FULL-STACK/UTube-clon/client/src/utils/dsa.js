// Basic DSA used in UI behaviors
export class Stack {
  constructor() {
    this.a = [];
  }
  push(x) {
    this.a.push(x);
  }
  pop() {
    return this.a.pop();
  }
  peek() {
    return this.a[this.a.length - 1];
  }
  get length() {
    return this.a.length;
  }
}
export class Queue {
  constructor() {
    this.a = [];
    this.i = 0;
  }
  enqueue(x) {
    this.a.push(x);
  }
  dequeue() {
    return this.i < this.a.length ? this.a[this.i++] : undefined;
  }
  get length() {
    return this.a.length - this.i;
  }
}
export function quickSort(arr, cmp = (a, b) => a - b) {
  if (arr.length < 2) return arr.slice();
  const a = arr.slice();
  function qs(l, r) {
    if (l >= r) return;
    const p = a[Math.floor((l + r) / 2)];
    let i = l,
      j = r;
    while (i <= j) {
      while (cmp(a[i], p) < 0) i++;
      while (cmp(a[j], p) > 0) j--;
      if (i <= j) {
        [a[i], a[j]] = [a[j], a[i]];
        i++;
        j--;
      }
    }
    if (l < j) qs(l, j);
    if (i < r) qs(i, r);
  }
  qs(0, a.length - 1);
  return a;
}
export function binarySearch(
  a,
  x,
  cmp = (a, b) => (a < b ? -1 : a > b ? 1 : 0)
) {
  let l = 0,
    r = a.length - 1;
  while (l <= r) {
    const m = (l + r) >> 1;
    const c = cmp(a[m], x);
    if (c === 0) return m;
    if (c < 0) l = m + 1;
    else r = m - 1;
  }
  return -1;
}
export class Trie {
  constructor() {
    this.root = {};
  }
  insert(w) {
    let n = this.root;
    for (const c of w.toLowerCase()) {
      n[c] = n[c] || {};
      n = n[c];
    }
    n.$ = true;
  }
  suggest(p, limit = 5) {
    p = p.toLowerCase();
    let n = this.root;
    for (const c of p) {
      if (!n[c]) return [];
      n = n[c];
    }
    const out = [];
    const st = [[n, p]];
    while (st.length && out.length < limit) {
      const [x, pre] = st.pop();
      if (x.$) out.push(pre);
      for (const k of Object.keys(x).reverse()) {
        if (k === "$") continue;
        st.push([x[k], pre + k]);
      }
    }
    return out;
  }
}
export function debounce(fn, ms = 300) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), ms);
  };
}
