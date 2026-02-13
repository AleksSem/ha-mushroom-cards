export function safeCustomElement(tagName: string) {
  return (clazz: CustomElementConstructor) => {
    if (!customElements.get(tagName)) {
      customElements.define(tagName, clazz);
    }
  };
}
