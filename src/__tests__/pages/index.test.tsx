jest.mock('next/router', () => ({
  useRouter() {
    return {
      asPath: '/',
    };
  },
}));

describe('Index Page', () => {
  it('renders index page', async () => {
    // TODO: uncoment the following code when issue is resolved:  https://github.com/testing-library/react-testing-library/issues/1034
    // const { container } = render(<HomePage />);
    // expect(container.firstChild?.hasChildNodes()).toBeTruthy();
  });
});

export {};
