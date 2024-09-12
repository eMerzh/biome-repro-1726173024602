/**
 * If possible, put your minimal reproduction in this file, but feel free to
 * create other files elsewhere in the project if necessary.
 *
 * Once you have a minimal reproduction, commit it and push it to a public
 * GitHub repo.
 */
const createMessage = (type, data) => new window.MessageEvent(type, { data: JSON.stringify(data) });
