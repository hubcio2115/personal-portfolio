export function clearTextArea(input: HTMLTextAreaElement) {
  input.setSelectionRange(0, 0);
  input.focus();
  input.value = '';
}
