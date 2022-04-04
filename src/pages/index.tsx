import * as React from 'react';

import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import Seo from '@/components/Seo';

import Vercel from '~/svg/Vercel.svg';

export default function HomePage() {
  return (
    <Layout>
      <Seo />

      <main>
        <section className='bg-white'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
            <Vercel className='text-5xl' />
            <h1 className='mt-4'>Wikrypto</h1>
            <ButtonLink className='mt-6' href='/components' variant='light'>
              See all components
            </ButtonLink>
          </div>
        </section>
      </main>
    </Layout>
  );
}
