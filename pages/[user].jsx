import React from 'react';
import Link from 'next/link';
import dbConnect from '../utils/dbconnects';
import userModel from '../models/schemas/user';
import Layout from '../components/Layout';
import Main from '../components/Main';

const User = (pageProps) => {
  const { data } = pageProps;
  console.log(data);
  if (data) {
    const user = JSON.parse(data)[0] ?? null;

    return (

      <Main>
        <p>
          This page is for
          {' '}
          <strong>
            {user.name}
          </strong>
        </p>
        <Link href={`/${user.name}`} replace>Share</Link>
      </Main>
    );
  }
  return null;
};

export async function getStaticPaths() {
  await dbConnect();
  const users = await userModel.methods.getAll();
  const paths = users.map((doc) => ({
    params: { user: doc.name },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  await dbConnect();
  const user = await userModel.getUser(params.user);
  return { props: { data: JSON.stringify(user) } };
}

export default User;

User.Layout = Layout;
