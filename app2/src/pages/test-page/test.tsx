import { format, formatISO } from 'date-fns';
import { id } from 'date-fns/locale';
import { TFunction, withTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
// import { Text } from 'w6-material-ui';
import usePostMessage from '../../commons/hooks/usePostMessage';
import useTest from './hooks/useTest';
import React from 'react';

function TestPage({ t }: Props) {
  const { data, cancelRequest } = useTest();
  console.log('dataaa1: ', data);

  const { responseMessage, getMessage } = usePostMessage();

  const getData = () => {
    getMessage('testdata');
  };

  return (
    <div style={{ padding: 20 }}>
      {/* <Text
        type="h3-500"
        color="text-navy"
        align="center"
        text="Welcome"
        tag="div"
      /> */}
      <div className="text-green-60">{t('common:title')} {t('titlePage')}</div>
      <Link to="/test2">Ke page 2 {responseMessage}</Link>

      <div style={{ marginTop: 20 }}>
        <button type="button" onClick={cancelRequest}>cancel request</button>
      </div>

      <div style={{ marginTop: 30 }}>
        <div> Date: {format(new Date(), 'dd MMM yyyy')}</div>
        <div> Date: {format(new Date(), 'dd MMMM yyyy', { locale: id })}</div>
        <div> Date ISO: {formatISO(new Date())}</div>
      </div>

      <div style={{ marginTop: 20 }}>
        <button type="button" onClick={getData}>get data</button>
      </div>

    </div>
  );
}

type Props = {
    t: TFunction;
};

export default withTranslation(['test', 'common'])(TestPage);
