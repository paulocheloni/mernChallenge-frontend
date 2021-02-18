import React from 'react';
import {
  Card,
} from '@material-ui/core';
import addPages from '../lib/addPages';
import Layout from '../components/Layout';
import Main from '../components/Main';
import TextFieldWithButton from '../components/TextFieldWithButton/TextFieldWithButton';
import addJob from '../lib/addJob';

const getTextResolver = (getValues, dataName) => {
  const textResolver = {
    validate: () => getValues(dataName) === new RegExp(/[A-Z]/i),

  };
  return textResolver;
};

const getJobNameResolver = (getValues, dataName) => {
  const jobNameResolver = {
    validate: () => getValues(dataName) === new RegExp(/[A-Z]/i),
  };
  return jobNameResolver;
};

export default function Home() {
  return (
    <Main>
      <Card>
        <TextFieldWithButton
          addData={addPages}
          dataName="text"
          resolver={getTextResolver}
        />
      </Card>

      <Card>
        <TextFieldWithButton
          addData={addJob}
          dataName="jobName"
          resolver={getJobNameResolver}
        />
      </Card>

    </Main>
  );
}

Home.Layout = Layout;
