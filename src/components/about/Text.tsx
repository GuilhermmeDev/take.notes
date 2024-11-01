export default function Text() {
  return (
    <>
      <hr className="m-6 " />
      <div className="flex flex-col ml-8 mr-24">
        <h2 className="font-bold text-6xl">Hey!</h2>
        <p className="font-medium text-lg font-mono text-justify mt-4">
          Welcome to Take.Notes, where we believe in A new way to organize your
          day. Our platform is designed to simplify your daily tasks and enhance
          your productivity. With Take.Notes, you can effortlessly manage your
          to-do lists, set reminders, and prioritize your responsibilities—all
          in one intuitive space.
        </p>
      </div>
      <div className="flex flex-col ml-8 mr-16 mt-16 w-10/12">
        <h2 className="font-bold text-4xl">To whom?</h2>
        <p className="font-medium text-lg font-mono text-justify mt-4 typing">
          Whether you’re a busy professional, a student juggling multiple
          assignments, or anyone looking to streamline their daily routine,
          Take.Notes is here to help. Our user-friendly interface allows you to
          customize your experience, making it easy to track your goals and stay
          focused.
        </p>
      </div>
    </>
  );
}
