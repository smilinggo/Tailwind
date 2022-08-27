function Header() {
  return (
    <header>
      <nav className="flex flex-row justify-between p-4 bg-black mb-5">
        <img src="./react-logo.png" width="60px" />
        <ul className="flex text-react-blue text-xl">
          <li className="mx-2">Pricing</li>
          <li className="mx-2">About</li>
          <li className="mx-2">Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-4 ml-4">
      <small>© 2022 Tate development. All rights reserved.</small>
    </footer>
  );
}

function MainContent() {
  return (
    <div className="mt-5 ml-4 ">
      <h1 className="text-3xl font-bold mb-6">Reasons I'm excited to learn React</h1>
      <ol className="list-decimal ml-4">
        <li>
          It's a popular library, so I'll be able to fit in with the cool kids!
        </li>
        <li>I'm more likely to get a job as a developer if I know React</li>
      </ol>
    </div>
  );
}

function Page() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));
