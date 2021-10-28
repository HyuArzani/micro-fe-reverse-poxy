/* eslint-disable import/prefer-default-export */
import { commons } from '../../../commons/helpers';
import { PromiseWithCancel } from '../../../commons/helpers/http-request';
import testService from '../services/test.service';

export const getUserPage = ({ page }: any) => {
  const { controller } = commons.generateCancelSignal();
  const promise = testService.getUserPage(page, controller) as any;
  (promise as PromiseWithCancel<any>).cancel = () => {
    controller.abort();
  };
  return promise;
};
