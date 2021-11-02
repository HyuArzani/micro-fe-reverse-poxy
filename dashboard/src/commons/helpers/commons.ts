import AbortController from 'node-abort-controller';
import { POST_MESSAGE_TYPE } from '../constants';

const parentUrl = window.location.ancestorOrigins?.[0];

export function generateCancelSignal() {
  const controller = new AbortController();
  const { signal } = controller;
  return { controller, signal };
}

export function postMessage(args: any) {
  window.parent.postMessage({ type: POST_MESSAGE_TYPE.POST, message: args }, parentUrl);
}

export function getMessage(key: string) {
  window.parent.postMessage({ type: POST_MESSAGE_TYPE.GET, key }, parentUrl);
}
